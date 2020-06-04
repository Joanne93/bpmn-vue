import Vue from 'vue'
import App from './App.vue'
// import x2js from 'x2js' //xml数据处理插件
// Vue.prototype.$x2js = new x2js() //创建x2js对象，挂到vue原型上

Vue.config.productionTip = false

import 'bpmn-js/dist/assets/diagram-js.css' // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
// import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css' // 右边工具栏样式

// 
import './assets/icon/icon.css'
import './assets/icon/iconfont.css'
import './assets/icon/iconfont'


import './main.less'
new Vue({
  render: h => h(App),
}).$mount('#app')
