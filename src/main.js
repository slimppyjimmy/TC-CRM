// 工具函数引用，并挂在Vue原型上
import tools from './utils/tools'
Vue.prototype.$tool = tools;

//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

// 引入原型方法和公共样式表
import './assets/init.js'
import './assets/reset.css'

// 引入全家桶
import Vue from 'vue'
import store from './store/index'
import router from './router/index'
import App from './App'

// 引入elementUi
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import axios from '@/utils/http'
Vue.prototype.$axios = axios

// 引入Vue全局方法
import globalMethods from './utils/global'
Vue.mixin(globalMethods)

Vue.config.productionTip = false // 关闭生产提示

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


