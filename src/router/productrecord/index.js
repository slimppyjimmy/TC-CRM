import ProductControl from './ProductControl'
import ProductHistory from './ProductHistory'
import WarehouseControl from './WarehouseControl'
import WaitSend from './WaitSend'
let routers= [
  ...ProductControl,
  ...ProductHistory,
  ...WarehouseControl,
  ...WaitSend
]


export default routers
