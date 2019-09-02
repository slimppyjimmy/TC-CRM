import ProductControl from "../../views/productrecord/ProductControl";
import Finance from '../../views/finance/finance'
import ProductControlList from "../../views/productrecord/ProductControlList";
let routers= [
  {
    path: 'ProductControl',
    redirect : '/ProductControl/ProductControlList',
    name: 'ProductControl',
    component: ProductControl,
    meta: {
      title1: '库存',
      title2: '产品管理'
    },
    children : [
      {
        path : 'checkProduct',
        name : 'checkProduct',
        component: Finance,
        meta: {
          title1: '库存',
          title2: '产品管理'
        }
      },
      {
        path : 'ProductControlList',
        name : 'ProductControlList',
        component: ProductControlList,
        meta: {
          title1: '库存',
          title2: '产品管理'
        }
      }
    ]
  }
]
export default routers
