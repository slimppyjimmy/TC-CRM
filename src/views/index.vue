<template>
  <el-container>
    <el-header class="header">
      <app-header></app-header>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <aside-home></aside-home>
        <aside-main></aside-main>
      </el-aside>
      <el-container>
        <el-header class="main-head">
          <app-brand-nav></app-brand-nav>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import AppHeader from '../components/header/header'
  import AsideHome from '../components/aside/asideHome'
  import AsideMain from '../components/aside/aside'
  import AppBrandNav from '../components/brand_nav/brand_nav'

  export default {
    name: "index",
    components: {
      AppHeader,
      AsideHome,
      AsideMain,
      AppBrandNav
    }
  }
</script>

<style scoped lang="less">
  .el-container {
    height: 100%;

    .el-header {
      background-color: #1e9fff;
      padding: 0 15px;
    }

    .el-aside {
      position: relative;
      background-color: #989898;
    }

    .main-head {
      background-color: #eceef1;
    }

    .el-main {
      padding:10px;
      overflow-x: hidden;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-track {
        background: rgb(239, 239, 239);
        border-radius: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background: #bfbfbf;
        border-radius: 5px;
        width: 6px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #989898;
        -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1)
      }
    }
  }
</style>
