<template>
  <div id="Orderdetails">
    <div @click="dialogVisible = true;stateDiaLog">{{data.orderSignedTime}}</div>
    <el-dialog
      title="订单详情"
      :visible.sync="dialogVisible"
      width="1200px"

    >
<!--      :before-close="handleClose"-->
      <div class="jindu">

        <div class="create jinduUser">
          <div>
            <el-tag type="success" size="small">创建</el-tag>
          </div>
          <div><img src="../../../static/images/usreicon_20.png" alt=""></div>
          <div style="color: #1461ab;">lsxlsx</div>
          <p style="color:red;">13点09分</p>
        </div>
        <div class="progress"></div>
        <div class="fahuo jinduUser">
          <div>
            <el-tag type="success" size="small">发货</el-tag>
          </div>
          <div><img src="../../../static/images/usreicon_20.png" alt=""></div>
          <div style="color: #1461ab;">lsxlsx</div>
          <p style="color:red;">13点12分</p>
        </div>

          <div class="FaHuo"  v-if="isSend">
            <span class="jianges" style="position: absolute;left: 47%;top: -20px;">间隔2分钟</span>
            <div class="fahuo-item">
            </div>
            <div class="fahuo-list" ></div>
          </div>

        <div class="fahuo-line" v-else>
          <span class="jiange">间隔2分钟</span>
        </div>

      </div>
      <table class="Orderdetails-table">
        <tr class="el-tr">
          <td colspan="4" class="Orderdetails-table-titleTR">
            基本信息
          </td>
        </tr>
        <tr>
          <td style="width:15%" class="right">编号:</td>
          <td style="width:35%"><span>{{data.orderId}}</span></td>
          <td style="width:15%" class="right">利润:</td>
          <td style="width:35%"><span></span></td>
        </tr>
        <tr>
          <td style="width:15%" class="right">总数量:</td>
          <td style="width:35%"><span>{{data.goodsorderCount}}</span></td>
          <td style="width:15%" class="right">录入时间:</td>
          <td style="width:35%"><span style="color: red;">{{data.orderCreatTime}}</span></td>
        </tr>
        <tr>
          <td style="width:15%" class="right">录入人:</td>
          <td style="width:35%"><span><img src="../../../static/images/usreicon_20.png" alt=""
                                           style="height: 20px;width: 20px;border-radius: 50%;">&nbsp;<span
            style="color: #5a87d6;">{{data.orderCreatMan}}</span></span></td>
          <td style="width:15%" class="right">负责人:</td>
          <td style="width:35%"><img src="../../../static/images/usreicon_20.png" alt=""
                                     style="height: 20px;width: 20px;border-radius: 50%;">&nbsp;<span
            style="color: #5a87d6;">{{data.orderPrincipal}}</span></td>
        </tr>
        <tr class="el-tr">
          <td colspan="4" class="Orderdetails-table-titleTR">
            发货内容
          </td>
        </tr>
        <tr>
          <td style="width:15%" class="right">发货状态:</td>
          <td style="width:35%"><span class="complete-btn">{{data.orderGoodsWaitAlready}}</span></td>
          <td style="width:15%" class="right">负责人:</td>
          <td style="width:35%">
            <img src="../../../static/images/usreicon_20.png" alt=""
                 style="height: 20px;width: 20px;border-radius: 50%;">&nbsp;
            <span style="color: #5a87d6;font-weight: 600;">{{data.orderPrincipal}}</span>&nbsp;<span style="color: #5a87d6;">{{data.s_state}}</span>
          </td>
        </tr>
        <tr>
          <td style="width:15%" class="right">收货人地址:</td>
          <td style="width:35%" colspan="3">
            <span>{{data.orderSendAddress}}</span>&nbsp;&nbsp;
          </td>
        </tr>
        <tr>
          <td style="width:15%" class="right">最后发货时间:</td>
          <td style="width:35%"><span style="color: red;">{{data.orderEndTime}}</span></td>
          <td style="width:15%" class="right">发货总次数:</td>
          <td style="width:35%"></td>
        </tr>
        <tr>
          <td style="width:15%" class="right">物流公司:</td>
          <td style="width:35%"></td>
          <td style="width:15%" class="right">运单号:</td>
          <td style="width:35%"></td>
        </tr>
        <tr>
          <td style="width:15%" class="right">备注:</td>
          <td colspan="3">{{data.goodsorderRemark}}</td>
        </tr>
        <tr class="el-tr">
          <td colspan="4" class="Orderdetails-table-titleTR">
            订单内容
          </td>
        </tr>
        <tr>
          <td style="width:15%" class="right">主题:</td>
          <td style="width:35%" colspan="3"><span>{{data.orderTheme}}</span></td>
        </tr>
        <tr>
          <td style="width:15%" class="right">成交客户:</td>
          <td style="width:35%" colspan="3">
            <span>{{data.orderClientName}}</span>
            <span style="color: #aaa;">[客户详细信息]</span>
          </td>
        </tr>
        <tr>
          <td style="width:15%" class="right">合同记录:</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="4" style="padding: 0;">

            <table class="table-two">
              <tr style="background-color: #F5F5F5;">
                <td style="width: 20%">产品名称</td>
                <td style="width: 10%">可用库存</td>
                <td style="width: 8%">成本</td>
                <td style="width: 9%">销售单价</td>
                <td style="width: 10%">成交数量</td>
                <td style="width: 9%">总价</td>
                <td style="width: 8%">折扣</td>
                <td style="width: 8%">实际成交价</td>
                <td>备注</td>
              </tr>
              <tr>
                <td><span>{{data.goodsorderName}}</span></td>
                <td><span></span></td>
                <td><span>{{data.orderTotalCost}}</span></td>
                <td><span>0</span></td>
                <td><span>{{data.goodsorderCount}}</span></td>
                <td><span>{{data.goodsorderAllprice}}</span></td>
                <td><span>{{data.goodsorderDiscount}}</span></td>
                <td><span>{{data.goodsorderRealityAllprice}}</span></td>
              </tr>
              <tr style="background-color: #F5F5F5;" class="tabletwo-lastTR">
                <td style="color: black;">合计</td>
                <td><span></span></td>
                <td><span>{{data.orderTotalCost}}</span></td>
                <td><span></span></td>
                <td><span>{{data.goodsorderCount}}</span></td>
                <td><span>{{data.goodsorderAllprice}}</span></td>
                <td>{{data.goodsorderDiscount}}</td>
                <td>{{data.goodsorderRealityAllprice}}</td>
                <td></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="width:15%" class="right">成交总额:</td>
          <td style="width:35%"><span>{{data.orderAllprice}}</span></td>
          <td style="width:15%" class="right">总成本:</td>
          <td style="width:35%">{{data.orderTotalCost}}</td>
        </tr>
        <tr>
          <td style="width:15%" class="right">成交/签约时间:</td>
          <td style="width:35%"><span style="color: red;">{{data.orderSignedTime}}</span></td>
          <td style="width:15%" class="right">付款方式:</td>
          <td style="width:35%">{{data.orderPayType}}</td>
        </tr>
      </table>
      <span slot="footer" class="dialog-footer">

   <el-button style="position: relative;right: 47%;" type="primary" @click="dialogVisible = false" v-if="isSend">发 货</el-button>
          <el-button style="position: relative;right: 47%;" type="primary" @click="dialogVisible = false" v-else>关 闭</el-button>
  </span>
    </el-dialog>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,

      };
    },
    computed:{
      isSend(){
        return this.data.s_state === '未发货' ? 0 : 1
      }
    },
    props:['data'],

  };
