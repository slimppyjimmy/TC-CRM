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

  sendData(params){
    return axios.post('/qs/InStorageSave',params)
  },

  checkGoodsInfo(params){
    return axios.get(`/qs/findByGoodsId?goodsId=1`)
  }


  // 其他接口…………
}

export default api;



