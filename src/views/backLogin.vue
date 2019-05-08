<template>
    <div>
      <homeHeader></homeHeader>
      <div class="login">
        <div class="loginWrap">
          <table>
            <thead>
              <tr>
                <td colspan="2">
                  <!-- <img src="../../static/img/logo.png" alt=""> -->
                  <span>后台登录</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><label for="">用&ensp;户&ensp;名：</label></td>
                <td><el-input v-model="adminName" placeholder="用户名"></el-input></td>
              </tr>
              <tr>
                <td><label for="">密&ensp;&ensp;&ensp;&ensp;码：</label></td>
                <td><el-input v-model="pwd" placeholder="请输入密码" show-password></el-input></td>
              </tr>
            </tbody>
          </table>
          <div class="btnList">
            <el-button type="success" id="subBtn" @click="login">登录</el-button>
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
      adminName: '',
      pwd: ''
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    login () {
      if (this.adminName !== '' && this.pwd !== '') {
        this.$axios.post('http://127.0.0.1:3000/admin/login', {
          params: {
            username: this.adminName,
            password: this.pwd
          }
        }).then(res => {
          var result = res.data
          console.log(result)
          if (result.code === 1) {
            localStorage.setItem('ID', result.data[0].ID)
            this.$router.push({path: '/admin'})
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
  }
}
</script>
<style lang="scss" scoped>
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
            color:#fff;
            font-weight: bold;
            line-height:80px;
            margin-right:20px;
          }
        }
        tbody{
          td{
            // padding-bottom:20px;
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
      filter: Alpha(opacity=40);
      border-radius: 31px;
      position: absolute;
      top: 120px;
      bottom: 0px;
      z-index: 2;
      left:50%;
      margin-left:-300px;
      height:320px;
    }
    .btnList{
      text-align:center;
      margin-top:50px;
      .el-button{
        float:right;
        margin-right:80px;
      }
    }
    .selectClass, .selectGrade{
      width:100%
    }
}
</style>
