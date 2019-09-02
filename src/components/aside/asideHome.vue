<template>
  <div class="aside-home">
    <div class="home-icon">
      <router-link to="/home" active-class="active">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "asideHome"
  }
</script>

<style scoped lang="less">
  .aside-home {
    height: 40px;
    padding: 5px;
    background-color: #37424f;

    .active{
      background-color: #1e9fff;
      border-radius: 5px;
    }

    .home-icon {
      height: 40px;
      background-color: #2b333e;
      border-radius: 5px;
      text-align: center;
      line-height: 40px;

      &:hover {
        background-color: #1e9fff;
      }

      a {
        display: block;
        height: 100%;
        color: #ffffff;
        font-size: 16px;

        i {
          font-size: 16px;
        }

        span{
          font-size: 14px;
        }
      }
    }
  }
</style>
