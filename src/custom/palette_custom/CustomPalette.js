/**
 * src\lib\features\palette\PaletteProvider.js
 * 自定义左侧工具栏
 */
export default function PaletteProvider(palette, create, elementFactory, globalConnect, bpmnFactory, translate) {
  this.create = create
  this.elementFactory = elementFactory
  this.globalConnect = globalConnect
  this.bpmnFactory = bpmnFactory
  this.translate = translate

  palette.registerProvider(this)
}

// 注入
PaletteProvider.$inject = [
  'palette',
  'create',
  'elementFactory',
  'globalConnect',
  'bpmnFactory',
  'translate'
]

PaletteProvider.prototype.getPaletteEntries = function(element) {
  const {
    create,
    elementFactory,
    globalConnect,
    bpmnFactory,
    translate
  } = this;
  let actions = {};

  // 左侧工具栏中图标点击和拖拽事件
  function createTask() {
    return function(event) {
      const businessObject = bpmnFactory.create('bpmn:Task');
      businessObject['custom'] = 1
      const shape = elementFactory.createShape({
        type: 'bpmn:Task',
        businessObject
      });
      // 只在拖动或者点击时触发
      create.start(event, shape);
    }
  }

  function createAction(type, group, className, title, options) {
    function createListener(event) {
      var shape = elementFactory.createShape(Object.assign({
        type: type
      }, options));
      if (options) {
        shape.businessObject.di.isExpanded = options.isExpanded;
      }
      create.start(event, shape);
    }
    var shortType = type.replace(/^bpmn:/, '');
    return {
      // 元素类型
      group: group,
      // 样式
      className: className,
      // 标题
      title: title || translate('Create {type}', {
        type: shortType
      }),
      // 事件
      action: {
        dragstart: createListener,
        click: createListener
      }
    };
  }

  Object.assign(actions, {
    // 开始节点
    'create.start-event': createAction(
      'bpmn:StartEvent', 'event', 'icon-custom icon-custom-start iconfont icon-_GJZkaishi',
      translate('Create StartEvent')
    ),
    // 结束节点
    'create.end-event': createAction(
      'bpmn:EndEvent', 'event', 'icon-custom icon-custom-end iconfont icon-_GJZjieshu',
      translate('Create EndEvent')
    ),
    // 转移线
    'global-connect-tool': {
      group: 'tools',
      className: 'icon-custom icon-custom-connect iconfont icon-_GJZzhuanyixian1',
      title: translate('Activate the global connect tool'),
      action: {
        click: function(event) {
          globalConnect.toggle(event);
        }
      }
    },
    // 人工节点
    'create.custom_task': createAction(
      'bpmn:Task', 'activity', 'icon-custom icon-custom-task iconfont icon-_GJZrengong1',
      translate('Create Task')
    ),
    // 自定义节点
    'create.my-task': {
      group: 'model',
      className: 'icon-custom icon-custom-my',
      title: translate('自定义节点'),
      action: {
        dragstart: createTask(),
        click: createTask()
      }
    }
  })

  return actions;
}