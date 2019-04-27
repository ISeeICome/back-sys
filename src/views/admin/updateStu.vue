<template>
    <div class="addStuInfo">
      <table>
        <thead>
          <tr><td colspan="2">修改校友信息</td></tr>
        </thead>
        <tbody>
          <tr>
            <td><label for="">用户名：</label></td>
            <td><el-input v-model="userName" placeholder="请输入姓名"></el-input></td>
          </tr>
          <tr>
            <td><label for="">姓名：</label></td>
            <td><el-input v-model="stuName" placeholder="请输入姓名"></el-input></td>
          </tr>
          <tr>
            <td><label for="">联系电话：</label></td>
            <td><el-input v-model="tel" placeholder="请输入联系电话"></el-input></td>
          </tr>
          <tr>
            <td><label for="">工作单位：</label></td>
            <td><el-input v-model="company" placeholder="请输入内容"></el-input></td>
          </tr>
          <tr>
            <td><label for="">就业省市：</label></td>
            <td><el-input v-model="workCity" placeholder="请输入内容"></el-input></td>
          </tr>
          <tr>
            <td><label for="">生源地：</label></td>
            <td><el-input v-model="fromCity" placeholder="请输入内容"></el-input></td>
          </tr>
          <tr>
            <td><label for="">权限：</label></td>
            <td>
              <el-select v-model="isClassAdmin" placeholder="请选择" class="selectClass">
                <el-option
                  v-for="(item, index) in classAdminOptions"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td>
              <el-button type="primary" @click="goBack" id="backBtn">返回</el-button>
            </td>
            <td>
              <el-button type="success" id="subBtn" @click = "updateStu">修改</el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import Vheader from '@/components/Vheader.vue'
import adminVslider from '@/components/adminVslider.vue'
export default {
  name: 'AddStuIngo',
  components: {
    Vheader,
    adminVslider
  },
  methods: {
    goBack () {
      this.$router.back(-1)
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
    updateStu () {
      if (this.isClassAdmin === '班级管理员') this.isClassAdmin = 1
      if (this.isClassAdmin === '无') this.isClassAdmin = 0
      this.$axios.post('http://127.0.0.1:3000/admin/updateStu', {
        params: {
          ID: this.ID,
          userName: this.userName,
          stuName: this.stuName,
          stuPwd: '123456',
          grade: this.grade,
          className: this.className,
          tel: this.tel,
          company: this.company,
          workCity: this.workCity,
          fromCity: this.fromCity,
          isClassAdmin: this.isClassAdmin
        }
      }).then(res => {
        var result = res.data
        if (result.code === 1) {
          alert('修改成功')
          this.goBack()
        } else {
          alert('修改失败', result.msg)
        }
      })
    }
  },
  data () {
    return {
      stuID: '',
      ID: '',
      stuName: '',
      company: '',
      workCity: '',
      fromCity: '',
      tel: '',
      grade: '',
      className: '',
      classList: [],
      gradeOptions: [],
      majorOptions: [],
      classOptions: [],
      isClassAdmin: '',
      classAdminOptions: [
        {label: '班级管理员', value: 1},
        {label: '无', value: 2}
      ]
    }
  },
  mounted () {
    this.ID = this.$route.params.ID
    var that = this
    this.$axios.post('http://127.0.0.1:3000/stu/getSingleStu', {
      params: {
        ID: this.ID
      }
    }).then(res => {
      var result = res.data
      console.log(result)
      if (result.code === 1) {
        that.ID = result.data[0].ID
        that.userName = result.data[0].userName
        that.stuName = result.data[0].stuName
        that.grade = result.data[0].grade
        that.className = result.data[0].className
        that.tel = result.data[0].tel
        that.company = result.data[0].company
        that.workCity = result.data[0].workCity
        that.fromCity = result.data[0].fromCity
        that.isClassAdmin = result.data[0].isClassAdmin
        if (result.data[0].isClassAdmin === 1) { that.isClassAdmin = '班级管理员' } else {
          that.isClassAdmin = '无'
        }
      } else {
        alert('查询失败', result.msg)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .addStuInfo{
        width:800px;
        margin: 0 auto;
        padding:10px 0 0 15px;
        margin-left:180px;
        position:relative;
        margin:0 auto;
        table{
          margin-top: 30px;
          padding-top:10px;
          width:90%;
          position:absolute;
          left:50%;
          transform: translate(-50%,0);
          border:1px solid #000;
        }
        thead{
          td{
            text-align:center;
            line-height:40px;
            font-size: 24px;
          }
        }
        tbody{
          td:nth-child(2n){
            padding-left:80px;
          }
          td:nth-child(2n+1){
            padding-left:50px;
            width:100px;
            input{
              display: block;
            }
          }
        }
        .el-button--success{
         text-align: center;
        }
        #subBtn{
          float:right;
          margin-top:20px;
          margin-bottom:20px;
          margin-right:30px;
        }
        .selectClass, .selectGrade, .selectMajor{
          width:100%
        }
  }
</style>
