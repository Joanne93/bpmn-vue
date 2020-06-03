<!--
 * @Description: Bpmn4的基础上加上事件监听 保存bpmn和svg
 * @Author: pan
 * @Date: 2019-08-06 18:12:30
 * @LastEditTime: 2019-10-16 10:49:24
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div ref="content" class="designer-containers">
    <div ref="canvas" class="canvas"></div>
    <div id="js-properties-panel" class="panel"></div>
    <div class="button">
      <a ref="saveDiagram" href="javascript:">保存为bpmn</a>
      <a ref="saveSvg" href="javascript:">保存为svg</a>
    </div>
  </div>
</template>

<script>
// 引入相关的依赖
import BpmnViewer from 'bpmn-js';
import BpmnModeler from 'bpmn-js/lib/Modeler'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'
import propertiesPanelModule from 'bpmn-js-properties-panel'
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda'
import customTranslate from "../bpmnChineseTranslate"

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
      // 获取到属性ref为“canvas”的dom节点
      this.canvas = this.$refs.canvas
      // 建模
      this.bpmnModeler = new BpmnModeler({
        container: this.canvas,
        // 添加控制板
        propertiesPanel: {
            parent: '#js-properties-panel'
        },
        keyboard: {
          bindTo: document
        },
        cli: {
          bindTo: 'cli'
        },
        additionalModules: [
          // 左边工具栏以及节点
          propertiesProviderModule,
          // 右边的工具栏
          propertiesPanelModule,
          // 国际化
          customTranslate,
        ],
        moddleExtensions: {
            camunda: camundaModdleDescriptor
        },
        bpmnRender: {
          defaultFillColor: '#ff00ff',
          defaultStrokeColor: '#333'
        }
        
      })
      this.createNewDiagram(deafult_xml)
    },
    async createNewDiagram(bpmnXmlStr) {
      await this.importXML(bpmnXmlStr).then( () => {
        this.success()
      });
    },
    success() {
      this.bpmnModeler.get('canvas').zoom('fit-viewport');
      this.addBpmnListener()
      this.addModelerListener()
      this.addEventBusListener()
    },
    // 当有值改变后会触发这个事件 给两个a标签加上链接
    addBpmnListener() {
      const that = this
      // 获取a标签dom节点
      const downloadLink = this.$refs.saveDiagram
      const downloadSvgLink = this.$refs.saveSvg
      // 给图绑定事件，当图有发生改变就会触发这个事件
      this.bpmnModeler.on('commandStack.changed', function() {
        that.saveSVG(function(err, svg) {
          that.setEncoded(downloadSvgLink, 'diagram.svg', err ? null : svg)
        })
        that.saveDiagram(function(err, xml) {
          that.setEncoded(downloadLink, 'diagram.bpmn', err ? null : xml)
        })
      })
    },
    // 监听节点的增删改
    addModelerListener() {
      // 监听 modeler
      const bpmnjs = this.bpmnModeler
      const that = this
      // 'shape.removed', 'connect.end', 'connect.move'
      const events = ['shape.added', 'shape.move.end', 'shape.removed','connection.added']
      events.forEach(function(event) {
        that.bpmnModeler.on(event, e => {
          var elementRegistry = bpmnjs.get('elementRegistry')
          var shape = e.element ? elementRegistry.get(e.element.id) : e.shape
          // console.log(shape)
          if (event === 'shape.added') {
            console.log('新增了shape')
          } else if (event === 'shape.move.end') {
            console.log('移动了shape')
          } else if (event === 'shape.removed') {
            console.log('删除了shape')
          } else if (event === 'connection.added') {
            console.log('新增了connection')
          }
        })
      })
    },
    // 监听改变和点击事件
    addEventBusListener() {
      // 监听 element
      let that = this
      const eventBus = this.bpmnModeler.get('eventBus')
      const modeling = this.bpmnModeler.get('modeling')
      const elementRegistry = this.bpmnModeler.get('elementRegistry')
      const eventTypes = ['element.click', 'element.changed']
      eventTypes.forEach(function(eventType) {
        eventBus.on(eventType, function(e) {
          console.log(e)
          if (!e || e.element.type == 'bpmn:Process') return
          if (eventType === 'element.changed') {
            that.elementChanged(e)
          } else if (eventType === 'element.click') {
            console.log('点击了element')
            var shape = e.element ? elementRegistry.get(e.element.id) : e.shape
            if (shape.type === 'bpmn:StartEvent') {
              // 更新图形的属性
              modeling.updateProperties(shape, {
                name: '我是修改后的虚线节点',
                isInterrupting: false,
                customText: '我是自定义的text属性'
              })
              // modeling.setColor(shape, {
              //   fill: '#ff0000',
              //   stroke: null
              // })
            }
          }
        })
      })
    },
    isInvalid(param) {
      // 判断是否是无效的值
      return param === null || param === undefined || param === ''
    },
    isSequenceFlow(type) {
      // 判断是否是线
      return type === 'bpmn:SequenceFlow'
    },
    elementChanged(e) {
      var shape = this.getShape(e.element.id)
      console.log(shape)
      if (!shape) {
        // 若是shape为null则表示删除, 无论是shape还是connect删除都调用此处
        console.log('无效的shape')
        // 上面已经用 shape.removed 检测了shape的删除, 要是删除shape的话这里还会被再触发一次
        console.log('删除了shape和connect')
        return
      }
      if (!this.isInvalid(shape.type)) {
        if (this.isSequenceFlow(shape.type)) {
          console.log('改变了线')
        }
      }
    },
    getShape(id) {
      var elementRegistry = this.bpmnModeler.get('elementRegistry')
      return elementRegistry.get(id)
    },
    // 下载为SVG格式,done是个函数，调用的时候传入的
    saveSVG(done) {
      // 把传入的done再传给bpmn原型的saveSVG函数调用
      this.bpmnModeler.saveSVG(done)
    },
    // 下载为bpmn格式,done是个函数，调用的时候传入的
    saveDiagram(done) {
      // 把传入的done再传给bpmn原型的saveXML函数调用
      this.bpmnModeler.saveXML({ format: true }, function(err, xml) {
        done(err, xml)
      })
    },
    // 当图发生改变的时候会调用这个函数，这个data就是图的xml
    setEncoded(link, name, data) {
      // 把xml转换为URI，下载要用到的
      const encodedData = encodeURIComponent(data)
      // 下载图的具体操作,改变a的属性，className令a标签可点击，href令能下载，download是下载的文件的名字
      //   console.log(link, name, data)
      let xmlFile = new File([data], 'test.bpmn')
      //   console.log(xmlFile)
      if (data) {
        link.className = 'active'
        link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
        link.download = name
      }
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
<style>
.js-properties-panel {
    position: absolute!important;
    top: 0px!important;
    right: 0px!important;
}
.button {
  position: absolute;
  bottom: 40px;
  left: 30px;
}
.button a {
  margin-right: 10px;
  height: 32px;
  width: 100px;
}
</style>

