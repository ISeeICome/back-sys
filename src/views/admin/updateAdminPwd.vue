<template>
    <div class="updateAdminPwd">
        <div class="statusBar">
            <label>修改密码</label>
        </div>
        <div class="box">
            <h2>修改密码</h2>
            <p><label for="">用户名：</label><el-input v-model="adminName"></el-input></p>
            <p><label for="">密&ensp;&ensp;码：</label><el-input v-model="adminPwd"></el-input></p>
            <p><el-button type="success" @click="updateAdmin">提交</el-button></p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      adminName: '',
      adminPwd: ''
    }
  },
  methods: {
    updateAdmin () {
      this.$axios.post('http://127.0.0.1:3000/admin/updateAdmin', {
        params: {
          adminName: this.adminName,
          adminPwd: this.adminPwd,
          adminPower: '1',
          ID: this.ID
        }
      }).then(res => {
        var result = res.data
        if (result.code === 1) {
          alert('修改成功')
          this.$router.go(0)
        } else {
          alert('修改失败', result.msg)
        }
      })
    }
  },
  mounted () {
    var that = this
    this.ID = localStorage.getItem('ID')
    this.$axios.post('http://127.0.0.1:3000/admin/getSingleAdmin', {
      params: {
        ID: this.ID
      }
    }).then(res => {
      var result = res.data
      if (result.code === 1) {
        that.adminName = result.data[0].adminName
        that.adminPwd = result.data[0].adminPwd
      } else {
        alert('查询失败', result.msg)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.updateAdminPwd{
    margin: 0 auto;
    padding:10px 0 0 15px;
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
