<template>
  <div class="department" @click="isShow = 'none'">
    <!--第一行标题和选项-->
    <el-row :gutter="10">
      <el-col :span="4">
        <div class="dep-title">
          <div class="dep-name">部门</div>
          <div class="dep-title-tip">右键[添加/修改]</div>
        </div>
      </el-col>
      <el-col :span="20" class="right">
        <ul class="tags clearfix">
          <li class="tag-item"
              :class="{active:index === current}"
              data-type="item"
              v-for="(item, index) of tags"
              @click="changeTags(index)"
          >{{item}}</li>
        </ul>
      </el-col>
    </el-row>
<!--部门列表和人员列表-->
    <el-row :gutter="10">
      <el-col :span="4">
        <div class="dep-list" @contextmenu.prevent="isShow = 'block';showAddBtn($event)">
          <el-tree :data="depData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
        <div class="contextmenu" :style="{display : isShow, left : btnX, top : btnY}">
          <i class="el-icon-plus"></i>
          <span>新增部门</span>
        </div>
      </el-col>
      <el-col :span="20" class="right">
        <ul class="tool-bar clearfix">
          <li class="bar-item">
            <el-input placeholder="请输入内容" v-model="searchVal" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" class="searchBtn"></el-button>
          </el-input>
          </li>
          <li class="bar-item">
            <add-user></add-user>
          </li>
          <li class="bar-item">
            <modify-user :data="personInfo"></modify-user>
          </li>
          <li class="bar-item">
            <el-button icon="el-icon-close">删除</el-button>
          </li>
        </ul>

        <el-table
          ref="multipleTable"
          :data="nowUserData"
          tooltip-effect="dark"
          style="width: 100%;border:1px solid #ededed"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="id"
            label="编号"
            width="50px"
          >
          </el-table-column>
          <el-table-column label="头像">
            <template width="90" slot-scope="scope">
              <img style="width:50px;height:50px;border:none;" :src="scope.row.pic">
            </template>

          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="roleName"
            label="职位">
          </el-table-column>
          <el-table-column
            prop="depName"
            label="部门">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="email"
            label="email">
          </el-table-column>
        </el-table>
        <div class="page-list">
          <el-pagination
            background
            :page-count="userListLen"
            @current-change="changePage"
            :pager-count="7"
            layout="prev, pager, next">
          </el-pagination>
        </div>
      </el-col>
    </el-row>



  </div>
</template>

<script>
  import AddUser from '../../components/common/Addmembers'
  import ModifyUser from '../../components/common/modifyMembers'
  import api from '../../api/department'

  export default {
    name: "department",
    components : { AddUser, ModifyUser },
    data(){
      return {
        personInfo : {},
        btnX : '',
        btnY : '',
        isShow: 'none',
        current : 0,
        searchVal :'',
        tags:['正常状态','禁止登陆','全部','今日登陆过'],
        depData: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        },

        allUserData: [],
        nowUserData : [],
        pageUserData : [],
        multipleSelection: [],
        userListLen : 0
      }
    },
    created(){
      this.initData()
    },
    methods: {
      // 获取部门数据和人员数据
      initData(){
        api.getDepartment().then(res => {
          let userPageData = res.userPageData;
          this.allUserData = userPageData
          this.nowUserData = userPageData[0]
          this.userListLen = userPageData.length
          this.depData = res.depData
        })
      },
      showAddBtn(event){
          let clientX = event.clientX,
            clientY = event.clientY;
          this.btnX = clientX + 'px';
          this.btnY = clientY + 'px';
      },
      changeTags(index){
        this.current = index
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleNodeClick(data) {
        let depId = data.id;
      },

      // 切换分页
      changePage(index){
        this.nowUserData = this.allUserData[index-1]
      }
    }
  }
</script>

<style scoped lang="less">
  .department{
    @blue: #1e9fff;
    .contextmenu{
      position: fixed;
      border: 1px solid #ededed;
      background-color: #fff;
      border-radius: 2px;
      padding: 5px;
      i{
        color: @blue;
        font-weight: 700;
        margin-right: 3px;
      }
    }
    .dep-list{
      border-top: 3px solid @blue;
    }
    .dep-title{
      padding: 10px 0;
      .dep-name{
        float: left;
      }
      .dep-title-tip{
        color: orange;
        float:right;
      }
    }
    .tags{
      .tag-item{
        float: left;
        width: 100px;
        height: 40px;
        text-align: center;
        cursor: pointer;
        line-height: 40px;
        &.active{
          background-color: @blue;
          color: #fff;
        }
      }
    }
    .tool-bar{
      padding: 10px 5px;
      background-color: #f4f6f9;
      border-top: 3px solid @blue;
      .bar-item{
        float: left;
        margin-right: 10px;
        .searchBtn{
          background: @blue;
          border-radius: 2px;
          color: #fff;
        }
      }
    }
    .page-list{
      margin-top: 20px;
      text-align: center;
    }
  }

</style>
