<template>
    <div class="showBiogenicDis">
      <div id="echart1"></div>
      <div id="echart2"></div>
    </div>
</template>

<script>
import Vheader from '@/components/Vheader.vue'
import Vslider from '@/components/Vslider.vue'

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
    Vslider
  },
  methods: {
    createEchart (el, option) {
      var echart = echarts.init(el)
      echart.setOption(option)
    }
  },
  mounted () {
    var option1 = {
      title: {
        text: '就业形式'
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
            {value: 335, name: '已就业'},
            {value: 310, name: '未就业'}
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
    this.createEchart(document.getElementById('echart1'), option1)
    var option2 = {
      title: {
        text: '各专业就业详情'
      },
      tooltip: {},
      legend: {
        data: ['人数']
      },
      xAxis: {
        data: ['计算机科学与技术', '土木工程', '电子信息工程', '汉语言文学', '应用化学', '机械工程']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
    this.createEchart(document.getElementById('echart2'), option2)
  }
}
</script>

<style lang="scss" scoped>
  .showBiogenicDis{
    padding:10px 0 0 15px;
    margin-left:180px;
    position:relative;
    #echart1{
      height:400px;
      width:400px;
      float:left;
    }
    #echart2{
      height:400px;
      width:800px;
      float:left;
    }
  }
</style>
