<template>
  <div class="all-options-menu" v-if="menuData" :style="'max-height:'+ height">
    <div class="clearfix module"
         v-for="(item, index) of menuData"
         :key="index">
      <div class="opt-head" :class="{first:index === 0}">
        <span class="opt-line"></span>
        <div class="opt-title">
          {{item.first.accessName}}
        </div>
      </div>
      <div v-for="item_item of item.second" class="item">
        <router-link :to="item_item.frontEndUrl" active-class="active" exact>
          <i :class="[item_item.icon]"></i>
          <span>{{item_item.accessName}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "allOptions",
    data() {
      return {
        height: ''
      }
    },
    computed: {
      ...mapState({
        menuData() {
          return this.$store.state.menuInfo
        }
      })
    },
    created() {
      this.height = this.$tool.getViewHeight() - 70 + 'px'
    }
  }
</script>

<style scoped lang="less">
  .all-options-menu {
    position: absolute;
    top: 60px;
    right: 0;
    z-index: 10;
    width: 400px;
    padding: 20px;
    border: 1px solid rgba(210, 210, 210, 0.5);
    box-sizing: border-box;
    border-radius: 0 0 5px 5px;
    background-color: #fff;
    overflow-y: auto;
    font-size: 12px;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: rgb(239, 239, 239);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: #bfbfbf;
      border-radius: 10px;
      width: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #989898;
      -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1)
    }

    .active{
      color: #1e9fff;
      font-weight: 900;
    }
    .module {
      position: relative;

      .opt-head {
        margin: 8px 0;

        &.first{
          margin-top: 0;
        }

        .opt-line {
          display: inline-block;
          width: 100%;
          height: 1px;
          background-color: rgba(152, 152, 152, 0.48);
        }

        .opt-title {
          position: absolute;
          top: 1px;
          margin-left: 10px;
          padding: 0 10px;
          background: #fff;
          font-size: 14px;
          color: #989898;
        }
      }


      .item {
        float: left;
        width: 40%;
        box-sizing: border-box;
        text-align: left;
        margin: 6px 0;
        color: #424242;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        &:nth-of-type(3n+1) {
          width: 20%;
        }

        &:hover {
          a {
            color: #1e9fff;
          }
        }

        i {
          font-weight: 900;
          margin-right: 5px;
        }
      }

      .otherItem{
        cursor: pointer;
        &:hover {
            color: #3989cf;
        }
        &:nth-of-type(3n){
          width: 20%;
        }
        &:nth-of-type(3n+1){
          width: 40%;
        }
      }
    }
  }
</style>
