<template>
    <div class="index">
      <homeHeader></homeHeader>
      <div class="content">
        <swiper :options="swiperOption">
          <swiper-slide>
              <img src="../../../static/img/banner1.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
             <img src="../../../static/img/banner2.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
              <img src="../../../static/img/banner3.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
             <img src="../../../static/img/banner4.jpg" alt="">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <ul class="brief">
          <li>
            <h2><span class="bigTitle">杰出校友</span><span class="more">更多</span></h2>
            <ol>
              <li v-for = "(item,index) in excellentStuList" :key="index" @click="toDetail('http://127.0.0.1:3000/admin/getSingleExcellentStu',item.ID)">
                <span class="title">{{item.stuName}}</span><span class="date">{{item.date}}</span>
              </li>
            </ol>
          </li>
          <li>
            <h2><span class="bigTitle">招聘信息</span><span class="more">更多</span></h2>
            <ol>
              <li v-for = "(item,index) in recruitList" :key="index" @click="toDetail('http://127.0.0.1:3000/admin/getSingleRecruit',item.ID)">
                <span class="title">{{item.recruitName}}</span><span class="date">{{item.date}}</span>
              </li>
            </ol>
          </li>
          <li>
            <h2><span class="bigTitle">校友帮扶</span><span class="more">更多</span></h2>
            <ol>
              <li v-for = "(item,index) in helpList" :key="index" @click="toDetail('http://127.0.0.1:3000/getSingleHelp',item.ID)">
                <span class="title">{{item.name}}</span><span class="date">{{item.date}}</span>
              </li>
            </ol>
          </li>
          <li>
            <h2><span class="bigTitle">公告</span><span class="more">更多</span></h2>
            <ol>
              <li v-for = "(item,index) in noticeList" :key="index" @click="toDetail('http://127.0.0.1:3000/',item.ID)">
                <span class="title">{{item.name}}</span><span class="date">{{item.date}}</span>
              </li>
            </ol>
          </li>
        </ul>
      </div>
      <homeFooter></homeFooter>
    </div>
</template>
<script>
import homeHeader from '@/components/homeHeader'
import homeFooter from '@/components/homeFooter'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  components: {
    swiper,
    swiperSlide,
    homeHeader,
    homeFooter
  },
  data () {
    return {
      excellentStuList: [],
      recruitList: [],
      helpList: [],
      noticeList: [],
      swiperOption: {
        autoplay: {
          delay: 1200
        },
        loop: true,
        direction: 'horizontal',
        slidesPerView: 'auto',
        autoplayDisableOnInteraction: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletActiveClass: 'horizontal-active'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    getExcellentStuList () {
      this.$axios.post('http://127.0.0.1:3000/getExcellentStuList', {
        params: {
          page: 1,
          pageSize: 6
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          this.excellentStuList = result.data
          console.log(this.excellentStuList)
        } else {
          alert('查询失败', result.msg)
        }
      })
    },
    getHelpList () {
      this.$axios.post('http://127.0.0.1:3000/getHelpList', {
        params: {
          page: 1,
          pageSize: 6
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          this.helptList = result.data
        } else {
          alert('查询失败', result.msg)
        }
      })
    },
    getRecruit () {
      this.$axios.post('http://127.0.0.1:3000/getRecruitList', {
        params: {
          page: 1,
          pageSize: 6
        }
      }).then(res => {
        var result = res.data
        console.log(result)
        if (result.code === 1) {
          this.recruitList = result.data
        } else {
          alert('查询失败', result.msg)
        }
      })
    },
    toDetail (src, ID) {
      this.$router.push({name: 'activeDetail', params: { src: src, ID: ID }})
    }
  },
  mounted () {
    this.getHelpList()
    this.getRecruit()
    this.getExcellentStuList()
  }
}
</script>
<style lang="scss" scoped>
.content{
  width:1200px;
  margin:0 auto;
  background-color: #f9f9f9;
    .swiper-container{
        width: 1200px;
        height: 300px;
        img{
            display: block;
            width: 1200px;
            height: 100%;
        }
    }
    .swiper-slide{
      div{
        height:100%;
      }
    }
    .swiper-pagination{
        position:absolute;
        top:90%;
        z-index:10;
        text-align: center;
        .swiper-pagination-bullet{
        display: inline-block;
        width:800px;
        height:80px;
        background-color: #ACACAC;
        border-radius: 0;
        opacity:1;
        position:relative;
        margin-top:50px;
      }
      .swiper-pagination-bullet:nth-child(1){
        margin-right:50px !important;
      }
      /deep/ .horizontal-active{
          background:#E00707;
          opacity:0.6;
      }
      /deep/ .swiper-pagination-bullet{
        width:20px;
        height:20px;
      }
      /deep/ .swiper-pagination-bullet{
        margin:0 10px;
      }
    }
  ul{
    padding:0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
      width:48%;
      height:300px;
      h2{
        border-bottom: 2px #0065bb solid;
        font-size:18px;
        line-height:40px;
        padding-left:10px;
        .bigTitle{
          display: inline-block;
          height: 31px;
          line-height: 31px;
          font-size: 16px;
          color: #fff;
          background: url('../../../static/img/tb1.png') #0364a8 right center no-repeat;
          padding-left: 18px;
          padding-right: 25px;
        }
        .more{
          padding:0 10px;
          float:right;
          font-size:12px;
          line-height:30px;
          border-radius: 5px;
          color: #8b8b8b;
          font-weight: 400;
          margin-top:6px;
        }
        .more:hover{
          color:#fff;
          background-color: #0364a8;
          cursor: pointer;
        }
      }
      ol{
        li{
          width:100%;
          height:40px;
          line-height:40px;
          font-size: 14px;
          border-bottom: 1px #dedede solid;
          cursor: pointer;
          .title{
            float:left;
            padding-left:10px;
          }
          .date{
            float:right;
            margin-right:16px;
          }
        }
      }
    }
  }
}
</style>
