<template>
  <div class="role">
    <!--第一行描述-->
    <el-row :gutter="20">
      <el-col :span="6" class="top">
        <div class="clearfix">
          <div class="post-title">
            <i class="el-icon-s-check"></i>
            <span>职位</span>
          </div>
          <div class="add-post" @click="showAdd">
            <i class="el-icon-plus"></i>
            新建职位
          </div>
        </div>
      </el-col>
      <el-col :span="18" class="top">
        <div class="role-title">
          <i class="el-icon-s-check"></i>
          <span>《{{ nowPost }}》的权限</span>
          <span class="post-tip"><span class="tip-text">提示：</span>选中表示允许，否则为禁止。</span>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <!--职位列表-->
      <el-col :span="6">
        <ul class="post-list">
          <li class="post-item clearfix"
              :class="{active : index === checkedInx}"
              @click="changePost(index, item.id, item.roleName)"
              v-for="(item, index) of postList"
              :key="index">
            <i class="el-icon-arrow-right"></i>
            <span class="post-name">{{ item.roleName }}</span>
            <div class="btn" v-if="item.id !== 1">
              <el-button type="text" icon="el-icon-share" @click.stop="showModify(item.id, item.roleName)">修改</el-button>
              <el-button type="text" icon="el-icon-delete" @click.stop="delPost(item.id)">删除</el-button>
            </div>
          </li>
        </ul>
      </el-col>

      <!--权限列表-->
      <el-col :span="18">
        <div class="menu-list" v-if="isShow">
          <div class="clearfix" v-for="(item, n) of menuInfo">
            <div class="menu-item clearfix">
              <div class="menu-title">
                <i class="el-icon-arrow-right"></i>
                <span>{{ item.first.accessName }}</span>
              </div>
              <ul class="item-list clearfix">
                <li class="item-item"
                    :class="{active:item_item.state}"
                    v-for="(item_item, index) of item.second"
                    @click="changeState(n, index)">
                  <i :class="item_item.icon"></i>
                  <span class="item-name">{{ item_item.accessName }}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div v-else class="admin-tips">
          <img src="static/images/admin_warning.png" alt="">
          <p>管理员拥有所有权限，不能编辑</p>
        </div>
      </el-col>
    </el-row>

    <div class="sava" v-show="checkedInx !== 0">
      <el-button type="primary">保存</el-button>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="isDiaLogShow"
      width="30%">
      <div class="add-main">
        <span>{{ dialogTitle }}:</span>
        <el-input v-model="postVal" placeholder="请输入职位名称" class="post-input"></el-input>
        <span class="add-tips">如：业务一部经理</span>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="isDiaLogShow = false">取 消</el-button>
    <el-button type="primary" @click="addOrModifyPost">保存</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "role",
    data() {
      return {
        isShow: true,
        nowPost: '管理员',
        postList: [{
          id: 1,
          roleName: '管理员'
        }, {
          id: 2,
          roleName: '普通员工'
        },
          {
            id: 3,
            roleName: '财务'
          }
        ],
        isDiaLogShow: false,
        postVal: '',
        checkedInx: 1,
        dialogTitle: '',
        menuInfo: [],
        nowModifyId : 0
      }
    },
    created(){
      // let menuInfo = this.$store.state.menuInfo;
      // let navData = menuInfo.map(item => {
      //   let newSec = item.second.filter(son => {
      //     return son.status
      //   })
      //   return {
      //     first : item.first,
      //     second : newSec
      //   }
      // })
    },
    computed: {
      ...mapState({
        'menuInfo': state => state.menuInfo,
        'roleId': state => state.role.id
      })
    },
    methods: {
      // 检查新增和修改的输入框为不为空
      checkPostVal(){
        if(this.postVal.trim()){
          return true
        }else{
          this.$message({
            message : '内容不能为空',
            type : 'warning'
          })
          return false
        }
      },

      // 确定新增或修改职位
      addOrModifyPost() {
        let newPost = this.postVal.trim();
        if(this.checkPostVal()){
          if(this.dialogTitle === '新建职位'){
              // API新增，参数为newPost
          }else{
            let id = this.nowModifyId;
            // API修改，参数为id和newPost
          }
          this.isDiaLogShow = false;
        }else{
          return false;
        }
      },

      // 打开新增职位模态框
      showAdd(){
        this.isDiaLogShow = true;
        this.dialogTitle = '新建职位'
        this.postVal = ''
      },
      // 打开修改职位模态框
      showModify(id, name) {
        this.dialogTitle = '修改职位'
        this.isDiaLogShow = true
        this.nowModifyId = id
        this.postVal = name
      },
      // 删除职位
      delPost(id) {
        this.$confirm('确定删除此职位, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // api删除，参数为id
          this.tipSuccess('删除成功')
        });
      },
      changeState(fatherId, selfId) {

      },
      changePost(index, id, name) {
        this.checkedInx = index;
        this.nowPost = name;
        this.isShow = id === 1 ? false : true;

      }
    }
  }
