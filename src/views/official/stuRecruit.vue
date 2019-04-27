<template>
    <div class="excellentStu">
      <homeHeader></homeHeader>
      <div class="contentWrap">
        <div class="img">
          <img src="../../../static/img/excellentBanner.png" alt="" class = "activeDetailBg">
        </div>
        <div class="content">
          <div class="fl">
            <div class="moduleName">校友招聘</div>
            <div class="bg"></div>
          </div>
          <div class="fr">
            <div class="bar">校友招聘</div>
              <ul>
                <li v-for = "(item,index) in data" :key="index" @click="toDetail('http://127.0.0.1:3000/admin/getSingleExcellentStu',item.ID)">
                  <span class="title">{{item.recruitName}}</span><span class="date">{{item.date}}</span>
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
          </div>
        </div>
      </div>
      <homeFooter></homeFooter>
    </div>

</template>
<script>
import homeHeader from '@/components/homeHeader'
import homeFooter from '@/components/homeFooter'

export default {
  name: 'excellentStu',
  components: {
    homeHeader,
    homeFooter
  },
  data () {
    return {
      data: [],
      currentPage: 1,
      pageSize: 8,
      totalSize: 0
    }
  },
  methods: {
    toDetail (src, ID) {
      this.$router.push({name: 'activeDetail', params: { src: src, ID: ID }})
    },
    getData (src, ID) {
      this.$axios.post('http://127.0.0.1:3000/getRecruitList', {
        params: {
          page: 1,
          pageSize: 8
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          this.data = result.data
          this.totalSize = res.data.totalSize
        } else {
          alert('查询失败', result.msg)
        }
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.$axios.post('http://127.0.0.1:3000/getExcellentStuList', {
        params: {
          page: this.currentPage,
          pageSize: this.pageSize
        }
      }).then(res => {
        var result = res.data
        if (result.code === 1) {
          this.data = result.data
          this.totalSize = res.data.totalSize
        } else {
          alert('查询失败', result.msg)
        }
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
.excellentStu{
  .contentWrap{
    width:1200px;
    margin: 0 auto;
    overflow: hidden;
    .fl{
      float:left;
      .moduleName{
        line-height:60px;
        font-size: 24px;
        color: #333;
        text-align: center;
        font-weight: 700
      }
      .bg{
        margin-top:40px;
        background: url(../../../static/img/moduleBg.jpg) no-repeat;
        width: 230px;
        height: 242px;
      }
    }
    .fr{
      float:right;
      width:940px;
      .bar{
        padding-top:20px;
        font-size: 18px;
        color: #0364a8;
        line-height:42px;
        border-bottom: 1px solid #ccc;
      }
      ul{
        // height:440px;
      }
      li{
        overflow: hidden;
        width:100%;
        line-height:40px;
        border-bottom:1px dashed #999;
        color: #056dae;
        cursor: pointer;
        .title{
          float:left;
        }
        .content{
          width:720px;
          overflow: hidden;
          height:40px;
          display: inline-block;
          text-overflow:ellipsis;
          white-space: nowrap;
          font-size: 14px;
        }
        .date{
          float:right;
        }
      }
      .el-pagination{
        margin-top:20px;
      }
    }
  }
  .img{
    padding-top:10px;
    background-color: #fff;
  }
}
</style>
