<template>
  <ul class="userMenu">
    <li class="user-name">
      {{ userName }}
    </li>
    <li v-for="item of items" class="item">
      <router-link to="">
        <i :class="[item.icon,item.class]"></i>
        <span>{{item.name}}</span>
      </router-link>
    </li>
    <li class="exitLogin" @click="exitLogin">
        退出登录
    </li>
    <san-jiao></san-jiao>
  </ul>
</template>

<script>
  import SanJiao from './sanjiao'

  export default {
    name: "userInfoList",
    components :{SanJiao},
    data() {
      return {
        userName: this.$store.state.userInfo.username,
        items: [
          {icon: 'el-icon-star-on', class: 'red', name: '我的关注'},
          {icon: 'el-icon-s-tools', class: 'blue', name: '个人设置'}
        ]
      }
    },
    methods:{
      exitLogin(){
        this.$store.commit('loginExit')
        let _this = this
        setTimeout(function () {
          _this.$router.push('/login')
        },200)

      }
    }
  }
</script>

<style scoped lang="less">
  .userMenu {
    position: absolute;
    z-index: 999;
    top: 60px;
    right: 0;
    width: 200px;
    background-color: #fff;
    color: #424242;
    border: 1px solid rgba(210, 210, 210, 0.5);
    border-radius: 0 0 5px 5px;

    .user-name {
      color: red;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid rgba(210, 210, 210, 0.5);
      text-align: center;
      font-size: 20px;
    }

    .item {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid rgba(210, 210, 210, 0.5);
      a{
        display: block;
        &:hover{
          background-color: #efefef;
        }
      }
      i{
        margin-right: 5px;
        font-size: 16px;
        vertical-align: middle;
      }
    }

    .item a, .exitLogin {
      padding-left: 20px;
    }

    .exitLogin {
      height: 40px;
      line-height: 40px;
      background-color: #1296db;
      border-radius: 0 0 5px 5px;
      color: #fff;
      cursor: pointer;
    }
  }
</style>
