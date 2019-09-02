<template>
  <!--    header-->
  <div class="d-send">
    <div class="d-send2">
      <!--      我自己  的 子菜单------------- -->
      <div class="d-s3">
        <div><span class="el-icon-user"></span>我自己<span class="el-icon-caret-bottom"></span></div>
        <div class="d-zcd">
          <div class="d-z1">
            <div>我自己</div>
            <div>仅下属成员</div>
            <div>所有成员</div>
          </div>
          <div class="d-z2">
            <div class="d-z2-1">
              <div class="d-an">按人员浏览
                <div class="d-z2-2">
                  <input name="" placeholder="请输入用户名称或者真实姓名搜索" id="input"></input>
                </div>
              </div>
              <div class="d-an2">按部门浏览
                <div class="d-z2-3">
                  没有任何部门
                </div>
              </div>
              <div class="d-zui">
                最近浏览
                <div class="d-z2-4">
                  目前没有任何浏览记录
                </div>
              </div>
            </div>
          </div>
          <!--                   -->
          <div class="d-z-foot">
            <div class="d-z-f1">
              <span class="el-icon-refresh"></span>刷新
            </div>
            <div class="d-z-f2">
              <span class="el-icon-s-custom"></span>人员设置
            </div>
          </div>
        </div>
      </div>

      <div class="d-s2"><span class="el-icon-search"></span>搜索</div>

      <!--      状态：等我处理  的 子菜单------------- -->
      <div class="d-s1">
        <div><span class="el-icon-search"></span>状态：等我处理<span class="el-icon-caret-bottom"></span></div>
        <div class="d-zhuang">
          <div><span class="el-icon-check"></span>等我处理</div>
          <div><span class="el-icon-check"></span>我已处理</div>
          <div><span class="el-icon-check"></span>全部</div>
        </div>
      </div>
      <div class="d-s1">
        <div><span class="el-icon-search"></span>发货状态：全部<span class="el-icon-caret-bottom"></span></div>
        <div class="d-zhuang">
          <div><span class="el-icon-check"></span>全部</div>
          <div><span class="el-icon-check"></span>部分发货</div>
        </div>
      </div>
      <div class="d-s2">
        <div><span class="el-icon-folder-remove"></span>导出<span class="el-icon-caret-bottom"></span></div>
        <div class="d-zhuang2">
          <div>导出选中</div>
          <div>导出搜索结果</div>
          <div>导出当前分类待发货订单</div>
        </div>
      </div>
    </div>
    <div class="d-send3">
      <div class="d-s2">
        <div><span class="el-icon-pie-chart"></span>统计<span class="el-icon-caret-bottom"></span></div>
        <div class="d-zhuang2">
          <div>等我处理</div>
          <div>我已处理</div>
          <div>全部</div>
        </div>
      </div>
      <div class="d-s2"><span class="el-icon-s-unfold"></span>显示列</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "toolber"
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .d-head{
    width: 100%;
    height: 45px;
    background-color: #6af9c3;
  }
  /*-------------   图标设置-------------*/
  .el-icon-search,
  .el-icon-refresh,
  .el-icon-check{
    color: #1E9FFF;
    font-size: 15px;
    margin: 0 7px;
  }

  .el-icon-folder-remove,
  .el-icon-s-unfold {
    color: #1abc9c;
    font-size: 15px;
    margin: 0 7px;
  }

  .el-icon-user,
  .el-icon-pie-chart,
  .el-icon-s-custom{
    color: #ff6666;
    font-size: 13px;
    margin: 0 7px;
  }

  /*----------  ---------------------*/
  .d-send {
    width: 99.8%;
    height: 50px;
    background-color: white;
    border-right: gainsboro 1px solid;
    border-left: gainsboro 1px solid;
  }

  .d-send2 {
    width: 75%;
    height: 35px;
    background-color: #fff;
    font-size: 13px;
    float: left;
    margin: 7px 0 0 7px;
  }

  .d-send3 {
    width: 160px;
    height: 35px;
    font-size: 13px;
    float: right;
    margin: 7px 7px 0 0;
  }

  .d-s1 {
    width: 125px;
    height: 30px;
    line-height: 30px;
    float: left;
    margin-right: 7px;
    font-size: 12px;
    border: 1px solid #e2e6ec;
    border-radius: 3px;
  }
  .d-s1:hover{
    background-color: #f8f8f8;
  }
  .d-s2 {
    width: 70px;
    height: 30px;
    line-height: 30px;
    float: left;
    margin-right: 7px;
    font-size: 13px;
    border: 1px solid #e2e6ec;
    border-radius: 3px;
  }
  .d-s2:hover{
    background-color: #f8f8f8;
  }

  .d-s3 {
    width: 90px;
    height: 30px;
    line-height: 30px;
    float: left;
    margin-right: 7px;
    font-size: 12px;
    border: 1px solid #e2e6ec;
    border-radius: 3px;
  }
  .d-s3:hover > .d-zcd{
    display: block;
  }
  .d-s3:hover  .el-icon-caret-bottom {
    transform: rotateX(180deg);
  }
  /*<!--      我自己  的 子菜单------------- -->*/
  /*------------子菜单--------------*/
  .d-zcd {
    position: relative;
    width: 350px;
    height: 550px;
    background-color: white;
    border: 1px solid #e2e6ec;
    display: none;
    z-index: 5;
  }

  .d-z1 {
    width: 100%;
    height: 100px;
  }

  .d-z1 > div {
    width: 99.5%;
    height: 30px;
    border-bottom: 1px solid #e2e6ec;
    text-align: center;
  }

  .d-z2 {
    width: 100%;
    height: 400px;
    border-bottom: 1px solid #e2e6ec;
  }

  .d-z2-1 {
    width: 95%;
    height: 35px;
    margin: auto;
    border-bottom: 1px solid #e2e6ec;
  }

  .d-z2-1 > div {
    width: 25%;
    height: 30px;
    border: 1px solid gainsboro;
    border-bottom: none;
    float: left;
    margin: 5px 0 0 17px;
    text-align: center;
    border-radius: 3px;
  }

  .d-z2-2 {
    width: 290px;
    height: 365px;
    display: none;
  }

  .d-z2-3 {
    width: 290px;
    height: 365px;
    margin-left: -102px;
    display: none;
    line-height: 100px;
  }
  .d-z2-4 {
    width: 290px;
    height: 365px;
    margin-left: -204px;
    line-height: 100px;
    display: none;
  }

  #input {
    width: 95%;
    height: 20px;
    /*box-shadow: 4px  2px 4px 4px #c4c4c4;*/
    margin-top: 10px;
    border: 1px solid gainsboro;
  }
  .d-an,
  .d-an2,
  .d-zui{
    cursor: pointer;
  }
  .d-an:hover > .d-z2-2,
  .d-an2:hover > .d-z2-3,
  .d-zui:hover > .d-z2-4{
    display: block;
  }
  .d-z-foot{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  .d-z-f1{
    width: 50%;
    height: 50px;
    float: left;
    border-right: 1px solid gainsboro;
  }

  /*<!--      状态：等我处理  的 子菜单------------- -->*/
  .d-zhuang{
    position: relative;
    width: 150px;
    height: auto;
    background-color: white;
    border: 1px solid gainsboro;
    color: #5d5d5d;
    display: none;
    font-size: 12px;
    z-index: 5;
  }
  .d-zhuang2{
    position: relative;
    width: 155px;
    height: auto;
    background-color: white;
    border: 1px solid gainsboro;
    color: #5d5d5d;
    display: none;
    font-size: 12px;
    z-index: 5;
  }
  .d-zhuang2 > div{
    margin-left: 20px;
  }
  .d-s1:hover > .d-zhuang{
    display: block;
  }
  .d-s2:hover > .d-zhuang2{
    display: block;
  }
</style>
