<template>
  <div class="header">
    <div class="container">
      <h2></h2>
      <ul>
        <router-link tag = 'li' to = "/index">首页</router-link>
        <router-link tag = 'li' to = "/schoolNotice">学校公告</router-link>
        <router-link tag = 'li' to = "/stuRecruit">校友招聘</router-link>
        <router-link tag = 'li' to = "/excellentStu">杰出校友</router-link>
        <router-link tag = 'li' to = "/stuHelp">校友帮扶</router-link>
        <router-link tag = 'li' to = "/registerAndLogin">校友注册/登录</router-link>
        <router-link tag = 'li' to = "/backLogin">后台登录</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  .header{
    width:100%;
    height:80px;
    background: #2a94de;
    .container{
      width:1200px;
      margin:0 auto;
    }
    h2{
      width:400px;
      height:80px;
      background:url("../../static/img/logo.png") center center no-repeat;
      float:left;
      background-size: 100%
    }
    ul{
      padding-top:20px;
      float:right;
      width:700px;
      height:61px;
      margin-right:50px;
      overflow: hidden;
    }
    li{
      float:left;
      padding: 0 15px;
      text-align:center;
      line-height:40px;
      color:#fff;
      cursor: pointer;
    }
    li:hover{
      font-weight: 700;
      border-bottom:3px solid #f40;
    }
  }
</style>
