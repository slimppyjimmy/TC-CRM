import Department from '../views/more/department'
import Role from '../views/more/role'

let routers = [
  {
    path: 'department',
    name: 'department',
    meta: {
      title1: '更多',
      title2: '部门与员工'
    },
    component: Department
  },
  {
    path: 'role',
    name: 'role',
    meta: {
      title1: '更多',
      title2: '职位与权限'
    },
    component: Role
  }
];


export default routers
