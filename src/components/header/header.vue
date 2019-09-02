<template>
  <el-row>
    <el-col :span="2">
      <h3 class="logoName">
        <img src="static/images/title.png" alt="">
      </h3>
    </el-col>
    <el-col :span="8" :offset="6">
      <head-search style="margin-top: 10px;"></head-search>
    </el-col>
    <el-col :span="2" :offset="3">
      <div class="all-options" @mouseenter="showOpt" @mouseleave="hideOpt">
        <div class="opt-tags">
          <span class="el-icon-menu"></span>
          <span>全部功能</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <all-options v-show="isOptMenu"></all-options>
      </div>
    </el-col>
    <el-col :span="1">
      <div class="msgInSide" @mouseenter="msgShow" @mouseleave="msgHide">
        <i class="el-icon-message-solid"></i>
        <div class="msg-drop" v-show="isMsgMenu" @click="msgSetting = true">
          <i class="el-icon-setting"></i>
          <span>自定义</span>
          <san-jiao></san-jiao>
        </div>
      </div>
      <el-dialog title="消息提醒设置" :visible.sync="msgSetting" top="20px">
        <msg-setting></msg-setting>
        <div slot="footer" class="dialog-footer">
          <el-button @click="msgSetting = false">保 存</el-button>
          <el-button type="primary" @click="msgSetting = false">关 闭</el-button>
        </div>
      </el-dialog>
    </el-col>
    <el-col :span="2">
      <div class="userModule" @mouseenter="showUserMenu" @mouseleave="hideUserMenu">
        <div class="userInfo">
          <el-avatar shape="circle" size="small" fit="contain" :src="imgSrc" v-if="imgSrc"></el-avatar>
          <el-avatar shape="circle" size="small" icon="el-icon-user-solid" v-else></el-avatar>
          <span class="userName">{{userName}}</span>
          <span class="el-icon-caret-bottom"></span>
        </div>
        <user-info-list v-show="isUserMenu"></user-info-list>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import HeadSearch from './headerSearch'
  import AllOptions from './allOptions'
  import UserInfoList from './userInfoList'
  import SanJiao from './sanjiao'
  import MsgSetting from './msgSetting'

  export default {
    name: "Header",
    components: {HeadSearch, AllOptions, UserInfoList, SanJiao, MsgSetting},
    data: function () {
      return {
        msgSetting :false,
        isOptMenu: false,
        isMsgMenu: false,
        isUserMenu: false,
        imgSrc: '../../../static/images/user.jpg',
        userName: this.$store.state.userInfo.username
      }
    },
    methods: {
      showOpt() {
        this.isOptMenu = true
      },
      hideOpt() {
        this.isOptMenu = false
      },
      msgShow() {
        this.isMsgMenu = true
      },
      msgHide() {
        this.isMsgMenu = false
      },
      showUserMenu() {
        this.isUserMenu = true
      },
      hideUserMenu() {
        this.isUserMenu = false
      },
    }
  }
</script>

<style scoped lang="less">
  .el-col {
    height: 60px;
    color: #fff;
  }

  .msgInSide {
    position: relative;
    text-align: center;
    cursor: pointer;


    .el-icon-message-solid {
      display: block;
      line-height: 60px;
      font-size: 18px;
    }

    .msg-drop {
      position: absolute;
      top: 60px;
      right: 0;
      width: 100px;
      background-color: #fff;
      color: #424242;
      font-size: 12px;
      padding: 10px 10px;
      border-radius: 0 0 5px 5px;
      text-align: left;
      border: 1px solid rgba(210, 210, 210, 0.5);

      &:hover {
        background-color: #f1f1f1;

        span {
          color: #1296db;
        }
      }

      .el-icon-setting {
        color: #1296db;
        font-size: 16px;
        vertical-align: top;
        margin-right: 8px;
      }
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.22);
    }

  }

  .logoName {
    color: #fff;
    font-size: 19px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 60px;
  }

  .all-options {
    position: relative;
    width: 100%;

    .opt-tags {
      color: #fff;
      cursor: pointer;
      line-height: 60px;
      text-align: center;

      &:hover {
        background-color: rgba(255, 255, 255, 0.22);
      }
    }
  }

  .userModule {
    position: relative;
    .userInfo {
      position: relative;
      line-height: 60px;
      text-align: center;
      cursor: pointer;

      .userName {
        display: inline-block;
        max-width: 40px;
        overflow: hidden;
        margin: 0 2px;
        white-space: nowrap;
        text-overflow: ellipsis;
        vertical-align: middle;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.22);
      }

      .el-avatar {
        vertical-align: middle;
      }
    }
  }

</style>
