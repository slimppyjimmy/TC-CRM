
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

  outList(params){

    return axios.get('/mqy/outGoods/list',{
      params:params

    })
      // .then(res=>{

    //   // let arr = res.data.list
    //   // arr.forEach(item =>{
    //   //   let newObj = {};
    //   //   let oldObj = item.goodOrders[0]
    //   //   for(let key in oldObj){
    //   //     newObj[key] = oldObj[key]
    //   //   }
    //   //   Object.assign(item,newObj)
    //   // })
    //   // return arr
    // })
  },



  // 其他接口…………
}

export default api;
