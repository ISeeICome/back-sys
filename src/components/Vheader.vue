<template>
    <div class="header">
        <h1 class="fl">
            <span class = "logo"></span>
            <span class = "logo_text"></span>
        </h1>
        <div class="fr">
            <div class="signOut" ref="signOut">
                <span class = "signOutIcon"></span>
                <p>退出</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Vheader',
  mounted () {
    this.$refs.signOut.onclick = () => {
      console.log(111)
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style lang="scss" scoped>
    .header{
        min-width:1080px;
        background: #2a94de;
        height: 80px;
        .logo{
            display:inline-block;
            width: 60px;
            height: 60px;
            background: url("../../static/img/logo.png") no-repeat;
            background-size: contain;
            float:left;
            margin-top:10px;
            margin-left:40px;
        }
        .logo_text{
            display:inline-block;
            float:left;
            margin-left:-30px;
            width: 300px;
            height: 80px;
            background: url("../../static/img/logo_text.png") center center no-repeat;
            background-size: contain;
        }
        .signOut{
            margin-top:10px;
            float: right;
            margin-right: 80px;
            color:#e6e6e6;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            .signOutIcon{
                display: inline-block;
                width:36px;
                height:36px;
                background-image: url("../../static/img/signOut1.svg");
                background-size: contain;
            }
        }
        .signOut:hover{
            color:#515151;
            .signOutIcon{
                background-image: url("../../static/img/signOut2.svg");
            }
        }
    }
</style>
