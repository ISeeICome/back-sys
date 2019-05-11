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
            <el-button @click="exportExcel" size="medium" type="success" id="export">导出</el-button>
        </div>
        <div class="stuInfoTable">
            <table>
                <thead>
                    <tr>
                        <td>序号</td>
                        <td>姓名</td>
                        <td>年级</td>
                        <td>班级</td>
                        <td>联系电话</td>
                        <td>邮箱</td>
                        <td>工作单位</td>
                        <td>就业省市</td>
                        <td>生源地</td>
                        <td>权限</td>
                        <td class="setting">操作</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "(item,index) in dataList" :key = "index">
                        <td>{{ getNumber ( index +1) }}</td>
                        <td>{{item.stuName}}</td>
                        <td>{{item.grade}}</td>
                        <td>{{item.className}}</td>
                        <td>{{item.tel}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.company}}</td>
                        <td>{{item.workCity}}</td>
                        <td>{{item.fromCity}}</td>
                        <td>{{isClassAdmin(item.isClassAdmin)}}</td>
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
import { export_json_to_excel as exportJsonToExcel } from '../../excel/Export2Excel'
export default {
  name: 'stuManage',
  methods: {
    exportExcel () {
      require.ensure([], () => {
        const tHeader = ['ID', '姓名', '年级', '班级', '联系电话', '行业', '工作单位', '就业省市', '生源地', '权限']
        const filterVal = ['ID', 'stuName', 'grade', 'className', 'tel', 'industry', 'company', 'workCity', 'fromCity', 'isClassAdmin']
        const list = this.allData
        const data = this.formatJson(filterVal, list)
        exportJsonToExcel(tHeader, data, '列表excel')
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
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
    addClass () {
      if (this.grade === '' || this.className === '') {
        alert('请将信息输入完整')
        return
      }
      this.$axios.post('http://127.0.0.1:3000/addClass', {
        params: {
          grade: this.grade,
          className: this.className
        }
      }).then(res => {
        var result = res.data
        if (result.code === 1) {
          alert('添加成功')
          this.goBack()
        } else {
          console.log(result)
          alert('添加失败:' + result.msg)
        }
      })
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
          this.tableData = result.data
          this.totalSize = result.totalSize
          this.allData = result.allData
          console.log(this.allData)
        } else {
          alert('查询失败', result.msg)
        }
      })
    },
    updateStu (ID) {
      localStorage.setItem('stuHistoryPage', this.currentPage)
      this.$router.push({ path: `/admin/updateStu/${ID}` })
    },
    search () {
      if (this.grade === '所有年级') this.grade = ''
      var searchObj = {grade: this.grade, className: this.className, stuName: this.stuName, page: this.currentPage}
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
          this.allData = result.allData
          console.log(this.allData)
        } else {
          alert('查询失败', result.msg)
        }
      })
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
      email: '',
      gradeOptions: [],
      majorOptions: [],
      classOptions: [],
      tableData: [],
      allData: []
    }
  },
  activated () {
    this.currentPage = parseInt(localStorage.getItem('stuHistoryPage'))
    this.handleCurrentChange(this.currentPage)
  },
  mounted () {
    var that = this
    this.$axios.post('http://127.0.0.1:3000/getClassList', {
      params: {
        page: 0
      }
    }).then(res => {
      var result = res.data
      console.log(result)
      if (result.code === 1) {
        that.classList = result.data
        that.classList.forEach((item, index) => {
          if (that.gradeOptions.indexOf(item.grade) < 0) {
            that.gradeOptions.push(item.grade)
          }
        })
        that.gradeOptions = that.gradeOptions.sort().reverse()
      }
    })
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
            // width: 1300px;
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
            // width: 1300px;
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
        #export{
          height:40px;
          margin-top:0;
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
