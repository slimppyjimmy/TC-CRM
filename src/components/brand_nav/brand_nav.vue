<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">
      <i class="el-icon-s-home"></i>
    </el-breadcrumb-item>
    <div v-if="firstTitle">
      <el-breadcrumb-item>{{ firstTitle }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ nowTitle }}</el-breadcrumb-item>
    </div>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: "brand_nav",
    data() {
      return {}
    },
    computed: {
      firstTitle() {
        return this.$route.meta.title1
      },
      nowTitle() {
        return this.$route.meta.title2
      },
    }
  }
</script>

<style scoped lang="less">
  .el-breadcrumb {
    i {
      color: #3cc8ff;
      font-size: 30px;
      transform: translateY(4px);

      &:hover {
        color: #1e9fff;
      }
    }

    line-height: 60px;
  }
</style>
