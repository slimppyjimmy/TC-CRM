/**
 * login模块接口列表
 */


import axios from '@/utils/http'; // 导入http中创建的axios实例
const login = {
  // // get请求不带参数
  // getAlldata() {
  //   return axios.get(`/lsx/getAll`)
  // },
  // get请求带参数
  // articleDetail(params) {
  //   return axios.get('/api/', {
  //     params: params
  //   })
  // },
  // post提交
  // login(params) {
  //   return axios.post('/api/shop', params);
  // }

  /*获取热销商品*/
  getHotShop(){
    return axios.get('/lsx/goodsManage/findJiangXuByNumber').then(res=>{
      let data = res.data.list;
      // console.log(data);
      let hotArr = [];
      hotArr = data.map(item=>{
        return {
          name: item.goodsName,
          count:item.dealNumber
        }
      });
      hotArr.length = 10;
      return hotArr
    })
  },


  /*获取滞销商品*/
  getLowShop(){
    return axios.get('/lsx/goodsManage/findShengXuByNumber').then(res=>{
      let data = res.data.list;
      // console.log(data);
      let lowArr = [];
      lowArr = data.map(item=>{
        return {
          name: item.goodsName,
          count:item.dealNumber
        }
      });
      lowArr.length = 10;
      return lowArr
    })
  },

  /*各分类商品的占比*/
  getTypeCount(){
    return axios.get('/lsx/goodsManage/findShengXuByGoodsType').then(res=>{
      let data = res.data;
      console.log(data)
      let proportion = [];
      proportion = data.map(item=>{
        return {
          name : item.goodstypeName,
          value:item.dealNumber
        }
      });
      return proportion
    })
  },

  /*获取销量*/
  getSales(params){
    return axios.get('/lsxlsx/order/allDeal',{
      params : params
    }).then(res=>{
      let data = res.data;
      console.log(data)
      let proportion = [];
      proportion = data.map(item=>{
        return {
          name : item.goodstypeName,
          value:item.dealNumber
        }
      });
      return proportion
    })
  }

  // 其他接口…………
};

export default login;



