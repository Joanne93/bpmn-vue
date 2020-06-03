// 'use strict';

// var inherits = require('inherits');
import inherits from "inherits"

// var is = require('bpmn-js/lib/util/ModelUtil').is;
import { is } from "bpmn-js/lib/util/ModelUtil"

// var getBusinessObject = require('bpmn-js/lib/util/ModelUtil').getBusinessObject;
import { getBusinessObject } from "bpmn-js/lib/util/ModelUtil"

// var BpmnRenderer = require('bpmn-js/lib/draw/BpmnRenderer');
import BpmnRenderer from "bpmn-js/lib/draw/BpmnRenderer"

// var svgAttr = require('tiny-svg/lib/attr');
import svgAttr from "tiny-svg/lib/attr"


export default function ColorRenderer(eventBus, styles, pathMap, canvas, priority) {

  BpmnRenderer.call(this, eventBus, styles, pathMap, canvas, priority || 1200);


  var originalDrawShape = this.drawShape;

  this.drawShape = function(visuals, element) {

    var bo, color;

    var result = originalDrawShape.call(this, visuals, element);

    if (is(element, 'bpmn:Activity')) {
      bo = getBusinessObject(element);
      color = bo.get('tp:color');

      if (color) {
        svgAttr(result, 'fill', color);
      }
    }

    return result;
  };
}

inherits(ColorRenderer, BpmnRenderer);

ColorRenderer.$inject = [
  'eventBus',
  'styles',
  'pathMap',
  'canvas'
];

// module.exports = ColorRenderer;