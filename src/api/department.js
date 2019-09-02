/**
 * 部门与员工模块接口列表
 */

import axios from '@/utils/http'; // 导入http中创建的axios实例
/**
 * 实现前端分页，将数组处理成二维数组
 * @return {Array}
 */
function pageData(arr,count) {
  let len = arr.length,
    pageArr = [],
    index = 0;
  while (index < len){
    pageArr.push(arr.slice(index,index+=count))
  }
  return pageArr
}

const api = {
  addUser(params){
    return axios.post('/tyx/user',params)
  },
  getDepartment(){
    return axios.get('/tyx/department').then(res => {

      let newUser = [];
      res['data'].forEach(item => {
        let user = item.users;

        for(let i = 0; i < user.length ; i++){

          let tempUser = {
            depId : item.id,
            pId: item.parentId,
            depName : item.departmentName,
            id : user[i].id,
            email : user[i].email,
            name : user[i].name,
            username : user[i].username,
            phone : user[i].phone,
            pic : user[i].pic,
            roleId : user[i].role.id,
            roleName : user[i].role.roleName,
          }
          newUser.push(tempUser)
        }
      });

      let userPageData = pageData(newUser,3);

      let oldData = res['data'].map(item => {
        return {
          label : item.departmentName,
          id : item.id,
          parentId : item.parentId,
          children : []
        }
      })

      let depData = oldData.filter(item => {
        return !item.parentId
      })

      depData.forEach(item => {
        oldData.forEach(son => {
          if(son.parentId === item.id){
            item.children.push(son)
          }
        })
      })

      return {
        depData,
        newUser,
        userPageData
      }
    })


  }


  // 其他接口…………
};

export default api;
