<!--
 * @Description: 自定义palette左侧工具栏 全部自定义 + 自定义rendener 全部自定义 + 自定义contextPad
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
// import customElements from '../common/custom-elements.json';
// import PriorityAwareModeler from '../task-priorities';
import CustomModeler from '../custom/contextPad_custom/index.js'
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
      this.bpmnModeler = new CustomModeler({
        container: _this.canvas,
        keyboard: {
          bindTo: document
        },
        additionalModules: []
      });
      this.createNewDiagram(deafult_xml)
    },
    async createNewDiagram(defaultDiagram) {
      let _this = this;
      this.bpmnModeler.importXML(defaultDiagram, function(err) {
        if (err) {
          console.error('something went wrong:', err);
        }
        _this.bpmnModeler.get('canvas').zoom('fit-viewport','auto');
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
.icon-custom-edit {
    background-image: url('https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/edit.png');
    background-size: contain;
}
.icon-custom-delete {
    background-image: url('https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/delete.png');
    background-size: contain;
}
</style>