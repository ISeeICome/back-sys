<template>
    <div class="commonAdmin">
        <div class="statusBar">
            <label>普通管理员信息列表</label>
        </div>
        <div class="adminInfoTable">
            <table>
                <thead>
                    <tr class="tableName"><td colspan="4">普通管理员信息表</td></tr>
                    <tr>
                        <td>序号</td>
                        <td>管理员姓名</td>
                        <td>密码</td>
                        <td class="setting">操作</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "(item,index) in dataList" :key = "index">
                        <td>{{ getNumber ( index +1 ) }}</td>
                        <td>{{item.adminName}}</td>
                        <td>{{item.adminPwd}}</td>
                        <td>
                            <el-button type="primary" class='update' @click="updateAdmin(item.ID)">修改</el-button>
                            <el-button type="danger"  class='del' @click="delAdmin(item.ID)">删除</el-button>
                        </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage"
                            :page-size="pageSize"
                            layout="prev, pager, next, jumper"
                            :total="totalSize">
                        </el-pagination>
                      </td>
                    </tr>
                </tbody>
            </table>
            <el-button type="primary"  class='add' @click="toAddCommonAdmin">添加</el-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'superAdmin',
  data () {
    return {
      dataList: '',
      currentPage: 1,
      pageSize: 10,
      totalSize: 0
    }
  },
  methods: {
    toAddCommonAdmin () {
      this.$router.push({path: '/admin/addAdmin'})
    },
    getNumber (index) {
      return (this.currentPage - 1) * 10 + index
    },
    delAdmin (ID) {
      var adminPower = localStorage.getItem('adminPower')
      if (parseInt(adminPower) === 0) {
        alert('权限不足')
        return
      }
      this.$axios.post('http://127.0.0.1:3000/delAdmin', {
        params: {
          ID: ID
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          alert('删除成功')
          this.getCommonAdminList(this.currentPage)
        } else {
          alert('删除失败', result.msg)
        }
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.$axios.post('http://127.0.0.1:3000/getCommonAdminList', {
        params: {
          page: this.currentPage,
          pageSize: this.pageSize
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          this.dataList = result.data
          this.totalSize = result.totalSize
        } else {
          alert('查询失败', result.msg)
        }
      })
    },
    getCommonAdminList (currentPage) {
      this.$axios.post('http://127.0.0.1:3000/getCommonAdminList', {
        params: {
          page: currentPage,
          pageSize: this.pageSize
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          this.dataList = result.data
          this.totalSize = result.totalSize
          console.log(this.totalSize)
        } else {
          alert('查询失败', result.msg)
        }
      })
    },
    updateAdmin (ID) {
      this.$router.push({ path: `/admin/updateAdmin/${ID}` })
    }
  },
  mounted () {
    this.getCommonAdminList(this.currentPage)
  }
}
</script>

<style lang="scss" scoped>
    .commonAdmin{
        padding:10px 0 0 15px;
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
        .adminInfoTable{
            padding:0 30px 0 0;
            margin-top: 20px;
            table{
                width:1000px;
                border-collapse: collapse;
                margin:0 auto;
                thead{
                    text-align:center;
                    td{
                        padding:5px 0;
                    }
                }
                .tableName{
                    line-height:40px;
                    color:#fff;
                    background-color: #52baf6;
                    font-size: 22px;
                }
                tbody{
                    td{
                        text-align: center;
                    }
                    td:nth-child(1){
                        width:80px;
                    }
                }
                td{
                    border:1px solid #000;
                    padding: 10px;
                }
                .setting{
                    width:180px;
                }
            }
        }
        .update{
            float:left;
            margin-left:10px;
        }
        .del{
            float:left;
            margin-left:10px;
        }
        .setSuper{
            float:left;
            margin-left:10px;
        }
        .addAdmin{
            width:600px;
            margin:80px auto 0;
            text-align: center;
            table{
                border-collapse: collapse;
            }
            .tableName{
                line-height:40px;
                color:#fff;
                background-color: #52baf6;
                font-size: 22px;
            }
            thead{
                td{
                  padding:5px 0;
                }
            }
            tbody{
                td{
                    padding:10px 10px;
                }
            }
            td{
                border:1px solid #666;
            }
        }
        .el-pagination{
          float:left;
        }
    }
    ol{
        position:absolute;
        left:300px;
        width:300px;
        height:40px;
        li{
            float:left;
            margin:0 10px;
        }
    }
    .add{
        position:absolute;
        right:300px;
        margin-top:10px;
    }
</style>
