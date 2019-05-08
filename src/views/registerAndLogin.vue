<template>
    <div>
      <homeHeader></homeHeader>
      <div class="register" v-show="isRegister">
        <div class="registerWrap">
          <table>
            <thead>
              <tr>
                <td colspan="2">
                  <span>校友注册</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><label for="">用&ensp;户&ensp;名：</label></td>
                <td><el-input v-model="userName" placeholder="用户名"></el-input></td>
              </tr>
              <tr>
                <td><label for="">密&ensp;&ensp;&ensp;&ensp;码：</label></td>
                <td><el-input v-model="pwd1" placeholder="请输入密码" show-password></el-input></td>
              </tr>
              <tr>
                <td><label for="">确认密码：</label></td>
                <td><el-input v-model="pwd2" placeholder="请确认密码" show-password></el-input></td>
              </tr>
              <tr>
                <td><label for="">姓&ensp;&ensp;&ensp;&ensp;名：</label></td>
                <td><el-input v-model="stuName" placeholder="请输入姓名"></el-input></td>
              </tr>
              <tr>
                <td><label for="">年&ensp;&ensp;&ensp;&ensp;级：</label></td>
                <td>
                    <el-select v-model="grade" placeholder="请选择" class="selectGrade" @change="getClassList">
                    <el-option
                      v-for="(item, index) in gradeOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                    </el-option>
                  </el-select>
                </td>
              </tr>
              <tr>
                <td><label for="">班&ensp;&ensp;&ensp;&ensp;级：</label></td>
                <td>
                  <el-select v-model="className" placeholder="请选择" class="selectClass">
                    <el-option
                      v-for="(item, index) in classOptions"
                      :key="index"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </td>
              </tr>
              <tr>
                <td><label for="">联系电话：</label></td>
                <td><el-input v-model="tel" placeholder="请输入联系电话"></el-input></td>
              </tr>
              <tr>
                <td><label for="">邮&ensp;&ensp;&ensp;&ensp;箱：</label></td>
                <td><el-input v-model="email" placeholder="请输入邮箱"></el-input></td>
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
                <td><label for="">生&ensp;源&ensp;地：</label></td>
                <td><el-input v-model="fromCity" placeholder="请输入内容"></el-input></td>
              </tr>
            </tbody>
          </table>
          <div class="btnList">
            <el-button type="success" id="subBtn" @click="addStu">注册</el-button>
            <el-button type="primary" @click="isRegister = false">前往登录</el-button>
          </div>
        </div>
        <div class="bg"></div>
      </div>
      <div class="login" v-show="!isRegister">
        <div class="loginWrap">
          <table>
            <thead>
              <tr>
                <td colspan="2">
                  <span>校友登录</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><label for="">用&ensp;户&ensp;名：</label></td>
                <td><el-input v-model="loginUserName" placeholder="用户名"></el-input></td>
              </tr>
              <tr>
                <td><label for="">密&ensp;&ensp;&ensp;&ensp;码：</label></td>
                <td><el-input v-model="loginPwd" placeholder="请输入密码" show-password></el-input></td>
              </tr>
            </tbody>
          </table>
          <div class="btnList">
            <el-button type="success" id="subBtn" @click="login">登录</el-button>
            <el-button type="primary" @click="isRegister = true">前往注册</el-button>
          </div>
        </div>
        <div class="bg"></div>
      </div>
      <homeFooter></homeFooter>
    </div>
