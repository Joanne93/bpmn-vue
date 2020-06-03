/**
 * src\lib\draw\BpmnRenderer.js
 * 完全自定义render 
 */

import inherits from 'inherits'

import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer'
import {
  isObject,
  assign,
  forEach
} from 'min-dash';
import {
  append as svgAppend,
  create as svgCreate,
  classes as svgClasses
} from 'tiny-svg'


import {
  customElements,
  customConfig,
  hasLabelElements
} from '../utils/util'

import {
  defaultFillColor,
  defaultStrokeColor
} from "../utils/const"
/**
 * A renderer that knows how to render custom elements.
 */
export default function CustomRenderer(eventBus, styles, bpmnRenderer, textRenderer) {
  BaseRenderer.call(this, eventBus, 2000)

  var computeStyle = styles.computeStyle
  this.bpmnRenderer = bpmnRenderer

  function renderLabel(parentGfx, label, options) {

    options = assign({
      size: {
        width: 100
      }
    }, options);

    var text = textRenderer.createText(label || '', options);

    svgClasses(text).add('djs-label');

    svgAppend(parentGfx, text);

    return text;
  }

  this.handlers = {
    'bpmn:Shape': function(parentNode, element) {
      const type = element.type // 获取到类型
      if (type !== 'label') {
        const {
          url,
          attr
        } = customConfig[type];
        const customIcon = svgCreate('image', {
          ...attr,
          href: url
        })
        element['width'] = attr.width
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
        }
        renderLabel(parentNode, element.label)
        return customIcon
      } else {
        element
      }
    },
    'bpmn:SequenceFlow': function(parentGfx, element) {
      var pathData = createPathFromConnection(element);
      var fill = defaultFillColor,
        stroke = defaultStrokeColor;
      var attrs = {
        strokeLinejoin: 'round',
        markerEnd: marker('sequenceflow-end', fill, stroke),
        stroke: defaultStrokeColor
      };
      var path = this.bpmnRenderer.drawPath(parentGfx, pathData, attrs);
      var sequenceFlow = this.bpmnRenderergetSemantic(element);
      var source;
      if (element.source) {
        source = element.source.businessObject;
        if (sequenceFlow.conditionExpression && source.$instanceOf('bpmn:Activity')) {
          svgAttr(path, {
            markerStart: marker('conditional-flow-marker', fill, stroke)
          });
        }
        if (source.default && (source.$instanceOf('bpmn:Gateway') || source.$instanceOf('bpmn:Activity')) &&
          source.default === sequenceFlow) {
          svgAttr(path, {
            markerStart: marker('conditional-default-flow-marker', fill, stroke)
          });
        }
      }
      return path;
    },
  }
}

inherits(CustomRenderer, BaseRenderer)

CustomRenderer.$inject = ['eventBus', 'styles', 'bpmnRenderer', 'textRenderer']

// 是否渲染
CustomRenderer.prototype.canRender = function(element) {
  // ignore labels
  // let bo = (element && element.businessObject) || element;
  // return bo && (typeof bo.$instanceOf === 'function') && bo.$instanceOf('bpmn:BaseElement');
  return !element.labelTarget;
}

// 画图形
CustomRenderer.prototype.drawShape = function(parentGfx, element) {
  var type = element.type;
  var h = this.bpmnRenderer.handlers[type];
  // 自定义元素
  if (customElements.includes(element.type)) {
    h = this.handlers['bpmn:Shape'];
  }
  return h(parentGfx, element);
}

// 画转移线
// CustomRenderer.prototype.drawConnection = function(parentGfx, element) {
//   var type = element.type;
//   var h = this.bpmnRenderer.handlers[type];
//   // 自定义元素
//   if (customElements.includes(element.type)) {
//     h = this.handlers[type];
//   }
//   return h(parentGfx, element);
// };

// 获取图形path
CustomRenderer.prototype.getShapePath = function(shape) {
  // console.log(shape)
  // 用父元素的方法
  this.bpmnRenderer.getShapePath(shape);
}
