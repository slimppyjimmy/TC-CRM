<template>
  <div>
  <div type="text" @click="centerDialogVisible = true;initDiaLog" class="d-ifm">{{data.outGoodsTheme}}</div>

  <el-dialog
    title="发货详情"
    :visible.sync="centerDialogVisible"
    width="1000px"
    center>
<!--    内容-->
    <div class="d-model">
      <el-row>
        <el-col :span="24"><div class="d-m-tr">基本信息</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12" div class="d-m-tr2">录入人：<span class="d-span">{{data.outGoodsPrincipal}}</span></el-col>
        <el-col :span="12" div class="d-m-tr2">录入时间: <span class="d-span">{{data.orderCreatTime}}</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="d-m-tr">详情</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="e-col">发货编号：{{data.outGoodsOrderId}}</div></el-col>
        <el-col :span="20"><div class="e-col2"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="e-col">客户：</div></el-col>
        <el-col :span="20"><div class="e-col2"><span class="d-span">{{data.orderClientName}}</span></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="e-col">成交订单：	</div></el-col>
        <el-col :span="20"><div class="e-col2">	<span class="d-span">{{data.orderId}}</span></div></el-col>
      </el-row>
      <el-row class="el-row1">
        <el-col :span="24">
          <el-row class="el-row2">
            <el-col :span="24">
              <el-row class="d-m-tr4">
                <el-col :span="1"></el-col>
                <el-col :span="5">产品名称</el-col>
                <el-col :span="4">待发产品数</el-col>
                <el-col :span="4">仓库库存数</el-col>
                <el-col :span="4">发货数量</el-col>
                <el-col :span="5">备注</el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <el-row class="d-m-tr4-1">
                <el-col :span="1" class="d-el-ccol">1</el-col>
                <el-col :span="5" class="d-lingshi">零食特产 - 1</el-col>
                <el-col :span="4" class="d-lingshi">1</el-col>
                <el-col :span="4" class="d-lingshi">{{data.outGoodsCount}}</el-col>
                <el-col :span="5" class="d-lingshi">{{data.outGoodsRemarks}}</el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <el-row class="d-m-r">
                <el-col :span="12" class="d-heji">合计</el-col>
                <el-col :span="12" class="d-num">1</el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="d-m-tr5">
        <el-col :span="12" div class="d-m-tr2">发货时间：<span class="d-span">{{data.outGoodsOutTime}}</span></el-col>
        <el-col :span="12" div class="d-m-tr2">负责人：<span class="d-span">{{data.outGoodsPrincipal}}</span></el-col>
      </el-row>
      <el-row class="d-m-tr5">
        <el-col :span="12" div class="d-m-tr2">物流公司：<span class="d-span">{{data.outGoodsCourierCompany}}</span></el-col>
        <el-col :span="12" div class="d-m-tr2">运单号：<span class="d-span">{{data.outGoodRecordId}}</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="e-col">收货地址：</div></el-col>
        <el-col :span="20"><div class="e-col2">{{data.outGoodAdress}}</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="e-col">备注：</div></el-col>
        <el-col :span="20"><div class="e-col2">{{data.outGoodsRemarks}}</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="e-col">相关文档：	</div></el-col>
        <el-col :span="20"><div class="e-col2">共 <span class="e-red">0</span> 个</div></el-col>
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
        name: "ShippingDetails",
      data(){
        return{
          centerDialogVisible:false,

        }
      },
      props:['data'],

    }
</script>

<style scoped>
  /*-------成交的时间，物品的详情-------8月9日*/
  .d-ifm:hover,
  .d-span:hover{
    color: red;
  }
  .d-model{
    width: 100%;
    height: auto;
    border: gainsboro 1px solid;
    color: rgba(0, 0, 0, 0.56);
  }
.d-m-tr{
  width: auto;
  height: 46px;
  text-align: left;
  line-height: 46px;
  padding-left: 5px;
  background-color: #f5f5f5;
}
  .d-m-tr2{
    height: 46px;
    line-height: 46px;
    padding-left: 88px;
  }
  .e-red{
    color: red;
  }
  .d-span{
    color: #1998c5;
  }

  .d-m-tr4{
    width: auto;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: #f5f5f5;
  }
  .d-m-r{
    width: auto;
    height: 46px;
    line-height: 46px;
    background-color: #f5f5f5;
  }
  .d-heji{
    padding-left: 80px;
  }
  .d-num{
    padding-left: 105px;
  }
  .d-m-tr4-1{
    width: auto;
    height: 46px;
    line-height: 46px;
    background-color: #fffdd7;
  }
  .d-lingshi{
    padding-left: 30px;
  }
  .d-m-tr5{
    width: auto;
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid gainsboro;
  }
  .el-row1{
    width: auto;
    height: auto;
    line-height: 46px;
    border-bottom: 1px solid gainsboro;
  }
.el-row2{
  width: 97%;
  height: 160px;
  margin: auto;
  padding-top: 8px;
  border-radius: 5px;
  border: 1px solid #f5f5f5;
}
  .d-el-ccol{
    background-color: #f5f5f5;
  }
  .e-col2{
    width: auto;
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid gainsboro;
  }
  .e-col{
    width: auto;
    height: 46px;
    line-height: 46px;
    text-align: right;
    border-bottom: 1px solid gainsboro;
  }
</style>
