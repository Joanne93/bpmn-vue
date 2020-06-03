<!--
 * @Description: 单纯展示流程图
 * @Author: pan
 * @Date: 2019-08-06 18:12:30
 * @LastEditTime: 2019-10-16 10:49:24
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div ref="content" class="designer-containers">
    <div ref="canvas" class="canvas"></div>
  </div>
</template>

<script>
// 引入相关的依赖
import BpmnViewer from 'bpmn-js';
import { submit } from "../common/constants.js"

export default {
  data() {
    return {
      canvas: null,
      bpmnViewer: null,
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy: function() {
    this.bpmnViewer.destroy();
  },
  methods: {
    init() {
      // 获取到属性ref为“canvas”的dom节点
      this.canvas = this.$refs.canvas
      // 建模
      this.bpmnViewer = new BpmnViewer({
        container: this.canvas,
      })
      this.createNewDiagram(submit)
    },
    async createNewDiagram(bpmnXmlStr) {
      await this.importXML(bpmnXmlStr, this.success);
    },
    success() {
      this.bpmnViewer.get('canvas').zoom('fit-viewport');
    },
    importXML(bpmnXmlStr) {
      return new Promise((resolve, reject) => {
        this.bpmnViewer.importXML(bpmnXmlStr, err => {
          if (err) {
            console.log(err);
            reject(err)
          } else {
            resolve()
          }
        })
      })
    },
  }
}
</script>

<style scoped lang="less">
/*左边工具栏以及编辑节点的样式*/
.designer-containers {
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  height: 100%;

  .canvas {
    width: 100%;
    height: 100%;

    .panel {
      position: absolute;
      right: 0;
      top: 0;
      width: 300px;
    }
  }
}
</style>

