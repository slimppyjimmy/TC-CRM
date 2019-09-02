<template>
  <div>
    <div class="MyCz" @click="dialogVisible =true"><span class="el-icon-close" style="color: #FF6666"></span>删除</div>

    <el-dialog
      title="用户基本信息"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <ul class="UserUl">
        <li>用户管理</li>
      </ul>
<div style="overflow: hidden;margin-top: 10px">
  <div style="float: left;width: 25%;text-align: center;line-height: 120px"><img
    style="border:0px;border-radius:15px;-webkit-border-radius:15px;width: 105px"
    src="https://res29.kehu51.com/images/users/usreicon_80.png"></div>
  <div style="float: left;width: 75%;text-align: left">
    <div style="border-bottom: 1px solid darkgray">秋实121</div>
    <div style="border-bottom: 1px solid darkgray"> 部门</div>
    <div style="border-bottom: 1px solid darkgray">职位：管理员</div>
  </div>
</div >
 <div >
   <div style="border-bottom: 1px solid darkgray;padding-left: 130px">手机号：	</div>
<!--   <div style="width: 100% ;height: 1px ;background-color: red"></div>-->
   <div style="border-bottom: 1px solid darkgray;padding-left: 130px">Email：	<span style="color: #178eb9;">1606035193@qq.com</span></div>
   <div style="border-bottom: 1px solid darkgray;padding-left: 130px">登录用户名：	秋实121</div>
   <div style="border-bottom: 1px solid darkgray;padding-left: 130px">状态：	正常</div>
   <div style="border-bottom: 1px solid darkgray;padding-left: 130px">加入时间：	8月9日 (周五) 11点07分</div>
   <div style="border-bottom: 1px solid darkgray;padding-left: 130px">最后登录时间：	<span style="color: red">15秒前</span>   <span style="color: #178eb9;">[强制退出]</span></div>
   <div style="border-bottom: 1px solid darkgray;padding-left: 130px">最后登录IP：	171.221.141.2</div>
 </div>


            <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        dialogVisible: false,

      }
    },
    methods: {}

  }
</script>

<style scoped>
  .MyCz {
    width: 70px;
    float: left;
    font-size: 15px;
    margin: 0 10px;
    text-align: center;
    border: 1px solid #cfcfcf;
    background-color: white;
    margin-top: 5px;
  }

  .MyCz > span {
    margin-right: 5px;
    font-size: 16px;
  }

  .UserUl {
    width: 100%;
    border-bottom: 1px solid darkgray;
    border-top: 1px solid darkgray;

  }

  .UserUl > li {
    width: 100px;

    text-align: center;
    height: 40px;
    margin-top: 5px;
  }
</style>
