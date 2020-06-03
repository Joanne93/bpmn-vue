<!--
 * @Description: 自定义palette左侧工具栏 追加图标 + 自定义renderer 追加 + 自定义contextPad 追加
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
import BpmnModeler from 'bpmn-js/lib/Modeler'
// 原生的工具栏 
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'
// 自定义工具栏在原来的工具栏基础上追加
// import customPaletteProvider from '../custom/palette_append/index.js'
// import customModule from '../custom/render_append/index.js'
import customModule from "../custom/contextPad_append/index.js"

import { deafult_xml } from "../common/constants.js"

export default {

  data() {
    return {
      bpmnModeler: null,
      canvas: null,
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
      let _this = this;
      this.canvas = this.$refs.canvas;
      this.bpmnModeler = new BpmnModeler({
        container: _this.canvas,
        keyboard: {
          bindTo: document
        },
        additionalModules: [
          customModule
        ]
      });
      this.createNewDiagram(deafult_xml)
    },
    async createNewDiagram(defaultDiagram) {
      let _this = this;
      this.bpmnModeler.importXML(defaultDiagram, function(err) {
        if (err) {
          console.error('something went wrong:', err);
        }
        _this.bpmnModeler.get('canvas').zoom('fit-viewport');
        // _this.bpmnModeler.addCustomElements(customElements);
      });
    },
  }


}

</script>
<style scoped lang="less">
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
<style>
.icon-custom-my {
  background-image: url('https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/start.png')!important;
  background-size: contain!important;
}
.red-text-annotation {
  color: red;
}
.icon-custom-edit {
    background-image: url('https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/edit.png')!important;
    background-size: contain!important;
}
.icon-custom-delete {
    background-image: url('https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/delete.png')!important;
    background-size: contain!important;
}
/* .djs-context-pad .icon-custom.entry:hover {
  background-color: transparent!important;
} */
</style>