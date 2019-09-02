/**
 * login模块接口列表
 */

import axios from '@/utils/http'; // 导入http中创建的axios实例
const api = 'api';
const test = {
  getGoods(){
    return axios.get(`/${api}/getGoods`).then(res => {
      let arr = res.data.map(item => {
        return {
          img : '../../static/images/logo.png',
          name : item.goodsName,
          type : item.type,
          id:item.goodsId
        }
      })
      return arr;
    })
  },
  getTypes(){
    return axios.get(`/${api}/getTypes`).then(res => {
      let arr = res.data.map(item => {
        return {
          value : item,
          label : item
        }
      })
      return arr;
    })
  }


  // 其他接口…………
}

export default test;
