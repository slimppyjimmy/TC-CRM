<template>
  <div>
    <!--  -------------------  -->
    <table class="t-show">
      <thead class="t-head">
      <tr class="t-tr">
        <th class="t-box">
          <div class="t-box1"></div>
        </th>
        <th>成交/签约时间</th>
        <th>成交客户</th>
        <th>总数量</th>
        <th>成交产品</th>
        <th>负责人</th>
        <th>发货状态</th>
        <th>备注</th>
        <th>录入人</th>
        <th>录入时间</th>
<!--        <th>成交订单</th>-->
<!--        <th>收货人地址</th>-->
<!--        <th>最后发货时间</th>-->
<!--        <th>发货总次数</th>-->
<!--        <th>物流公司</th>-->
<!--        <th>运单号</th>-->
<!--        <th>待发货订单编号</th>-->
      </tr>
      </thead>
      <tbody class="t-body">
      <tr class="t-tr2">
        <th class="t-box">
          <div class="t-box1"></div>
        </th>
        <th> 8月9日 (周五)
        </th>
        <th>333</th>
        <th>1</th>
        <th>2-33</th>
        <th class="d-uer"><uinfo></uinfo></th>
        <th>未发货</th>
        <th></th>
        <th class="d-uer"><uinfo></uinfo></th>
        <th>8月9日 (周五) 18点14分</th>
      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  import uinfo from '../../../components/common/userinfo'
  export default {
    name: "send1",
    components:{
      uinfo
    },
    data: function () {
      return {
        centerDialogVisible: false,

        // shops: [
        //   {s_item: '8月9日 (周五)'},
        //   {s_item: '333'},
        //   {s_item: '1'},
        //   {s_item: '12-33'},
        //   {s_item: '等待 闵123 发货'},
        //   {s_item: '未发货'},
        //   {s_item: ''},
        //   {s_item: '闵123'},
        //   {s_item: '8月9日 (周五) 18点14分'}
        // ]
      }
    }
  }
</script>

<style scoped>

  /*-----------------------------*/
  .t-show {
    min-width: 100%;
    height: auto;
    background-color: white;
    border: gainsboro 1px solid;
    border-bottom: none;
    font-size: 13px;
    font-weight: bold;
    color: #73879c;
    border-collapse: collapse;
  }

  .t-head {
    min-width: 100%;
    height: 50px;
  }

  .t-tr {
    width: auto;
    border-bottom: 1px solid gainsboro;
    height: 40px;
  }

  .t-tr > th {
    border-right: 1px solid gainsboro;
  }
.t-box{
  width: 50px;
}
  .t-box1 {
    width: 18px;
    height: 18px;
    margin-left: 15px;
    border: 1px solid #bebebe;
  }

  .t-tr > th:last-child {
    border-right: none;
  }

  .t-body {
    width: 100%;
    min-height: 50px;
  }
  .t-tr2{
    width: auto;
    height: 50px;

  }
  .t-body:hover{
    background-color: #fcffdc;
  }

  /*!*-------成交的时间，物品的详情-------8月9日*!*/
  .d-uer{

  }

</style>

