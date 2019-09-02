<template>
  <div>
    <el-container>
      <el-row style="width: 100%;">
        <el-col :span="24" class="user-mbx">
          <el-breadcrumb separator-class="el-icon-arrow-right mbx" style="margin-left: 5px">
            <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home mbx"></i></el-breadcrumb-item>
            <el-breadcrumb-item class="mbx">CRM</el-breadcrumb-item>
            <el-breadcrumb-item class="mbx">报价单</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="24" style="height: 38px">
          <div class="page_date">
            <ul>
              <router-link tag="li" to="quotationlist">
                <div @click="showCount($event)">全部<span class="show-count">(0)</span></div>
              </router-link>
              <router-link tag="li" to="quotationlist">
                <div @click="showCount($event)">今天成交的<span class="show-count">(0)</span></div>
              </router-link>
              <router-link tag="li" to="quotationlist">
                <div @click="showCount($event)">昨天成交的<span class="show-count">(0)</span></div>
              </router-link>
              <router-link tag="li" to="quotationlist">
                <div @click="showCount($event)">未付款<span class="show-count">(0)</span></div>
              </router-link>
              <router-link tag="li" to="quotationlist">
                <div @click="showCount($event)" style="font-size: 12px;margin-top: -2px"><i class="el-icon-menu"></i>自定义
                </div>
              </router-link>
            </ul>
          </div>
          <div style="width: 100%;height: 2px;background-color:#1e9efe;margin-top: 1px"></div>
        </el-col>
      </el-row>
    </el-container>
    <SuccessRecord style="margin-top: 10px;"></SuccessRecord>
    <RecordList style="margin-top: 10px"></RecordList>
  </div>
</template>

<script>
  import SuccessRecord from './../components/common/successrecord/SuccessRecord'
  import RecordList from './../components/common/successrecord/RecordList'
  export default {
    name: "RecordTitle",
    components:{
      RecordList,
      SuccessRecord
    }
  }
</script>

<style scoped>
  .page_date {
    width: 100%;
    height: 38px;
    line-height: 12px;
    text-align: center;
    margin-top: 10px;
  }

  .page_date li {
    float: left;
    padding: 14px 18px;
    color: #666;
    cursor: pointer;
    background-color: white;
  }

  .page_date li:hover {
    background-color: #f4f5f9;
  }

  .page_date li:active {
    background-color: #1e9efe;
  }

  .show-count {
    display: none;
  }

  .user-mbx {
    height: 50px;
    background-color: #f3f5f8;
  }

  .user-mbx i {
    font-size: 20px;
    color: #92d0fe;
  }

  .mbx {
    height: 50px;
    line-height: 50px;
    margin-left: 5px;
  }

  .el-icon-menu {
    color: #f7a10f;
  }
</style>
