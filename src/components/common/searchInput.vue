<template>
  <el-input
    :placeholder="sort"
    v-model="inputVal"
    type = "search"
  >
  </el-input>
</template>

<script>
  export default {
    name: "search",
    props: ['sort'],
    data : function () {
      return {
        inputVal : ''
      }
    }
  }
</script>

<style scoped>
  .el-input{
    width: 100%;
  }
</style>
