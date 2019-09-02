/**
 * login模块接口列表
 */

import axios from '@/utils/http'; // 导入http中创建的axios实例
import  qs from 'qs'
const api = {

  getinfo(params){
    return axios.get('/zzw/goodsManage/findGoodsById',{
      params : params
    })
  },

  getreturn(params){
    return axios.post('/zzw/goodsManage/insertGoods', params)
  },

  getqwe(params){
    return axios.put('/zzw/goodsManage/updateGoods',params)
  },

  getid(params){
    return axios.get('/zzw/goodsManage/findAllGoodsTypeName',{
      params : params
    })
  },



}

export default api;


