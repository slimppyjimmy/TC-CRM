<template>
  <div>
    <el-button type="text" @click="blockItem" class="d-ifm">
      <slot></slot>
    </el-button>

    <el-dialog
      title="用户基本信息"
      :visible.sync="centerDialogVisible"
      width="700px"
      center>
      <!--    内容-->
      <div class="d-model">
        <div class="d-user">
          <div class="d-image"><div class="d-img"></div></div>
          <div>
            <el-row>
             <el-col :span="24"><div class="d-m-tr1">{{individual.operator}}</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="24"><div class="d-m-tr1">部门：</div></el-col>
            </el-row>
            <el-row>
              <el-col :span="24"><div class="d-m-tr1">职位：管理员</div></el-col>
            </el-row>
          </div>
        </div>
        <el-row>
          <el-col :span="6"><div class="d-m-tr4">手机号：	</div></el-col>
          <el-col :span="16"><div class="d-m-tr3"></div></el-col>
        </el-row>
        <el-row>/
          <el-col :span="6"><div class="d-m-tr4">Email：</div></el-col>
          <el-col :span="16"><div class="d-m-tr3"><span class="d-span">yyqxortao@foxmail.com</span></div></el-col>
        </el-row>
        <el-row>/
          <el-col :span="6"><div class="d-m-tr4">登录用户名：</div></el-col>
          <el-col :span="16"><div class="d-m-tr3">闵123</div></el-col>
        </el-row>
        <el-row>/
          <el-col :span="6"><div class="d-m-tr4">状态：</div></el-col>
          <el-col :span="16"><div class="d-m-tr3">正常</div></el-col>
        </el-row>
        <el-row>/
          <el-col :span="6"><div class="d-m-tr4">加入时间：</div></el-col>
          <el-col :span="16"><div class="d-m-tr3">8月8日 (周四) 10点43分</div></el-col>
        </el-row>
        <el-row>/
          <el-col :span="6"><div class="d-m-tr4">最后登录时间：</div></el-col>
          <el-col :span="16"><div class="d-m-tr3"><span class="d-ip">8秒前 </span></div></el-col>
        </el-row>
        <el-row>/
          <el-col :span="6"><div class="d-m-tr4">最后登录IP：</div></el-col>
          <el-col :span="16"><div class="d-m-tr3"><span class="d-span">171.221.143.176</span></div></el-col>
        </el-row>
        <el-row>/
          <el-col :span="6"><div class="d-m-tr4">登录次数：</div></el-col>
          <el-col :span="16"><div class="d-m-tr3">9</div></el-col>
        </el-row>
      </div>

      <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">关闭</el-button>
            </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "userinfo",
    data(){
      return{
        centerDialogVisible:false,
        individual: {}
      }
    },
    props:['data'],
    methods: {
      blockItem (){
        this.centerDialogVisible = true;
        // console.log(this.data)
        this.individual = this.data
      }
    }
  }
</script>

<style scoped>
  /*-------成交的时间，物品的详情-------8月9日*/

  .d-user{
    width: 100%;
    height: 130px;
  }
  .d-image{
    width: 25%;
    height: 130px;
    background-color: rgba(255, 253, 215, 0.78);
  }
  .d-img{
    width: 70%;
    height: 90px;
    margin: 20px auto 0 ;
    background-color: #fff;
  }
  .d-user > div{
    float: left;
  }
  .d-ifm:hover{
    color: red;
  }
  .d-model{
    width: 100%;
    height: auto;
    color: rgba(0, 0, 0, 0.56);
  }
  .d-ip{
    color: red;
  }
  .d-span{
    color: #1998c5;
  }
  .d-m-tr3{
    width: auto;
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid gainsboro;
  }
  .d-m-tr4{
    width: auto;
    height: 46px;
    line-height: 46px;
    text-align: right;
    border-bottom: 1px solid gainsboro;
  }
  .d-m-tr1{
    width: 453px;
    height: 42px;
    line-height: 40px;
    border-bottom: 1px solid gainsboro;
  }
</style>
