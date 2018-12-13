// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import elementui from 'element-ui'
import echarts from 'echarts'
import chinaJson from 'echarts/map/json/china.json'
import domain from './domain.js';

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(elementui)
Vue.prototype.$echarts = echarts 
echarts.registerMap('china', chinaJson)
global.domain = domain

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
