<template>
  <div class="error">
    <h1>404错误</h1>
    <h2>----------- SORRY，找不到你搜索的页面！-----------</h2>
  </div>
</template>

<script>
  import api from './../api/login'
  export default {
    name: "Error"
  }
</script>

<style scoped>
  h1 {
    margin-top: 100px;
    text-align: center;
    color: #565656;
    letter-spacing: 2px;
  }

  h2 {
    margin-top: 10px;
    color: #919191;
    text-align: center;
  }
</style>
