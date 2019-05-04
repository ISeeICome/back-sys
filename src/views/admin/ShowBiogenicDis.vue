<template>
    <div class="showBiogenicDis">
      <div class="statusBar">
            <label>校友统计</label>
            <label>年级</label>
            <el-select v-model="grade" placeholder="请选择" class="selectGrade">
                <el-option
                  v-for="(item, index) in gradeOptions"
                  :key="index"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            <label>查询内容</label>
              <el-select v-model="con" placeholder="请选择" class="selectGrade">
                <el-option
                  v-for="(item, index) in conOptions"
                  :key="index"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
              <el-button type="success" id="subBtn" @click="search">查询</el-button>
        </div>
      <div id="echart1" v-show="isShowEchart1"></div>
      <div id="echart2"></div>
    </div>
</template>

<script>
import Vheader from '@/components/Vheader.vue'
import adminVslider from '@/components/adminVslider.vue'

// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入饼状图
require('echarts/lib/chart/pie')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  name: 'showBiogenicDis',
  components: {
    Vheader,
    adminVslider
  },
  data () {
    return {
      workCount: '',
      notWorkCount: '',
      option1: [],
      option2: [],
      gradeOptions: [],
      grade: '',
      conOptions: ['班级人数', '就业状态', '生源地'],
      con: '',
      isShowEchart1: true
    }
  },
  methods: {
    createEchart (el, option) {
      var echart = echarts.init(el)
      echart.setOption(option)
    },
    search () {
      // this.isShowEchart1 = false
      var that = this
      this.$axios.post('http://127.0.0.1:3000/getCount', {
        params: {
          grade: this.grade,
          con: this.con
        }
      }).then(res => {
        var result = res.data
        // var option1Center = [];
        var option1data = []
        var groupData = []
        var countData = []

        result.data.forEach((item, index) => {
          if (that.con === '生源地') {
            groupData.push(item.fromCity)
            option1data.push({value: item.count, name: item.fromCity})
          } else {
            groupData.push(item.className)
            option1data.push({value: item.count, name: item.className})
          }
          countData.push(item.count)
        })
        that.option1 = {
          title: {
            text: that.con
          },
          tooltip: {
            trigger: 'item' + '--饼图',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: option1data,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        that.createEchart(document.getElementById('echart1'), that.option1)
        console.log(result.data)
        if (result.code === 1) {
          that.option2 = {
            title: {
              text: that.con + '--柱状图'
            },
            tooltip: {},
            legend: {
              data: ['人数']
            },
            xAxis: {
              data: groupData
            },
            yAxis: {},
            series: [{
              name: '人数',
              type: 'bar',
              data: countData
            }]
          }
          console.log(that.option2)
          that.createEchart(document.getElementById('echart2'), that.option2)
        } else {
          alert('查询失败', result.msg)
        }
      })
    }
  },
  mounted () {
    var that = this
    this.$axios.post('http://127.0.0.1:3000/getWorkCount', {
      params: {}
    }).then(res => {
      var result = res.data
      console.log(result)
      if (result.code === 1) {
        that.workCount = result.workCount
        that.notWorkCount = result.notWorkCount
        that.option1 = {
          title: {
            text: '就业形式--饼图'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: that.workCount, name: '已就业'},
                {value: that.notWorkCount, name: '未就业'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        that.createEchart(document.getElementById('echart1'), that.option1)
      } else {
        alert('查询失败', result.msg)
      }
    })
    this.$axios.post('http://127.0.0.1:3000/getGradeWorkCount', {
      params: {}
    }).then(res => {
      var result = res.data
      var gradeData = []
      var countData = []
      console.log(result)
      result.workCountData.forEach((item, index) => {
        gradeData.push(item.grade)
      })
      result.workCountData.forEach((item, index) => {
        countData.push(item.workCount)
      })
      if (result.code === 1) {
        that.option2 = {
          title: {
            text: '各届就业详情--柱状图'
          },
          tooltip: {},
          legend: {
            data: ['人数']
          },
          xAxis: {
            data: gradeData
          },
          yAxis: {},
          series: [{
            name: '就业人数',
            type: 'bar',
            data: countData
          }]
        }
        console.log(that.option2)
        that.createEchart(document.getElementById('echart2'), that.option2)
      } else {
        alert('查询失败', result.msg)
      }
    })
    this.$axios.post('http://127.0.0.1:3000/getClassList', {
      params: {
        page: 0
      }
    }).then(res => {
      var result = res.data
      console.log(result)
      if (result.code === 1) {
        that.classList = result.data
        that.gradeOptions.push('所有年级')
        that.classList.forEach((item, index) => {
          if (that.gradeOptions.indexOf(item.grade) < 0) {
            that.gradeOptions.push(item.grade)
          }
        })
        console.log(that.gradeOptions)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .showBiogenicDis{
    padding:10px 0 0 15px;
    margin-left:180px;
    position:relative;
    .statusBar{
        padding:10px 0 0 0;
        height:50px;
        width:100%;
        border-bottom:1px dashed #d9dfe4;
        label:nth-child(1){
            border-left:2px solid #2a94de;
            padding-left:20px;
            font-size:16px;
            margin-right:20px;
        }
        label{
          margin:0 10px;
        }
    }
    #echart1{
      height:400px;
      width:400px;
      float:left;
      margin-left:30px;
      margin-top:40px;
    }
    #echart2{
      height:500px;
      width:800px;
      float:left;
      margin-left:50px;
      margin-top:40px;
    }
  }
</style>
