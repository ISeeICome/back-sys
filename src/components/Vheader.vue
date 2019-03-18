<template>
    <div class="header">
        <h1 class="logo fl"></h1>
        <div class="fr">
            <div class="signOut">
                <span class = "signOutIcon"></span>
                <p>退出</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Vheader'
}
</script>

<style lang="scss" scoped>
    .header{
        background: #2a94de;
        height: 80px;
        .logo{
            width: 326px;
            height: 80px;
            background-image: url("../../static/img/logo.png");
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
