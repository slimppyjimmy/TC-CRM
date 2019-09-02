import AllInfore from '../../components/common/AllInfore'
import GeRen from '../../views/MyNes/GeRen'
import MiMa from '../../views/MyNes/MiMa'



let routers = [
  {
    path: 'AllInfore',
    name: 'AllInfore',
    meta: {
      title1: '更多',
      title2: '个人设置'
    },
    component: AllInfore,
    children:[{
      path: 'GeRen',
      name: 'GeRen',
      component: GeRen,
      meta: {
        title1: '更多',
        title2: '个人设置'
      }
    },
      {
        path: 'MiMa',
        name: 'MiMa',
        component: MiMa,
        meta: {
          title1: '更多',
          title2: '个人设置'
        }
      }
    ]
  }
  ]
export default routers