</script>

<style lang="less">
  .el-tr{
    height: 30px;
  }
  #Orderdetails {
    .left {
      text-align: left;
    }

    .right {
      text-align: right;
    }

    .el-dialog__body {
      padding: 0;
    }

    .jindu {
      padding: 25px 40px 10px 40px;
      height: 140px;
      border: 1px solid #ccc;
      position: relative;
    }

    .jinduUser {
      position: absolute;
      text-align: center;

      > p {
        font-size: 11px;
        margin-top: 15px;
      }

      > div {
        margin: 5px 0;
      }

      > div:nth-child(2) {
        display: inline-block;
        width: 25px;
        border-radius: 50%;
        overflow: hidden;
        border: 4px solid #30BC92;

        > img {
          width: 100%;
        }
      }
    }

    .fahuo {
      right: 40px;
    }

    .fahuo-line {
      position: absolute;
      left: 85px;
      top: 80px;
      width: 86%;
      height: 5px;
      background-color: #30BC92;
      text-align: center;

      span {
        position: relative;
        top: -20px;
        color: #aaa;
        font-size: 13px;
      }
    }

    .Orderdetails-table {
      width: 100%;
      border-collapse: collapse;

      /*td {*/
      /*  padding: 20px 10px;*/
      /*}*/

      > tr {
        border-top: 1px #f1f1f1 solid;
        padding-left: 30px;
      }

      .Orderdetails-table-titleTR {
        background-color: #F5F5F5;
        padding: 8px 5px;
      }
    }

    .complete-btn {
      cursor: pointer;
      color: rgb(4, 180, 4);;
    }

    .table-two{
      width: 100%;
      text-align: center;
      border-collapse: collapse;
   }
    .tabletwo-lastTR{
      color: #F8A20F;
    }
  }
  .FaHuo {
    text-align: center;
    position: absolute;
    width: 86%;
    left: 80px;
    top: 90px;
    height: 5px;
  }
  .FaHuo .fahuo-item {
    background-color: #30BC92;
    text-align: center;
    width: 50%;
    height: 5px;
    float: left;
  }
  .FaHuo .fahuo-list {
    background-color: #707070;
    text-align: center;
    width: 50%;
    height: 5px;
    float: left;
  }

</style>
