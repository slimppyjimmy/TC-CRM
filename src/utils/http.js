/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import router from '../router/index';
import Qs from 'qs';
import store from '../store/index';
import {Message, Loading} from 'element-ui';

/**
 * 提示函数
 * 禁止点击蒙层、默认3秒后关闭
 */
const tip = (msg, time = 3000, type) => {
  Message({
    message: msg,
    duration: time,
    type: type
  });
}

/**
 * loading画面
 * 禁止点击蒙层、请求数据loading
 */
let loading;

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, errMsg) => {
  // 状态码判断
  switch (status) {
    // 404请求不存在
    case 404:
      tip('请求的资源不存在', 3000, 'error');
      break;
    default:
      tip(errMsg, 3000, 'error');
      break;
  }
}

// 创建axios实例
var instance = axios.create({
  // baseURL : 'https://java.com/',
  timeout: 1000 * 8,
  // transformRequest: [function (data) {
  //   return Qs.stringify(data)
  // }]
});
// 设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.post['Content-Type'] = 'application/json';
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(config => {
    // 开启loading
    loading = Loading.service({
      lock: true,
      fullscreen: true
    });
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(res => {
    // 关闭loading
    loading.close();
    if (res.status === 200) {
      let statusCode = res.data.code;
      switch (statusCode) {
        // 200 请求成功 返回json数据
        case 200:
          return Promise.resolve(res.data);
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
          tip('登录已过期，即将跳转登录页面', 1000, 'wraning');
          store.commit('loginExit');
          setTimeout(() => {
            toLogin();
          }, 1000);
          break;
        default:
          return Promise.resolve(res.data);
      }
    } else {
      return Promise.reject(res)
    }
  }, error => {
    const {response} = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false);
      tip('网络超时，请刷新页面', 0, 'error');
    }
  }
)

export default instance;
