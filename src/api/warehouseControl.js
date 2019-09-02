/**
 * login模块接口列表
 */

import axios from '@/utils/http'; // 导入http中创建的axios实例

const api = {
  //请求数据渲染页面
  getWarehouseList(){
    // console.log()
    return axios.post('/dyll/warehouse/list')
  },
  // 新建仓库
  addWarehouse(params){
    return axios.post('/dyll/warehouse/add',params)
  },

  // 修改仓库
  changeWarehouse(params){
    return axios.post('/dyll/warehouse/update',params)
  },
  //删除仓库
  deleteWarehouse(params){
    console.log(params)
    return axios.post('/dyll/warehouse/delete',params)
  },
  //查询仓库
  searchWarehouse(params){
    // console.log(params)
    return axios.post('/dyll/warehouse/search',params)
  },


  // 其他接口…………
}

export default api;



