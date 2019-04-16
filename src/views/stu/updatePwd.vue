<template>
    <div class="updatePwd">
        <div class="statusBar">
            <label>修改密码</label>
        </div>
        <div class="box">
            <h2>修改密码</h2>
            <p><label for="">用户名：</label><el-input v-model="name"></el-input></p>
            <p><label for="">密&ensp;&ensp;码：</label><el-input v-model="pwd"></el-input></p>
            <p><el-button type="success">提交</el-button></p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      pwd: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.updatePwd{
    margin: 0 auto;
    padding:10px 0 0 15px;
    margin-left:180px;
    position:relative;
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
    .box{
        width:400px;
        height:300px;
        margin: 100px auto 0;
        padding:20px;
        border:1px solid #999;
        h2{
            text-align: center;
            line-height:60px;
        }
        p{
            display: flex;
            margin-bottom: 20px;
            text-align: center;
        }
        label{
            width:100px;
            line-height:40px;
        }
        .el-button{
            width: 100px;
            margin:50px auto 0;
        }
    }
}
</style>
