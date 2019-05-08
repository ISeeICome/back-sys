<template>
    <div class="superAdmin">
        <div class="statusBar">
            <label>超级管理员信息列表</label>
        </div>
        <div class="adminInfoTable">
            <table>
                <thead>
                    <tr class="tableName"><td colspan="4">超级管理员信息表</td></tr>
                    <tr>
                        <td>序号</td>
                        <td>管理员</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for = "(item,index) in dataList" :key = "index">
                        <td>{{ getNumber ( index ) }}</td>
                        <td>{{item.adminName}}</td>
                    </tr>
                    <tr>
                      <td colspan="2">
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
    getNumber (index) {
      return (this.currentPage - 1) * 10 + index
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.$axios.post('http://127.0.0.1:3000/getSuperAdminList', {
        params: {
          page: this.currentPage
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
    getSuperAdminList (currentPage) {
      this.$axios.post('http://127.0.0.1:3000/getSuperAdminList', {
        params: {
          page: currentPage
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
    }
  },
  mounted () {
    this.getSuperAdminList(this.currentPage)
  }
}
</script>

<style lang="scss" scoped>
    .superAdmin{
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
            margin-top: 20px;
            padding:0 30px 0 0;
            table{
                width:600px;
                border-collapse: collapse;
                margin:0 auto;
                text-align: center;
                thead{
                    text-align:center;
                    td{
                        padding:5px 0;
                    }
                    .tableName{
                        line-height:40px;
                        color:#fff;
                        background-color: #52baf6;
                        font-size: 22px;
                    }
                }
                tbody{
                    td{
                      padding: 10px;
                    }
                }
                td{
                    border:1px solid #000;
                }
                .setting{
                    width:170px;
                }
            }
        }
        .update{
            float:left;
        }
        .del{
            float:left;
        }
        .el-pagination{
          float:left;
        }
    }
</style>
