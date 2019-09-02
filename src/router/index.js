import Vue from 'vue'
import Router from 'vue-router'

// product系列
import Productrecord from './productrecord/index'

// CRM系列
import Contact from './CRM/contact'
import Firm from './CRM/firm'
import Contract from './CRM/Contract'

import AllInfore from './ALLinfore/AllInfore'
import Repertory from './Repertory'
import Home from './Home'
import More from './more'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

import Login from '../views/login'
import Index from '../views/index'
import Error from '../views/error'

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter:(to, from, next) => {
        sessionStorage.getItem('isLogin') ? next(from.fullPath) : next();
      },
      meta: {
        title1: '',
        title2:'请登录'
      }
    },
    {
      path: '/',
      redirect : 'home',
      name: 'index',
      component: Index,
      beforeEnter: (to, from, next) => {
        sessionStorage.getItem('isLogin') ? next() : next('/login');
      },
      children: [
        ...Home,
        ...More,
        ...Productrecord,
        ...Contact,
        ...Repertory,
        ...AllInfore,
        ...Contract,
        ...Firm
      ]
    },

    // 如果前面的配置，都没有匹配成功 ，则使用一个修饰符 “*”，处理404页面
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from, next) => {
  if(to.meta.title2){
    document.title = to.meta.title2+'--客户无忧CRM系统';
  }
})
router.beforeResolve((to, from, next) => {
  next()
})

export default router
