import WaitSend from "../../views/productrecord/WaitSend";
import send1 from "../../views/productrecord/waitsend/send1";
import send2 from "../../views/productrecord/waitsend/send2";
import send3 from "../../views/productrecord/waitsend/send3";


let routers= [
    {
      path: 'WaitSend',
      name: 'WaitSend',
      component: WaitSend,
      meta: {
        title1: '库存',
        title2: '待发货记录'
      },
      children: [
        {
          path: '/send1',
          name : 'send1',
          component: send1,
          meta: {
            title1: '库存',
            title2: '待发货记录'
          }
        },
        {
          path: '/send2',
          name: 'send2',
          component: send2,
          meta: {
            title1: '库存',
            title2: '待发货记录'
          }
        },
        {
          path: '/send3',
          name : 'send3',
          component: send3,
          meta: {
            title1: '库存',
            title2: '待发货记录'
          }
        }
        ]
    },

    ]


export default routers
