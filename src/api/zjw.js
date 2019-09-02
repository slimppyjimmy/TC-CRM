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

  //   login(params){
  //     return axios.post('/api/login',params)
  //   },
  // 个人客户api
  getCustomer(params) {
    return axios.post('/java/perKh/perKhList/' + params.page + '/' + params.pagesize, params)
  },
  sendData(params) {
    return axios.post('/java/perKh/addPerKh', params)
  },
  delete(params) {
    return axios.post('/java/perKh/delPerKhs/' + params, )
  },
  edit(params) {
    return axios.post('/java/perKh/updatePerKh', params)
  },
  dellAll(params) {
    return axios.post('/java/perKh//perKh/delPerKhs/' + params, params)
  },
  // 企业客户api
  firmgetdata(params) {
    console.log(111)
    return axios.post('/java/comKh/comKhList/' + params.page + '/' + params.pagesize, params)
  },
  firmsendData(params){
    return axios.post('/java/comKh/addComKh', params)
  },
  firmedit(params){
    return axios.post('/java/comKh/updateComKh', params)
  },
  firmdelete(params) {
    return axios.post('/java/comKh/delComKhs/' + params, )
  },
  firmdellAll(params) {
    console.log(params)
    return axios.post('/java/comKh/delComKhs/'+ params , params)
  },






  // 其他接口…………
}

export default api;
