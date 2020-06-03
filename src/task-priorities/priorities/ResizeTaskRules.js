// 'use strict';

// var RuleProvider = require('diagram-js/lib/features/rules/RuleProvider');
import RuleProvider from "diagram-js/lib/features/rules/RuleProvider"

// var is = require('bpmn-js/lib/util/ModelUtil').is;
import { is } from "bpmn-js/lib/util/ModelUtil"

// var inherits = require('inherits');
import inherits from "inherits"



export default function ResizeTaskRules(eventBus) {
  RuleProvider.call(this, eventBus);
}

inherits(ResizeTaskRules, RuleProvider);

// module.exports = ResizeTaskRules;


ResizeTaskRules.prototype.init = function() {

  this.addRule('shape.resize', 1500, function(context) {
    if (is(context.shape, 'bpmn:Activity')) {
      return true;
    }
  });
};