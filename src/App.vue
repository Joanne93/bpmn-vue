<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Bpmn></Bpmn>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Bpmn from './components/Bpmn11.vue'
// import './assets/diagram-js.css'
// import './assets/bpmn-font/css/bpmn.css'
// import './assets/bpmn-font/css/bpmn-codes.css'
// import './assets/bpmn-font/css/bpmn-embedded.css'

export default {
  name: 'App',
  components: {
    Bpmn
  }
}
</script>

<style>
html,body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
