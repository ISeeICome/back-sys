<template>
    <div class="recruitManage">
        <div class="statusBar">
            <label>公告</label>
        </div>
        <div class="content">
            <ul>
                <li v-for = "(item,index) in dataList" :key = "index">
                    <h2>
                        {{item.title}}
                        <el-button type="danger"  class='delete' @click="delClassNotice(item.ID)" v-show="isClassAdmin">删除</el-button>
                        <el-button type="danger"  class='update' @click="updateClassNotice(item.ID)" v-show="isClassAdmin">修改</el-button>
                        <div class="releaseTime">发布时间：{{item.date}}</div>
                    </h2>
                    <div>
                        <label>内容：</label>
                        <p class="detail">{{changeDetail(item.content)}}</p>
                    </div>
                </li>
            </ul>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pageSize"
                layout="prev, pager, next, jumper"
                :total="totalSize">
            </el-pagination>
            <el-button type="primary"  class='add' @click = "toAddClassNotice" v-show="isClassAdmin">添加</el-button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      dataList: '',
      currentPage: 1,
      pageSize: 3,
      totalSize: 0,
      isClassAdmin: '',
      className: '',
      grade: ''
    }
  },
  methods: {
    changeDetail (str) {
      return str.replace('/n', '<br/>')
    },
    toAddClassNotice () {
      this.$router.push({path: '/stu/addClassNotice'})
    },
    getNumber (index) {
      return (this.currentPage - 1) * 10 + index
    },
    delClassNotice (ID) {
      var adminPower = localStorage.getItem('adminPower')
      if (parseInt(adminPower) === 0) {
        alert('权限不足')
        return
      }
      this.$axios.post('http://127.0.0.1:3000/delClassNotice', {
        params: {
          ID: ID
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          alert('删除成功')
          this.getClassNotice(this.currentPage)
        } else {
          alert('删除失败', result.msg)
        }
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.$axios.post('http://127.0.0.1:3000/getClassNoticeList', {
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
    getClassNotice (currentPage) {
      this.$axios.post('http://127.0.0.1:3000/getClassNoticeList', {
        params: {
          page: currentPage,
          pageSize: this.pageSize,
          className: this.className
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
    updateClassNotice (ID) {
      this.$router.push({ path: `/stu/updateClassNotice/${ID}` })
    }
  },
  mounted () {
    this.getClassNotice(this.currentPage)
    this.className = localStorage.getItem('className')
    if (localStorage.getItem('isClassAdmin') === '1') {
      this.isClassAdmin = true
    } else {
      this.isClassAdmin = false
    }
    console.log(this.isClassAdmin)
  }
}
</script>
<style lang="scss" scoped>
.recruitManage{
        width:1250px;
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
    ul{
        color: #888888;
        li{
          position: relative;
            h2{
                color: #444;
                font-weight: 600;
                font-size: 18px;
                margin-bottom:10px;
                .delete,.update,.releaseTime{
                    float:right;
                    margin-right:10px;
                }
                .releaseTime{
                    font-size: 16px;
                    font-weight: 400;
                    line-height:36px;
                }
            }
            label{
              color: #555;
              font-weight: 700;
              line-height: 30px;
            }
            span{
               color:#555;
            }
            .detail{
              font-size: 14px;
              text-indent: 2em;
            }
            height:140px;
            padding:10px 0 10px 20px;
            border-bottom:1px solid #999;
            text-align: justify;
            .workAdd{
              position: absolute;
              bottom:0px;
              line-height:30px;
              font-size: 14px;
            }
        }
    }
    ol{
        float:left;
        margin-left:50px;
        li{
            float:left;
            margin:0 10px;
        }
    }
    .add{
        float:right;
        margin:15px 20px 0 0;;
    }
}
</style>
