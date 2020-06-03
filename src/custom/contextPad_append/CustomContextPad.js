/**
 * src\lib\features\context-pad\ContextPadProvider.js
 * 自定义ContextPad 追加
 */

export default class CustomContextPad {
  constructor(config, contextPad, create, elementFactory, injector, translate, modeling, bpmnFactory) {
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;
    this.modeling = modeling;
    this.bpmnFactory = bpmnFactory;

    if (config.autoPlace !== false) {
      this.autoPlace = injector.get('autoPlace', false);
    }

    contextPad.registerProvider(this); // // 定义这是一个contextPad
  }

  getContextPadEntries(element) {
    const {
      autoPlace,
      create,
      elementFactory,
      translate,
      modeling,
      bpmnFactory
    } = this;
    var actions = {};

    // 追加任务节点
    function appendTask(event, element) {
      console.log(autoPlace)
      if (autoPlace) {
        const shape = elementFactory.createShape({
          type: 'bpmn:Task'
        });
        autoPlace.append(element, shape);
      } else {
        appendTaskStart(event, element);
      }
    }

    function appendTaskStart(event) {
      console.log(event)
      const shape = elementFactory.createShape({
        type: 'bpmn:Task'
      });
      create.start(event, shape, element);
    }

    // 编辑
    function editElement() { // 创建编辑图标
      return {
        group: 'edit',
        className: 'icon-custom icon-custom-edit',
        title: translate('编辑'),
        action: {
          click: function(e) { 
            console.log(element)
          }
        }
      }
    }
    // 删除
    function deleteElement() {
      return {
        group: 'edit',
        className: 'icon-custom icon-custom-delete',
        title: translate('删除'),
        action: {
          click: function(e) {
            modeling.removeElements([element])
          }
        }
      }
    }
    // 点击注释
    function appendAndClickAnnotation(color) {
      return function(event, element) {
        const businessObject = bpmnFactory.create('bpmn:TextAnnotation');
        if (color) {
          businessObject.color = color
        }
        const shape = elementFactory.createShape({
          type: 'bpmn:TextAnnotation',
          businessObject
        });
        autoPlace.append(element, shape);
        console.log(shape)
      }
    }
    // 所有的节点后面都会追加这些
    Object.assign(actions, {
      'append.my-task': {
        group: 'model',
        className: 'icon-custom icon-custom-my',
        title: translate('自定义节点'),
        action: {
          click: appendTask,
          dragstart: appendTaskStart
        }
      },
      'edit': editElement(),
      'delete': deleteElement(),
      'append.text-annotation': {
        group: 'model',
        className: 'bpmn-icon-text-annotation',
        title: '添加自定义text-annotation并能进行跳转',
        action: {
          click: appendAndClickAnnotation
        }
      },
      'append.red-text-annotation': {
        group: 'model',
        className: 'bpmn-icon-text-annotation red-text-annotation',
        title: '红色的注释',
        action: {
          click: appendAndClickAnnotation('red')
        }
      }
    })
    return actions;
  }
}

CustomContextPad.$inject = [
  'config',
  'contextPad',
  'create',
  'elementFactory',
  'injector',
  'translate',
  'modeling',
  'bpmnFactory'
];