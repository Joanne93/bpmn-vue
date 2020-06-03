// 自定义元素的类型
const customElements = ['bpmn:Task', 'bpmn:StartEvent', 'bpmn:EndEvent', 'bpmn'] 
const customConfig = { // 自定义元素的配置
  'bpmn:StartEvent': {
    // 'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png',
    'url': require('@assets/start.png'),
    'attr': {
      x: 0,
      y: 0,
      width: 48,
      height: 48
    }
  },
  'bpmn:EndEvent': {
    'url': require('@assets/end.png'),
    'attr': {
      x: 0,
      y: 0,
      width: 48,
      height: 48
    }
  },
  'bpmn:Task': {
    'url': require('@assets/task.png'),
    // 'url': require('../../assets/rules.png'),
    // 'url': 'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/start.png',
    'attr': {
      x: 0,
      y: 0,
      width: 48,
      height: 48
    }
  },
}
// const hasLabelElements = ['bpmn:StartEvent', 'bpmn:EndEvent'] // 一开始就有label标签的元素类型
const hasLabelElements = ['bpmn:StartEvent', 'bpmn:EndEvent', 'bpmn:Task'] // 一开始就有label标签的元素类型

export {
  customElements,
  customConfig,
  hasLabelElements
}