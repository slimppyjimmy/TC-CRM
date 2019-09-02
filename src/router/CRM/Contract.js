import RecordTitle from '../../views/CRM/order/RecordTitle'
import NoPay from '../../views/CRM/order/NoPay'
import OrderToday from '../../views/CRM/order/OrderToday'
import OrderY from '../../views/CRM/order/OrderY'
import YPay from '../../views/CRM/order/YPay'
import AllOrder from '../../views/CRM/order/AllOrder'
//测试
import suc from '../../components/common/successrecord/SuccessRecord'
const routes = [
  {
    path: 'recordtitle',
    name: 'RecordTitle',
    component: RecordTitle,
    children:[
      {
        path: '/',
        name: 'AllOrder',
        component: AllOrder,
      },
      {
        path: '/allorder',
        name: 'AllOrder',
        component: AllOrder,
      },
      {
        path: '/nopy',
        name: 'NoPay',
        component: NoPay,
      },{
        path: '/ordertoday',
        name: 'OrderToday',
        component: OrderToday,
      },{
        path: '/ordery',
        name: 'OrderY',
        component: OrderY,
      },{
        path: '/ypay',
        name: 'YPay',
        component: YPay,
      }
    ]
  },
  {
    path:'suc',
    name:suc,
    component:suc
  }

];

export default routes
