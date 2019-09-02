<template>
  <div id="search-bar">
    <div class="dropMenu">
      <div class="drop-title" @click="toggleMenu">
        <span class="drop-name">{{ searchTheme }}</span>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <div class="dropDown" v-show="isShowDrop"  @mouseleave="mouseLeave">
        <button v-for="(item, index) of searchSort" @click="confirmType(index)" :key="index" :class="{active:index===current}">{{ item }}</button>
      </div>
    </div>
    <div class="searchInput">
      <input v-model="searchVal" v-focus="focusState" type="search" maxlength="50" :placeholder="nowType"/>
    </div>
    <div class="serchBtn" @click="toCrm">
      <i class="el-icon-search"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "headerSearch",
    data() {
      return {
        searchTheme: '不限',
        searchSort: ['不限', '客户名称', '客户介绍', '手机号', '邮箱', '公司名称'],
        nowType: '搜索客户',
        isShowDrop: false,
        searchVal: '',
        focusState: false,
        current:0
      }
    },
    methods: {
      toggleMenu() {
        this.isShowDrop = !this.isShowDrop;
        this.focusState = false;
      },
      confirmType(index) {
        this.current = index;
        if (this.searchSort[index] === '不限') {
          this.searchTheme = '不限';
          this.nowType = '搜索客户'
        } else {
          this.searchTheme = this.searchSort[index];
          this.nowType = `请输入${this.searchSort[index]}搜索`
        }
        this.endConfirm()
      },
      endConfirm() {
        this.isShowDrop = !this.isShowDrop;
        this.focusState = true
      },
      mouseLeave(){
        this.isShowDrop = false
      },
      toCrm(){
        let val = this.searchVal.trim();
        let _this = this;
        if(val){
          this.$router.push({
            name : 'waitwork',
            params : {
              type : _this.searchTheme,
              val : _this.searchVal
            }
          })
        }else{
          this.$message({
            message : '请输入搜索内容',
            type : 'warning',
            duration : 1000
          })
        }
      }
    },
    directives: { // 自定义focus指令，让当前元素根据指令的布尔值实现聚焦与否
      focus: function (el, val) {
        if(val.value){
          el.focus();
        }
      }
    }
  }
</script>

<style scoped lang="less">
  #search-bar {
    position: relative;
    z-index: 999;
    width: 90%;
    padding: 10px 15px;
    box-sizing: border-box;
    background-color: rgba(42, 134, 255, 0.89);
    color: #fff;
    border-radius: 2px;
    overflow: hidden;

    .dropMenu {
      width: 100%;
      position: relative;
      z-index: 999;

      .drop-title {
        width: 25%;
        cursor: pointer;
        user-select: none;

        .drop-name {
          display: inline-block;
          width: 55%;
          font-size: 12px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          vertical-align: bottom;
        }
      }

      .dropDown {
        margin-top: 10px;

        button {
          width: 30%;
          height: 32px;
          margin: 10px 1.6% 0;
          padding: 0;
          cursor: pointer;
          background-color: #fff;
          border-radius: 5px;

          &:hover {
            background-color: #f3f3f3;
            color: #1e9fff;
          }

          &.active {
            background-color: #1e9fff;
            color: #fff;
          }
        }
      }
    }

    .searchInput {
      position: absolute;
      top: 10px;
      left: 25%;
      width: 65%;

      input {
        width: 100%;
        background-color: transparent;
        color: #fff;

        &::placeholder {
          color: rgba(255, 255, 255, 0.73);
          font-weight: lighter;
        }
      }
    }

    .serchBtn {
      position: absolute;
      top: 10px;
      left: 90%;
      width: 10%;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
    }
  }
</style>