</template>
<script>
import homeHeader from '@/components/homeHeader'
import homeFooter from '@/components/homeFooter'
export default {
  name: 'login',
  components: {
    homeHeader,
    homeFooter
  },
  data () {
    return {
      isRegister: false,
      userName: '',
      stuName: '',
      company: '',
      workCity: '',
      fromCity: '',
      tel: '',
      email: '',
      grade: '',
      className: '',
      classList: [],
      gradeOptions: [],
      classOptions: [],
      pwd1: '',
      pwd2: '',
      loginPwd: '',
      loginUserName: ''
    }
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
    addStu () {
      if (this.pwd1 !== this.pwd2) {
        alert('密码输入错误，请重新输入')
        return
      }
      if (this.userName === '' || this.stuName === '' || this.pwd1 === '' || this.pwd2 === '' || this.majorName === '' || this.grade === '' || this.className === '' || this.email === '') {
        alert('姓名、年级、班级为必填项，请输入完整')
        return
      }
      this.$axios.post('http://127.0.0.1:3000/addStu', {
        params: {
          userName: this.userName,
          stuName: this.stuName,
          stuPwd: this.pwd2,
          grade: this.grade,
          majorName: this.majorName,
          className: this.className,
          tel: this.tel,
          email: this.email,
          company: this.company,
          workCity: this.workCity,
          fromCity: this.fromCity
        }
      }).then(res => {
        var result = res.data
        if (result.code === 1) {
          alert('申请已提交请等待')
        } else {
          alert('申请提交失败', result.msg)
        }
      })
    },
    login () {
      if (this.adminName !== '' && this.pwd !== '') {
        this.$axios.post('http://127.0.0.1:3000/stu/login', {
          params: {
            loginUserName: this.loginUserName,
            loginPwd: this.loginPwd
          }
        }).then(res => {
          var result = res.data
          console.log(result)
          if (result.code === 1) {
            localStorage.setItem('ID', result.data[0].ID)
            localStorage.setItem('grade', result.data[0].grade)
            localStorage.setItem('className', result.data[0].className)
            localStorage.setItem('isClassAdmin', result.data[0].isClassAdmin)
            this.$router.push({path: '/stu'})
          } else {
            alert('登录失败', result.msg)
          }
        })
      } else {
        alert('请输入完整信息')
      }
    }
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
        console.log(that.gradeOptions)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.register{
    width:100%;
    height:700px;
    background: url("../../static/img/body_bg.jpg") center bottom no-repeat;
    background-color:#fff;
    background-size: cover;
    position:relative;
    .registerWrap{
      width: 500px;
      margin: 0 auto;
      padding: 10px 20px 20px;
      position: relative;
      top:30px;
      table{
        width:100%;
        thead{
          span{
            font-size: 30px;
            line-height: 40px;
            color:#fff;
            font-weight: bold;
            margin-right:20px;
          }
        }
        label{
          color:#fff;
        }
      }
      z-index: 3
    }
    .bg{
      width: 600px;
      height:300px;
      background: #000;
      opacity: .6;
      filter: Alpha(opacity=50);
      border-radius: 31px;
      position: absolute;
      top: 30px;
      bottom: 0px;
      z-index: 2;
      left:50%;
      margin-left:-300px;
      height:620px;
    }
    .btnList{
      text-align:center;
      .el-button{
        margin:10px 20px;
      }
    }
    .selectClass, .selectGrade{
      width:100%
    }
}
.login{
    width:100%;
    height:700px;
    background: url("../../static/img/body_bg.jpg") center bottom no-repeat;
    background-color:#fff;
    background-size: cover;
    position:relative;
    .loginWrap{
      width: 500px;
      margin: 0 auto;
      padding: 10px 20px 20px;
      position: relative;
      top:120px;
      table{
        width:100%;
        thead{
          span{
            font-size: 30px;
            line-height: 80px;
            color:#fff;
            font-weight: bold;
            margin-right:20px;
          }
        }
        label{
          color:#fff;
        }
      }
      z-index: 3
    }
    .bg{
      width: 600px;
      background: #000;
      opacity: .6;
      filter: Alpha(opacity=50);
      border-radius: 31px;
      position: absolute;
      top: 120px;
      bottom: 0px;
      z-index: 2;
      left:50%;
      margin-left:-300px;
      height:320px;
      border:1px solid #999;
    }
    .btnList{
      text-align:center;
      margin-top:50px;
      .el-button{
        margin:10px 20px;
      }
    }
    .selectClass, .selectGrade{
      width:100%
    }
}
</style>
