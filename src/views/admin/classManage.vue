<template>
    <div class="classInfo">
        <div class="statusBar">
            <label>班级信息列表</label>
        </div>
        <div class="classInfoTable">
            <table>
                <thead>
                    <tr>
                        <td>序号</td>
                        <td>班级编号</td>
                        <td>年级</td>
                        <td>班级名称</td>
                        <td>人数</td>
                        <td class="setting">操作</td>
                    </tr>
                </thead>
                <tbody>
                     <tr v-for = "(item,index) in dataList" :key = "index">
                        <td>{{ getNumber ( index +1 ) }}</td>
                        <td>{{item.classNum}}</td>
                        <td>{{item.grade}}</td>
                        <td>{{item.className}}</td>
                        <td><span>{{countArr[index]}}</span></td>
                        <td>
                            <el-button type="warning" class='update' @click="updateClass(item.ID)">修改</el-button>
                            <el-button type="danger"  class='del' :ID="item.ID" @click="delClass(item.ID)">删除</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pageSize"
                layout="prev, pager, next, jumper"
                :total="totalSize">
            </el-pagination>
            <el-button type="primary"  class='add' @click="toAddClass">添加</el-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'majorInfo',
  data () {
    return {
      dataList: '',
      currentPage: 1,
      pageSize: 10,
      totalSize: 0,
      countArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      classNum: ''
    }
  },
  methods: {
    toAddClass () {
      this.$router.push({path: '/admin/addClass'})
    },
    getClassStuCount (grade, className, index) {
      var that = this
      var searchObj = {grade: grade, className: className, stuName: '', page: '0'}
      this.$axios.post('http://127.0.0.1:3000/admin/searchStu', {
        params: {
          searchObj: searchObj
        }
      }).then(res => {
        var result = res.data
        if (result.code === 1) {
          this.$set(that.countArr, index, result.data.length)
          console.log(index)
          if (index === 9) { console.log(that.countArr) }
        } else {
          alert('查询失败', result.msg)
        }
      })
    },
    getNumber (index) {
      return (this.currentPage - 1) * 10 + index
    },
    delClass (ID) {
      var adminPower = localStorage.getItem('adminPower')
      if (parseInt(adminPower) === 0) {
        alert('权限不足')
        return
      }
      this.$axios.post('http://127.0.0.1:3000/delClass', {
        params: {
          ID: ID
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          alert('删除成功')
        } else {
          alert('删除失败', result.msg)
        }
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      // var getCount = async () => {
      //   await
      this.$axios.post('http://127.0.0.1:3000/getClassList', {
        params: {
          page: this.currentPage
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          this.dataList = result.data
          this.totalSize = result.totalSize
          this.dataList.forEach((item, index) => {
            this.getClassStuCount(item.grade, item.className, index)
          })
        } else {
          alert('查询失败', result.msg)
        }
      })
      // }
      // getCount()
    },
    getClassList (currentPage) {
      this.$axios.post('http://127.0.0.1:3000/getClassList', {
        params: {
          page: currentPage
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          this.dataList = result.data
          this.totalSize = result.totalSize
          console.log(this.dataList)
          for (var i = 0; i < this.dataList.length; i++) {
            this.getClassStuCount(this.dataList[i].grade, this.dataList[i].className, i)
          }
          console.log(this.totalSize)
        } else {
          alert('查询失败', result.msg)
        }
      })
    },
    updateClass (ID) {
      this.$router.push({ path: `/admin/updateClass/${ID}` })
    }
  },
  mounted () {
    this.getClassList(this.currentPage)
  }
}
</script>

<style lang="scss" scoped>
    .classInfo{
        padding:10px 0 0 15px;
        .statusBar{
            padding:10px 0 0 0;
            height:30px;
            width:100%;
            border-bottom:1px dashed #d9dfe4;
            label{
                border-left:2px solid #2a94de;
                padding-left:20px;
                font-size:16px;
            }
        }
        .searchBar{
            height:60px;
        }
        .classInfoTable{
            padding:0 30px 0 0;
            width: 1300px;
            table{
                font-size: 14px;
                width: 100%;
                margin:20px 0 0 0;
                border-collapse: collapse;
                thead{
                    line-height:40px;
                    text-align:center;
                    background-color: #52baf6;
                    .setting{
                        width:200px;
                    }
                }
                tbody{
                    td{
                        text-align: center;
                    }
                }
                td{
                    border:1px solid #000;
                }
            }
        }
        .update{
            float:left;
            margin-left:20px;
        }
        .del{
            float:right;
            margin-right:20px;

        }
        .add{
            float:right;
            margin-right:20px;
            margin-top:20px;
        }
    }
</style>
