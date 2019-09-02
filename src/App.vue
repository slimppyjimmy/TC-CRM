<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less">
  .el-loading-mask.is-fullscreen {
    background: rgba(0, 0, 0, .2);

    .el-loading-spinner {
      .circular {
        width: 40px;

        .path {
          stroke: #424242;
        }
      }
    }
  }
  .red{
    color: #cb2b2f;
  }
  .blue{
    color: #1296db;
  }

  .self_tips{
    font-size: 20px;
    i{
      margin-right: 5px;
    }
  }

</style>
