import ProductHistory from "../../views/productrecord/ProductHistory";
import history1 from "../../views/productrecord/producthistory/history1";
import history2 from "../../views/productrecord/producthistory/history2";
import history3 from "../../views/productrecord/producthistory/history3";
import history4 from "../../views/productrecord/producthistory/history4";
import history5 from "../../views/productrecord/producthistory/history5";

let routers= [
  {
    path: 'ProductHistory',
    name: 'ProductHistory',
    component: ProductHistory,
    meta: {
      title1: '库存',
      title2: '发货记录'
    },
    children: [
      {
        path: '/history1',
        name : 'history1',
        component: history1,
        meta: {
          title1: '库存',
          title2: '发货记录'
        }
      },
      {
        path: '/history2',
        name: 'history2',
        component: history2,
        meta: {
          title1: '库存',
          title2: '发货记录'
        }
      },
      {
        path: '/history3',
        name : 'history3',
        component: history3,
        meta: {
          title1: '库存',
          title2: '发货记录'
        }
      }
      ,
      {
        path: '/history4',
        name: 'history4',
        component: history4,
        meta: {
          title1: '库存',
          title2: '发货记录'
        }
      },
      {
        path: '/history5',
        name : 'history5',
        component: history5,
        meta: {
          title1: '库存',
          title2: '发货记录'
        }
      }
    ]
  },

]


export default routers
