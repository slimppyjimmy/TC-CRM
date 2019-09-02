<template>
  <div class="aside-main" :style="{'height' : height}">

    <el-menu :collapse="isCollapse"
             class="el-menu-vertical-demo"
             background-color="#323a45"
             text-color="#fff"
             :style="'height:'+height"
             :default-active="this.$route.path"
             router
    >
      <div v-if="navData.length"></div>
      <el-submenu  v-for="(item,index) of navData" :key="item.id" :index="String(index)">
        <template slot="title">
          <i :class="[item.first.icon]"></i>
          <span slot="title">{{item.first.accessName}}</span>
        </template>
        <div v-if="item.second.length">
          <el-menu-item-group>
            <el-menu-item :index="son.frontEndUrl"
                          :key="son.id"
                          v-for="son of item.second">
              <i :class="[son.icon]" class="sub-icon"></i>
              {{son.accessName}}
            </el-menu-item>
          </el-menu-item-group>
        </div>
      </el-submenu>
    </el-menu>


    <div class="aside-bottom">
      <div class="aside-icons">
        <span class="el-icon-s-fold" @click="openOrHide"></span>
        <span class="el-icon-headset" v-show="!isCollapse"></span>
        <span class="el-icon-mobile-phone" v-show="!isCollapse"></span>
        <span class="el-icon-price-tag" v-show="!isCollapse"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Aside",
    data() {
      return {
        height: '',
        isCollapse: false,
      }
    },
    computed: {
      navData() {
        return this.$store.state.menuInfo
      },

    },
    methods: {
      openOrHide() {
        this.isCollapse = !this.isCollapse
      },
      onRouterChange(){
        this.path = this.$route.fullPath
      }
    },
    created() {
      this.height = this.$tool.getViewHeight() - 160 + 'px'
    }
  }
</script>

<style scoped lang="less">
  .aside-main {
    .aside-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50px;
      background-color: #37424f;

      .aside-icons {
        width: 80%;
        margin: auto;

        span {
          display: block;
          float: left;
          width: 25%;
          text-align: center;
          line-height: 50px;
          font-size: 20px;
          color: #c5c5c5;
          cursor: pointer;

          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
  .el-menu-item.is-active{
    background: #1e9fff!important;
    color: #fff;
  }
  .el-menu-item{
    i{
      margin-right: 5px;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: rgb(50, 58, 69);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(193, 193, 193, 0.53);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #989898;
      -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1)
    }
  }
</style>