</script>

<style scoped lang="less">

  @blue: #1e9fff;

  .role {
    .top {
      padding: 5px 0 10px;
    }

    .post-title {
      float: left;

      i {
        margin-right: 5px;
      }
    }

    .add-post {
      float: right;
      cursor: pointer;

      i {
        color: @blue;
        font-weight: 900;
      }

      &:hover {
        color: orangered;
      }
    }

    .role-title {
      margin-left: 6px;

      i {
        margin-right: 5px;
      }

      .tip-text {
        color: orangered;
      }
    }

    .post-tip {
      margin-left: 10px;
    }

    .post-list {
      border: 1px solid #ededed;
      border-top: 3px solid @blue;

      .post-item {
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        padding: 0 8px;
        cursor: pointer;


        i {
          margin-right: 5px;
        }

        .btn {
          display: none;
          float: right;

          .el-button--text {
            color: @blue;
          }
        }

        &:hover {

          .btn {
            display: block;
          }
        }

        &.active {
          background-color: @blue;
          color: #fff;

          .el-button--text {
            color: #fff;
          }
        }
      }
    }

    .admin-tips {
      text-align: center;

      img {
        width: 100px;
      }
    }

    .menu-list {
      margin-left: 8px;
      padding: 10px 5px;
      box-sizing: border-box;
      height: 400px;
      overflow-y: auto;
      border-top: 3px solid @blue;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: #fff;
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

      .menu-item {
        width: 100%;
        padding: 0 15px;
        margin-top: 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #ededed;

        .menu-title {
          float: left;
          width: 20%;
          padding: 15px 0;
          font-size: 16px;
          font-weight: 700;
          color: #525252;
          text-align: center;

          i {
            margin-right: 5px;
          }
        }
      }

      .item-list {
        float: left;
        box-sizing: border-box;
        width: 80%;

        .item-item {
          position: relative;
          float: left;
          width: 30%;
          height: 30px;
          line-height: 30px;
          margin: 0 1.5% 10px;
          padding: 10px 0;
          border-radius: 2px;
          text-align: center;
          border: 1px solid #ededed;
          cursor: pointer;

          i {
            margin-right: 5px;
            font-size: 18px;
            transform: translateY(2px);
          }

          &.active::after {
            content: '';
            display: block;
            position: absolute;
            top: -12px;
            left: -12px;
            width: 0;
            height: 0;
            border-left: 12px solid transparent;
            border-top: 12px solid transparent;
            border-right: 12px solid transparent;
            border-bottom: 12px solid @blue;
            transform: rotate(-45deg);
          }
        }
      }
    }

    .add-main {
      .post-input {
        width: 40%;
      }

      .add-tips {
        margin-left: 5px;
        font-size: 12px;
        color: #989898;
      }
    }

    .sava {
      position: absolute;
      bottom: 10px;
      left: 65%;
      text-align: center;
    }
  }
</style>
