/**
 * src\lib\features\context-pad\ContextPadProvider.js
 * 自定义ContextPad 完全
 */
// import store from '../../../store'
export default function ContextPadProvider(contextPad, config, injector, translate, bpmnFactory, elementFactory, create, modeling, connect) {
  this.create = create
  this.elementFactory = elementFactory
  this.translate = translate
  this.bpmnFactory = bpmnFactory
  this.modeling = modeling
  this.connect = connect
  config = config || {}
  if (config.autoPlace !== false) {
    this.autoPlace = injector.get('autoPlace', false);
  }
  contextPad.registerProvider(this)
}

ContextPadProvider.$inject = [
  'contextPad',
  'config',
  'injector',
  'translate',
  'bpmnFactory',
  'elementFactory',
  'create',
  'modeling',
  'connect'
]

ContextPadProvider.prototype.getContextPadEntries = function(element) {
  const {
    autoPlace,
    create,
    elementFactory,
    connect,
    translate,
    modeling
  } = this;
  var actions = {};

  if (element.type === 'label') {
    return actions;
  }
  // 创建Action
  function appendAction(type, className, title, options) {
    if (typeof title !== 'string') {
      options = title;
      title = translate('Append {type}', {
        type: type.replace(/^bpmn:/, '')
      });
    }

    function appendStart(event, element) {
      var shape = elementFactory.createShape(Object.assign({
        type: type
      }, options));
      create.start(event, shape, {
        source: element
      });
    }
    var append = autoPlace ? function(event, element) {
      var shape = elementFactory.createShape(Object.assign({
        type: type
      }, options));

      autoPlace.append(element, shape);
    } : appendStart;
    return {
      group: 'model',
      className: className,
      title: title,
      action: {
        dragstart: appendStart,
        click: append
      }
    };
  }
  // 转移线事件
  function startConnect(event, element) {
    connect.start(event, element);
  }
  // 删除功能
  function removeElement(e) {
    modeling.removeElements([element])
  }

  if (element.type === 'bpmn:Task' || element.type === 'bpmn:StartEvent') {
    Object.assign(actions, {
      'append.append-task': appendAction(
        'bpmn:Task',
        'icon-custom icon-custom-task iconfont icon-_GJZrengong1',
        translate('Append Task')
      ),
      'append.end-event': appendAction(
        'bpmn:EndEvent',
        'icon-custom icon-custom-end iconfont icon-_GJZjieshu',
        translate('Append EndEvent')
      ),
      'connect': {
        group: 'edit',
        className: 'bpmn-icon-connection-multi',
        title: translate('转移线'),
        action: {
          click: startConnect,
          dragstart: startConnect
        }
      }
    })
  }
  Object.assign(actions, {
    'delete': {
      group: 'edit',
      className: 'bpmn-icon-trash',
      title: translate('Remove'),
      action: {
        click: removeElement
      }
    }
  })
  return actions;
}