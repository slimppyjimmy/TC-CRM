<template>
  <ul class="settingList">
    <li v-for="(item, index) of listData" class="setting-item" :class="{last : index === listData.length - 1}">
      <span class="item-name">{{item.name}}</span>
      <span class="item-mark">内置</span>
      <el-switch
        v-model="item.val"
        active-color="#409eff"
        inactive-color="#dcdfe6"
        class="switch"
        :disabled="item.state"
      >
      </el-switch>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "msgSetting",
    data() {
      return {
        listData: [
          {name: '待办任务', val: true, state: false},
          {name: '等待审批', val: true, state: false},
          {name: '到期回款计划', val: true, state: false},
          {name: '系统消息', val: true, state: true},
          {name: '待发货订单', val: true, state: false},
          {name: '待处理开票申请', val: true, state: false},
          {name: '待处理合同申请', val: true, state: false},
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .setting-item {
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #ededed;

    &.last {
      border-bottom: 1px solid #e0e0e0;
    }

    .item-mark {
      display: inline-block;

      height: 20px;
      padding: 2px 5px;
      background-color: #fdf6ec;
      border-radius: 3px;
      color: #efb46f;
      line-height: 20px;
    }

    .el-switch {
      float: right;
      margin-top: 15px;
    }
  }
</style>
