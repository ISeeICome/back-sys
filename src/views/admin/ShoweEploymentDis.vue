<template>
    <div class="showBiogenicDis">
      <div id="echart1"></div>
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
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  name: 'ShoweEploymentDis',
  components: {
    Vheader,
    adminVslider
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
        text: '生源分布'
      },
      tooltip: {},
      legend: {
        data: ['人数']
      },
      xAxis: {
        data: ['福建', '广东', '广西', '河南', '河北', '山西', '湖南', '湖北']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 50, 90]
      }]
    }
    this.createEchart(document.getElementById('echart1'), option1)
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
      width:1000px;
    }
  }
</style>
