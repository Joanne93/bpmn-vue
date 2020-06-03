<template>
  <div id="orgManagement"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      chartData: {
        name: 'flare',
        children: [
          {
            "name": "data",
            "children": [
              {
                "name": "converters",
                "children": [
                  { "name": "Converters", "value": 721 },
                ]
              }
            ]
          },
          {
            "name": "flex",
            "children": [
              { "name": "FlareVis", "value": 4116 }
            ]
          },
          {
            "name": "scale",
            "children": [
              { "name": "IScaleMap", "value": 2105 },
              { "name": "LinearScale", "value": 1316 },
              { "name": "LogScale", "value": 3151 },
              { "name": "OrdinalScale", "value": 3770 },
              { "name": "QuantileScale", "value": 2435 },
            ]
          }
        ],
      },
      chart: {},
      popoverPanelShow: false
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('orgManagement'))
      this.chart.on('contextmenu', params => {
        console.log(params)
        if (params.componentType === 'series') {
          this.selectedOrg = params.data
          this.popoverPanelShow = true
        } else {
          return
        }
      });
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: { show: true }

          }
        },
        series: [
          {
            // 树形结构
            type: 'tree',
            // 数据
            data: [this.chartData],

            // 距离上下左右的距离
            top: '10%',
            left: '15%',
            bottom: '10%',
            right: '20%',
            // 垂直方向
            orient: 'vertical',

            // 标记形状
            symbol: 'rect',
            // 标记的大小
            symbolSize: 50,

            // 线条
            edgeShape: 'polyline',
            edgeForkPosition: '63%',
            initialTreeDepth: 3,
            lineStyle: {
                width: 2
            },


            // 每个节点对应的标签的样式
            label: {
              normal: {
                // 标签的位置
                position: 'left',
                // 文字垂直对齐的方式
                verticalAlign: 'middle',
                // 文字水平对齐的方式
                align: 'right',
                // 文字大小
                fontSize: 13
              }
            },
            // 叶子节点的特殊配置
            leaves: {
              label: {
                normal: {
                  // 标签的位置
                  position: 'right',
                  // 文字垂直对齐的方式
                  verticalAlign: 'middle',
                  // 文字水平对齐的方式
                  align: 'left'
                }
              }
            },
            // 子节点折叠和展开的交互，默认打开
            expandAndCollapse: true,
            // 初始动画的时长，支持回调函数，默认1000
            animationDuration: 550,
            // 数据更新动画的时长，默认300
            animationDurationUpdate: 750
          }
        ]
      })
    },
    hidePopoverPanel() {
      this.popoverPanelShow = false;
    }
  }
}
</script>

<style>
#orgManagement {
  height: 500px;
  width: 800px;
  padding: 50px;
}
#orgManagement > div {
  height: 100%!important;
  width: 100%!important;
}
</style>