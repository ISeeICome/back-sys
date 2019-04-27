<template>
    <div class="activeDetail">
      <homeHeader></homeHeader>
      <div class="content">
        <div class="img">
          <img src="../../../static/img/activeDetail.jpg" alt="" class = "activeDetailBg">
        </div>
        <h1><span class="t">{{bigTitle}}</span></h1>
        <h2>
          <p class="title">{{title}}</p>
          <p class="date">{{date}}</p>
        </h2>
        <div class="detailWrap">
          <div class="detail">
            {{detail}}
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
  name: 'activeDetail',
  components: {
    homeHeader,
    homeFooter
  },
  data () {
    return {
      title: '',
      detail: '',
      bigTitle: '',
      date: ''
    }
  },
  methods: {
    getDetail (src, ID) {
      this.$axios.post(src, {
        params: {
          ID: ID
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          console.log(result.data[0])
          if (src === 'http://127.0.0.1:3000/admin/getSingleExcellentStu') {
            this.title = result.data[0].stuName
            this.detail = result.data[0].content
            this.bigTitle = '杰出校友'
            this.date = result.data[0].date
          }
          if (src === 'http://127.0.0.1:3000/admin/getSingleRecruit') {
            this.title = result.data[0].recruitName
            this.detail = result.data[0].content
            this.bigTitle = '校友招聘'
            this.date = result.data[0].date
          }
          if (src === 'http://127.0.0.1:3000/admin/getSingleHelp') {
            this.title = '贫困生' + result.data[0].stuName
            this.detail = result.data[0].content
            this.bigTitle = '校友互助'
            this.date = result.data[0].date
          }
          if (src === 'http://127.0.0.1:3000/admin/getSingleSchoolNotice') {
            this.title = result.data[0].title
            this.detail = result.data[0].content
            this.bigTitle = '学校公告'
            this.date = result.data[0].date
          }
        } else {
          alert('查询失败', result.msg)
        }
      })
    }
  },
  mounted () {
    var src = this.$route.params.src
    var ID = this.$route.params.ID
    this.getDetail(src, ID)
  }
}
</script>
<style lang="scss" scoped>
  .activeDetail{
    background-color: #f9f9f9;
    .content{
      width:1200px;
      margin:0 auto;
    }
    .img{
      padding-top:10px;
      background-color: #fff;
    }
    h1{
      border-top: 1px solid #e5e5e5;
      margin-top:30px;
      background-color: #fff;
      border-bottom: 2px solid #e5e5e5;
    }
    .activeDetailBg{
      width:100%;
    }
    .t{
      display: inline-block;
      display: 50px;
      line-height: 50px;
      position: relative;
      background: #014da1;
      color: #dde3ee;
      font-size: 18px;
      padding: 0 38px;
    }
    .t:before{
      content: "";
      width: 2px;
      height: 100%;
      position: absolute;
      left: 15px;
      top: 0;
      background: #fff;
    }
    .t:after {
      content: "";
      width: 5px;
      height: 100%;
      position: absolute;
      left: 8px;
      top: 0;
      background: #fff;
    }
    h2{
      background-color: #fff;
      padding: 20px 20px 20px 20px;
      border-bottom: 1px solid #e5e5e5;
      text-align: center;
    }
    .title{
      font-size: 20px;
    }
    .date{
      font-size: 14px;
      line-height:30px;
      text-align: center;
      color: #999;
    }
    .detailWrap{
      background-color: #fff;
    }
    .detail{
      padding-top:30px;
      width:1000px;
      margin:0 auto;
      text-indent: 2em;
      height:300px;
      font-size: 16px;
      color:#666;
      text-align: justify;
    }
  }
</style>
