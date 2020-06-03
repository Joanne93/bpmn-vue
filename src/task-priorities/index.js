
/**
 * 支持可视化建模任务优先级的BPMN建模器
 */
// 'use strict';

// var Modeler = require('bpmn-js/lib/Modeler');
import Modeler from 'bpmn-js/lib/Modeler';

// var inherits = require('inherits');
import inherits from 'inherits';

// 自定义样式文件
// var prioritiesModule = require('./priorities');
import prioritiesModule from './priorities';



export default function PriorityAwareModeler(options) {
  Modeler.call(this, options);
}

inherits(PriorityAwareModeler, Modeler);

// module.exports = PriorityAwareModeler;


// make priorities module available with modeler



PriorityAwareModeler.prototype._modules =
  PriorityAwareModeler.prototype._modules.concat([prioritiesModule]);