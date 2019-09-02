/**
 * login模块接口列表
 */

import axios from '@/utils/http'; // 导入http中创建的axios实例

const api = {
  login(params){
    return axios.post('/tyx/login',params).then(res => {
      console.log(res)
      let data = res.data;
      let user = data['user'];
      let oldMenu = data.user.role.accesses;
      let oldRole = data.user.role;
      let loginUser = {};
      let role = {};
      let userInfo = {};
      let menu = {};

      // 重构userInfo数据
      for (let key in user) {
        userInfo[key] = user[key]
      }
      // 重构menuInfo数据
      menu = oldMenu.map(item => {
        if (!item['parentId']) {
          return {
            first: item,
          }
        }
      })

      menu = [...new Set(menu)]
      menu.splice(0, 1)

      menu.forEach(item => {
        item.second = []
      })
      menu.forEach(cur => {
        oldMenu.forEach(item => {
          if(item.parentId == cur.first['id']){
            cur.second.push(item)
          }
        })
      })

      // 重构role数据
      for(let key in oldRole){
        if(key != 'accesses'){
          role[key] = oldRole[key]
        }
      }

      loginUser.userInfo = userInfo;
      loginUser.menuInfo = menu
      loginUser.role = role
      loginUser.token = data.token

      res.data=loginUser

      return res
    })
  }


  // 其他接口…………
}

export default api;



