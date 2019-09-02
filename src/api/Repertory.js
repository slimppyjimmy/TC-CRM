
/**
 * login模块接口列表
 */

import axios from '@/utils/http'; // 导入http中创建的axios实例

const api = {
  // // get请求不带参数
  // articleList() {
  //   return axios.get(`/api/`);
  // },
  // // get请求带参数
  // articleDetail(params) {
  //   return axios.get('/api/', {
  //     params: params
  //   })
  // },
  // post提交
  // login(params) {
  //   return axios.post('/api/shop', params);
  // }

  getText(params){
    return axios.get('/yk/findAll',{
      params: params
    })
  },

  getList(params){
    return axios.get('/yk/findAllIn',{
      params: params
    })
  },

  getItem(params){
    return axios.get('/yk/findAllOut',{
      params: params
    })
  },
  getParticulars(params) {
    return axios.get('/yk/details',{
      params: params
    })
  }
  // 其他接口…………
};

export default api;
