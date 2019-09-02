
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
  waitList(params){
    return axios.get('/mqy/order/outList',{
      params:params
    }).then(res => {
      console.log(res.data)
      // console.log(res.data.list)
      // return res
      let arr = res.data.list
      arr.forEach(item =>{
        let newObj = {};
        let oldObj = item.goodOrders[0]
        for(let key in oldObj){
          newObj[key] = oldObj[key]
        }
        Object.assign(item,newObj)
      })
      return arr
    })

  },
  //搜索-------------
  selectgoods(params){
    console.log(params)
    return axios.get('/mqy/order/search',{
      params:params
    })

  }


  // 其他接口…………
}

export default api;
