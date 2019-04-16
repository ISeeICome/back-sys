<template>
    <div class="login">
        <h1 class="logo">
            <!-- <img src="../../static/img/logo.png" alt="" class="logoImg"> -->
            <img src="../../static/img/login_logo.png" alt="">
        </h1>
        <div class="form">
            <p class="title">
                <img src="../../static/img/logo.png" alt="" class="logoImg">
                登&ensp;&ensp;&ensp;陆
            </p>
            <p>
                <label for="">用户名：</label>
                <el-input
                    placeholder="请输入内容"
                    v-model="loginName"
                    clearable
                    class="loginName">
                </el-input>
            </p>
            <p>
                <label for="">密&ensp;&ensp;码：</label>
                <el-input
                    placeholder="请输入密码"
                    v-model="loginPwd"
                    show-password
                    class="loginPwd">
                </el-input>
            </p>
            <p>
                <el-button type="primary" round id="loginBtn" ref="loginStuBtn" v-on:click="loginStuFn">校友登录</el-button>
                <el-button type="primary" round id="loginBtn" ref="loginAdminBtn" v-on:click="loginAdminFn">管理员登录</el-button>
            </p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loginName: '',
      loginPwd: ''
    }
  },
  methods: {
    loginStuFn () {
      this.$router.push({path: '/stu/personInfo'})
    },
    loginAdminFn () {
      this.$router.push({path: '/admin/showBiogenicDis'})
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.login{
    width:100%;
    height:100%;
    background: url("../../static/img/loginBg.jpg") no-repeat center center;
}
.logo{
    width:100%;
    height:100px;
    position: relative;
    .logoImg{
        position: absolute;
        top:30px;
        width:110px;
        height:110px;
        left:30%;
        // margin-left:-300px;
    }
    img{
        position: absolute;
        top:-60px;
        width:600px;
        left:50%;
        margin-left:-300px;
    }
}
.form{
    width:400px;
    height:300px;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    .title{
        text-align: center;
        font-size: 28px;
        color:#333;
        line-height:50px;
        .logoImg{
            width:40px;
            height:40px;
            position:absolute;
            left:30px;
            top:8px;
        }
    }
    p{
        clear: both;
        height:40px;
        text-align: center;
        margin-bottom:30px;
        padding-left:30px;
        padding-right:30px;
    }
    label{
        float:left;
        line-height: 40px;
        height: 40px;
    }
    .el-input{
        width:240px;
        float:right;
    }
    .el-button{
        padding:0;
        width:120px;
        line-height:36px;
    }
}
</style>
