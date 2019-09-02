import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//2.创建一个State:
const state = {
  userInfo: Boolean(sessionStorage.getItem('userInfo'))
    ? JSON.parse(sessionStorage.getItem('userInfo'))
    : {},
  menuInfo: Boolean(sessionStorage.getItem('menuInfo'))
    ? JSON.parse(sessionStorage.getItem('menuInfo'))
    : {},
  token : Boolean(sessionStorage.getItem('token'))
    ? JSON.parse(sessionStorage.getItem('token'))
    : '',
  role:Boolean(sessionStorage.getItem('role'))
    ? JSON.parse(sessionStorage.getItem('role'))
    : {},
}

//3. 创建Mutations ,
const mutations = {
  loginSuccess(state, data) {
    state.userInfo = data.userInfo;
    state.menuInfo = data.menuInfo;
    state.token = data.token;
    state.role = data.role;
    sessionStorage.setItem('userInfo', JSON.stringify(data.userInfo))
    sessionStorage.setItem('menuInfo', JSON.stringify(data.menuInfo))
    sessionStorage.setItem('token', JSON.stringify(data.token))
    sessionStorage.setItem('role', JSON.stringify(data.role))
    sessionStorage.setItem('isLogin', true)
  },
  loginExit(state, data) {
    state.userInfo = {};
    state.menuInfo = {};
    sessionStorage.removeItem('userInfo');
    sessionStorage.removeItem('menuInfo');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('isLogin');
  }
}


//4. 创建Actions:
const actions = {
  // 可以执行异步的操作
  // 在方法中，要注入一个context参数，相当于是$store,但又不是$store本身。因此，也可以用｛commit｝来替代。
  fn(context, payLoad) {

    context.commit('increaseSync', payLoad)
  }

}

// 5.创建Getter:相当于组件中的计算属性
const getters = {
  getUserInfo(state){
    return state.userInfo
  },
  getMenuInfo(state){
    return state.menuInfo
  }
}

//6. 公开一个对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
