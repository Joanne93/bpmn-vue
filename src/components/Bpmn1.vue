<!--
 * @Description: 画流程图并且支持快捷键操作 ctrl+z ctrl+s...
 * @Author: pan
 * @Date: 2019-08-06 18:12:30
 * @LastEditTime: 2019-10-16 10:49:24
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div ref="content" class="designer-containers">
    <div ref="canvas" class="canvas"></div>
    <div id="js-properties-panel" class="panel"></div>
  </div>
</template>

<script>
// 引入相关的依赖
import BpmnModeler from 'bpmn-js/lib/Modeler'

import { deafult_xml } from "../common/constants.js"

export default {
  data() {
    return {
      canvas: null,
      bpmnModeler: null,
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy: function() {
    this.bpmnModeler.destroy();
  },
  methods: {
    init() {
      // 获取到属性ref为“canvas”的dom节点
      let canvas = this.$refs.canvas
      // 建模
      this.bpmnModeler = new BpmnModeler({
        container: canvas,
        keyboard: {
          bindTo: document
        },
        //添加控制板
        propertiesPanel: {
          parent: '#js-properties-panel'
        },
      })
      this.createNewDiagram(deafult_xml)
    },
    async createNewDiagram(bpmnXmlStr) {
      try {
        await this.importXML(bpmnXmlStr);
        this.success();
      } catch (err) {
        console.log(err);
      }
    },
    success() {
      this.bpmnModeler.get('canvas').zoom('fit-viewport', 'auto');
    },
    importXML(bpmnXmlStr) {
      return new Promise((resolve, reject) => {
        this.bpmnModeler.importXML(bpmnXmlStr, err => {
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

