<template>
    <div class="stuInfo">
        <div class="statusBar">
            <label>校友信息列表</label>
        </div>
        <div class="searchBar">
            <label>年级:</label>
            <el-select v-model="grade" placeholder="请选择" class="selectGrade" @change="getClassList" >
              <el-option
                v-for="(item, index) in gradeOptions"
                :key="index"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
            <label>专业:</label>
            <el-select v-model="majorName" placeholder="请选择" class="selectGrade" @change="getClassList">
              <el-option
                v-for="(item, index) in majorOptions"
                :key="index"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <label>班级:</label>
            <el-select v-model="className" placeholder="请选择" class="selectGrade">
              <el-option
                v-for="(item, index) in classOptions"
                :key="index"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <label>姓名:</label><el-input v-model="stuName" placeholder="请输入内容"></el-input>
            <el-button type="success" id="search" @click="search">搜索</el-button>
        </div>
        <div class="stuInfoTable">
            <table>
                <thead>
                    <tr>
                        <td>序号</td>
                        <td>学号</td>
                        <td>姓名</td>
                        <td>年级</td>
                        <td>专业</td>
                        <td>班级</td>
                        <td>联系电话</td>
                        <td>工作单位</td>
                        <td>就业省市</td>
                        <td>生源地</td>
                        <td class="setting">操作</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "(item,index) in dataList" :key = "index">
                        <td>{{ getNumber ( index +1) }}</td>
                        <td>{{item.stuID}}</td>
                        <td>{{item.stuName}}</td>
                        <td>{{item.grade}}</td>
                        <td>{{item.majorName}}</td>
                        <td>{{item.className}}</td>
                        <td>{{item.tel}}</td>
                        <td>{{item.company}}</td>
                        <td>{{item.workCity}}</td>
                        <td>{{item.fromCity}}</td>
                        <td>
                            <el-button type="warning" class='update' @click="updateStu(item.ID)">修改</el-button>
                            <el-button type="danger"  class='del' :ID="item.ID" @click="delStu(item.ID)">删除</el-button>
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
            <el-button type="primary" class='add' ref = "add" @click="toAddStu">添加</el-button>
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
    getNumber (index) {
      return (this.currentPage - 1) * 10 + index
    },
    getClassList () {
      this.classOptions = []
      for (const key in this.classList) {
        if (this.classList[key].grade === this.grade.toString() && this.classList[key].majorName === this.majorName) {
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
          this.getStudelStuList(this.currentPage)
        } else {
          alert('删除失败', result.msg)
        }
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      var searchObj = {grade: this.grade, majorName: this.majorName, className: this.className, stuName: this.stuName, page: this.currentPage}
      this.$axios.post('http://127.0.0.1:3000/admin/searchStu', {
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
      this.$axios.post('http://127.0.0.1:3000/getStuList', {
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
      this.$router.push({ path: `/admin/updateStu/${ID}` })
    },
    search () {
      var searchObj = {grade: this.grade, majorName: this.majorName, className: this.className, stuName: this.stuName, page: this.currentPage}
      this.$axios.post('http://127.0.0.1:3000/admin/searchStu', {
        params: {
          searchObj: searchObj
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
    }
  },
  data () {
    return {
      dataList: '',
      currentPage: 1,
      pageSize: 10,
      totalSize: 0,
      grade: '',
      majorName: '',
      className: '',
      stuName: '',
      gradeOptions: [],
      majorOptions: [],
      classOptions: []
    }
  },
  mounted () {
    var that = this
    var data = new Date()
    var year = data.getFullYear()
    for (var i = 0; i <= 4; i++) {
      this.gradeOptions.push(year)
      year -= 1
    }
    this.$axios.post('http://127.0.0.1:3000/getMajorList', {
      params: {
        page: 0
      }
    }).then(res => {
      var result = res.data
      if (result.code === 1) {
        for (const key in result.data) {
          var object = {value: result.data[key].majorName, label: result.data[key].majorName}
          that.majorOptions.push(object)
        }
        console.log(that.majorOptions)
      }
    })
    this.$axios.post('http://127.0.0.1:3000/getClassList', {
      params: {
        page: 0
      }
    }).then(res => {
      var result = res.data
      console.log(result)
      if (result.code === 1) {
        that.classList = result.data
      }
    })
    this.getStuList(this.currentPage)
  }
}
</script>

<style lang="scss" scoped>
    .stuInfo{
        padding:10px 0 0 15px;
        margin-left:180px;
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
