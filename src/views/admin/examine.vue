<template>
    <div class="stuInfo">
        <div class="statusBar">
            <label>审核校友信息列表</label>
        </div>
        <div class="stuInfoTable">
            <table>
                <thead>
                    <tr>
                        <td>序号</td>
                        <td>用户名</td>
                        <td>姓名</td>
                        <td>年级</td>
                        <td>班级</td>
                        <td>联系电话</td>
                        <td>邮箱</td>
                        <td>工作单位</td>
                        <td>就业省市</td>
                        <td>生源地</td>
                        <td class="setting">审核</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "(item,index) in dataList" :key = "index">
                        <td>{{ getNumber ( index +1) }}</td>
                        <td>{{item.userName}}</td>
                        <td>{{item.stuName}}</td>
                        <td>{{item.grade}}</td>
                        <td>{{item.className}}</td>
                        <td>{{item.tel}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.company}}</td>
                        <td>{{item.workCity}}</td>
                        <td>{{item.fromCity}}</td>
                        <td>
                            <el-button type="warning" class='update' @click="updateStu(item.ID)">通过</el-button>
                            <el-button type="danger"  class='del' :ID="item.ID" @click="delStu(item.ID)">拒绝</el-button>
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
        </div>
    </div>
</template>

<script>
export default {
  name: 'stuInfoMg',
  methods: {
    toAddStu () {
      console.log(11)
      this.$router.push({path: '/admin/AddStuInfo'})
    },
    isClassAdmin (status) {
      if (status === 1) {
        return '班级管理员'
      }
      return '无'
    },
    getNumber (index) {
      return (this.currentPage - 1) * 10 + index
    },
    getClassList () {
      this.classOptions = []
      for (const key in this.classList) {
        if (this.classList[key].grade === this.grade.toString()) {
          console.log(111)
          var object = {value: this.classList[key].className, label: this.classList[key].className}
          this.classOptions.push(object)
        }
      }
      console.log(this.classOptions)
    },
    delStu (ID) {
      var adminPower = localStorage.getItem('adminPower')
      if (parseInt(adminPower) === 0) {
        alert('权限不足')
        return
      }
      this.$axios.post('http://127.0.0.1:3000/delStu', {
        params: {
          ID: ID
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          alert('删除成功')
          this.getStuList(this.currentPage)
        } else {
          alert('删除失败', result.msg)
        }
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      var searchObj = {grade: this.grade, className: this.className, stuName: this.stuName, page: this.currentPage}
      this.$axios.post('http://127.0.0.1:3000/admin/getExamineStuList', {
        params: {
          searchObj: searchObj
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          this.dataList = result.data
          this.totalSize = result.totalSize
        } else {
          alert('查询失败', result.msg)
        }
      })
    },
    getStuList (currentPage) {
      this.$axios.post('http://127.0.0.1:3000/getExamineStuList', {
        params: {
          page: currentPage
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          this.dataList = result.data
          this.totalSize = result.totalSize
          console.log(this.totalSize)
        } else {
          alert('查询失败', result.msg)
        }
      })
    },
    updateStu (ID) {
      var that = this
      this.$axios.post('http://127.0.0.1:3000/admin/examineStu', {
        params: {
          ID: ID
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          alert('通过成功')
          that.getStuList(this.currentPage)
        } else {
          alert('通过失败', result.msg)
        }
      })
    }
  },
  data () {
    return {
      dataList: '',
      currentPage: 1,
      pageSize: 10,
      totalSize: 0,
      grade: '',
      className: '',
      stuName: '',
      gradeOptions: [],
      majorOptions: [],
      classOptions: []
    }
  },
  mounted () {
    this.getStuList(this.currentPage)
  }
}
</script>

<style lang="scss" scoped>
    .stuInfo{
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
            padding-top:6px;
            width: 1300px;
            label{
                line-height:40px;
                width:100px;
                text-align:center;
                display: block;
            }
            display: flex;
            height:46px;
            .el-input{
                width:500px;
                margin-right:30px;
            }
            #search{
                height:40px;
                margin-left:10px;
            }
        }
        .stuInfoTable{
            width: 1300px;
            padding:0 30px 0 0;
            table{
                font-size: 14px;
                width:100%;
                border-collapse: collapse;
                thead{
                    text-align:center;
                    background-color: #52baf6;
                    line-height:40px;
                    .setting{
                        width:200px;
                    }
                }
                tbody{
                    td{
                        padding-left:0;
                        text-align: center;
                        // padding:0;
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
            margin-top:-20px;
        }
    }
</style>
