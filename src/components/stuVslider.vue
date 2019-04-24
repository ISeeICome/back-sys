<template>
    <div class="slider">
        <el-collapse accordion>
            <el-collapse-item title="个人信息管理">
                <div class='itemWrap'><router-link to="/stu/personInfo" class="item">个人信息管理</router-link></div>
            </el-collapse-item>
            <el-collapse-item title="校友互动">
                <div class='itemWrap'><router-link to="/stu/excellentStu" class="item">杰出校友管理</router-link></div>
                <div class='itemWrap'><router-link to="/stu/stuRecruit" class="item">招聘信息管理</router-link></div>
                <div class='itemWrap'><router-link to="/stu/stuHelp" class="item">帮扶信息管理</router-link></div>
            </el-collapse-item>
            <el-collapse-item title="系统工具">
                <div class='itemWrap'><router-link to="/login" class="item">退出系统</router-link></div>
                <div class='itemWrap'><router-link to="/stu/updatePwd" class="item">修改密码</router-link></div>
            </el-collapse-item>
        </el-collapse>
        <div class="admin">
            用户：{{stuName}}
        </div>
    </div>
</template>
<script>

export default {
  name: 'slider',
  data () {
    return {
      stuName: ''
    }
  },
  mounted () {
    this.ID = localStorage.getItem('ID')
    var that = this
    this.$axios.post('http://127.0.0.1:3000/stu/getSingleStu', {
      params: {
        ID: this.ID
      }
    }).then(res => {
      var result = res.data
      if (result.code === 1) {
        that.stuName = result.data[0].stuName
        console.log(that.stuName)
      } else {
      }
    })
  }
}
</script>

<style lang="scss">
    .slider{
        .el-collapse{
            background-color:#293038;
            position:fixed;
            width:180px;
            top:80px;
            bottom:0;
            overflow: hidden;
            .el-collapse-item__header{
                background-color: #22282e;
                color:#fff;
                padding-left:30px;
            }
            .el-collapse-item__header:hover{
                background-color: #414d5c;
            }
            .el-collapse-item__content{
                padding-bottom:0;
            }
            .itemWrap{
                background-color:#293038;
                font-size: 13px;
            }
            .itemWrap:hover{
                background-color: #414d5c;
            }
            .item{
                color:#fff;
                display: block;
                width:100%;
                height:40px;
                line-height:40px;
                padding-left:20px;
            }
        }
        .admin{
            position:absolute;
            padding-left:20px;
            bottom:50px;
            color:#fff;
        }
    }
</style>
