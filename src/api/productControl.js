/**
 * login模块接口列表
 */

import axios from '@/utils/http'; // 导入http中创建的axios实例

const api = {
  //请求所有数据进行渲染
  getProductList(params){

    return axios.get('/dyl/goodsManage/findAll?page='+params.page+'&pageSize='+params.pageSize)

  },
  deleteProductList(params){
    return axios.post('/dyl/goodsManage/deleteGoods?goodsId='+params)
  },


  searchProduct(params){
    console.log(params)
    return axios.post('/dyl/goodsManage/findGoodsByNameAndTime',params)
  },

  getkind(){
    // console.log(params)
    return axios.post('/dyl/goodsManage/findAllGoodsTypeName')
  }


}

export default api;



