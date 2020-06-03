/**
 * src\lib\draw\BpmnRenderer.js
 * 自定义render 
 */

import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';

import {
  append as svgAppend,
  attr as svgAttr,
  create as svgCreate
} from 'tiny-svg';
import {
  customElements,
  customConfig,
  hasLabelElements
} from '../utils/util.js'
import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

const HIGH_PRIORITY = 1500

// 继承BaseRender
export default class CustomRenderer extends BaseRenderer {
  constructor(eventBus, bpmnRenderer, modeling) {
    super(eventBus, HIGH_PRIORITY);

    this.bpmnRenderer = bpmnRenderer;
    this.modeling = modeling;
  }

  canRender(element) {
    // ignore labels
    return !element.labelTarget;
  }

  // 拖拽左侧节点到画布调用的方法
  drawShape(parentNode, element) {
    console.log(element)
    const type = element.type // 获取到类型
    if (customElements.includes(type)) { // or customConfig[type]
      const {
        url,
        attr
      } = customConfig[type]
      // 自己定义一个image元素 不用父元素的drawShape方法
      const customIcon = svgCreate('image', {
        ...attr,
        href: url
      })
      element['width'] = attr.width // 这里我是取了巧, 直接修改了元素的宽高
      element['height'] = attr.height
      svgAppend(parentNode, customIcon)
      // 判断是否有name属性来决定是否要渲染出label
      if (!hasLabelElements.includes(type) && element.businessObject.name) {
        const text = svgCreate('text', {
          x: attr.x,
          y: attr.y + attr.height + 20,
          "font-size": "14",
          "fill": "#000"
        })
        text.innerHTML = element.businessObject.name
        svgAppend(parentNode, text)
        console.log(text)
      }
      // this.modeling.resizeShape(element, {
      //     x: element.x,
      //     y: element.y,
      //     width: element['width'] / 2,
      //     height: element['height'] / 2
      // })
      return customIcon
    }
    // else if (type === 'bpmn:TextAnnotation' && element.businessObject.color) {
    //     console.log('我是绿色的')
    //     let color = element.businessObject.color
    //     element.businessObject.di.set('bioc:stroke', color)
    //     const shape = this.bpmnRenderer.drawShape(parentNode, element)
    //     return shape
    // }
    const shape = this.bpmnRenderer.drawShape(parentNode, element)
    return shape
  }

  getShapePath(shape) {
    return this.bpmnRenderer.getShapePath(shape);
  }
}

CustomRenderer.$inject = ['eventBus', 'bpmnRenderer', 'modeling'];