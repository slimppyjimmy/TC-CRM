<template>
    <div class="pc">
      <div>
        <ul class="public-tab-nav">
          <li>全部(1)</li>
        </ul>
      </div>
      <div class="functionStrip">
        <div class="search">
          <el-input v-model="pName" placeholder="请输入产品名称" style="width: 150px;"></el-input>
          <span class="demonstration">请选择日期</span>
          <el-date-picker
            v-model="writeTime"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 230px;height: 40px"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
          <el-button @click="searchGoods">搜索</el-button>
        </div>
        <!--        新建产品-->
        <div class="funList"></div>
        <!--        修改产品 -->
        <div class="funList"><modify></modify></div>
        <!--        删除产品-->
        <div class="funList"><el-button style="width: 89px;height: 36px" @click="deleteProductList">删除产品</el-button></div>
      </div>
<!--      产品数据列表-->
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        @cell-click="changeRouter">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <!--产品名称 pName-->
        <el-table-column
          prop="goodsName"
          label="产品名称"
          show-overflow-tooltip
        >
        </el-table-column>
        <!--意向客户数 pCustom-->
        <el-table-column
          prop="goodsPrice"
          label="销售单价"
          show-overflow-tooltip>
        </el-table-column>
        <!--成交数量 pNum-->
        <el-table-column
          prop="goodsTtm"
          label="上市时间"
          show-overflow-tooltip>
        </el-table-column>
        <!--成交总额度 pMoneyAll-->
        <el-table-column
          prop="goodsCosting"
          label="成本"
          show-overflow-tooltip>
        </el-table-column>
        <!--成交成本总数 pMoney-->
        <el-table-column
          prop="goodsTypeId"
          label="产品分类"
          show-overflow-tooltip>
        </el-table-column>
        <!--成交总利润 pProfit-->
        <el-table-column
          prop="goodsStatusId"
          label="状态"
          show-overflow-tooltip>
        </el-table-column>
        <!--录入时间 pDate-->
        <el-table-column
          prop="warehouseId"
          label="仓库"
          show-overflow-tooltip>
        </el-table-column>
        <!--录入人 pWriter-->
        <el-table-column
          prop="goodsSell"
          label="销售状态"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <!--    分页条-->
      <div class="cutpage">
        <el-pagination
          background
          layout="prev, pager, next"
         :page-count="pageCounts"
          @current-change="pageSum"
        >
        </el-pagination>
      </div>
    </div>
</template>

<script>
  import  api from '../../api/productControl'
  import modify from '../../components/common/modify'
    export default {
      name: "ProductControlList",
      components:{
        modify
      },
    data() {
      return {
        pName:'',
        writeTime:'',
        tableData: [],
        multipleSelection: [],
        goodsId:'',
        pageCounts:''
      }
    },
      methods:{
        changeRouter(row,col,cell,event){
          if(col.property === 'goodsName'){
            this.$router.push({
              path : '/ProductControl/checkProduct',
              query : {
                id : row.goodsId
              }
            })
          }
        },
        /*根据页码请求当前页数据*/
        pageSum(page){
          api.getProductList({
            //  返给后台进入页面渲染所需参数
            page:page,
            pageSize:5
          }).then(res=>{
            this.tableData=res.data.list

          })
        },
        //搜索产品
        searchGoods(){
          let goodsName=this.pName
          let time=this.writeTime
          console.log(time)
          let localStartTime=time[0]
          let localEndTime=time[1]
          api.searchProduct({
            //  返给后台进入页面渲染所需参数
            goodsName:goodsName,
            startTime:localStartTime,
            endTime:localEndTime
          }).then(res=>{
            this.tableData=res.data.list
          })

        },
        //选中产品
        handleSelectionChange(val){
          console.log(val)
          var goodsIdArr=[]
          goodsIdArr = val.map(item => {
              return item.goodsId
          })
          console.log(goodsIdArr)
          this.goodsId=goodsIdArr.join(',')
          console.log(this.goodsId)
          //第二种方法
          /*       for(let i in val){
                      let a = {};
                      a.goodsId = val[i].goodsId
                      arr.push(a)
                    }*/
        },
      //  删除产品
               deleteProductList(){
          let goodsId=this.goodsId
          // console.log(goodsId)
          api.deleteProductList(goodsId).then(res=>{
            console.log(res.msg)
          })

        }

      },
      created() {
        api.getProductList({
          //  返给后台进入页面渲染所需参数
          page:1,
          pageSize:5
        }).then(res=>{
          console.log(res)
          // console.log(res.data.list)
          // console.log(res.data.pages)
          this.tableData=res.data.list
          this.pageCounts=res.data.pages
        })
      },

    }
</script>

<style scoped>
  .cutpage{
    text-align: center;
    padding-top: 15px;
  }
  .funList{
    float: left;
    padding: 10px 10px;

  }
  .pc{
    padding: 10px;
  }
  .functionStrip {
    height: 50px;
    width: 100%;
    background-color: #dee0e3;
  }
  .functionStrip i {
    font-weight: bold;
    font-size: 15px;
  }
  .search div {

  }
  .newAdd div {
    text-align: center;
    height: 33px;
    line-height: 35px;
    width: auto;
    background-color: #fff;
    border: 1px solid #e2e6ec;
    font-size: 12px;
    float: left;
    padding: 0 5px;
    cursor: pointer;
  }
  .newAdd div:hover{
    background-color: #dee0e3;
  }
  .newAdd div:first-child{
    border-radius: 3px 0 0 3px;
  }
  .newAdd div:last-child{
    border-radius: 0 3px 3px 0;
  }
  .addIn div {
    text-align: center;
    height: 33px;
    line-height: 35px;
    width: 65px;
    background-color: #fff;
    border: 1px solid #e2e6ec;
    font-size: 12px;
    float: left;
    cursor: pointer;
  }
  .addIn div:hover{
    background-color: #dee0e3;
  }
  .addIn div:first-child{
    border-radius: 3px 0 0 3px;
  }
  .addIn div:last-child{
    border-radius: 0 3px 3px 0;
  }
  .sort div {
    text-align: center;
    height: 33px;
    line-height: 35px;
    width: 65px;
    background-color: #fff;
    border: 1px solid #8a8a8a;
    font-size: 12px;
    border-radius: 3px;
    float: left;
    margin-right: 5px;
    cursor: pointer;
  }
  .sort div:hover{
    background-color: #dee0e3;
  }
  .search {
    float: left;
    margin-top: 7px;
    padding-left: 10px;
  }
  .newProduct li{
    text-align: left;
    width: auto;
    height: auto;
    background-color: #fff;
    padding-left: 5px;
  }
  .newProduct li:hover{
    background-color: #c3c5c8;
  }
  .chooseTime td{
    padding: 6px 0;
    font-size: 13px;
    color: #323232;
  }

  .screen td{
    padding: 6px 0;
    font-size: 13px;
    color: #323232;
  }
  .screen td:nth-child(1){
    width: 110px;
    text-align: right;
  }
  .screen td:nth-child(2){
    width: 300px;
    padding-left: 20px;
  }
  .screen td:nth-child(3){
    width: 110px;
    text-align: right;
  }
  .screen td:nth-child(4){
    width: 300px;
    padding-left: 20px;
  }
  .screen span{
    padding: 8px;
  }
  .screen input{
    border: 1px solid #e2e6ec;
    width: 78px;
    height: 30px;
    border-radius: 2px;
    transition: all 0.4s;
  }
  .screen input:focus{
    -moz-box-shadow:0 0 3px #06c;
    -webkit-box-shadow:0 0 3px #06c;
    box-shadow:0 0 3px #06c;
  }
  .chooseBtn a:hover{
    border-bottom: 1px solid #207bd6;
  }
  .chooseBtn i{
    font-weight: bold;
  }
  .classification input{
    height: 35px;
  }
  .customContent td{
    padding: 6px 0;
    font-size: 13px;
    color: #323232;
  }
  .customContent input{
    border: 1px solid #e2e6ec;
    width: 78px;
    height: 30px;
    border-radius: 2px;
    transition: all 0.4s;
  }
  .customContent input:focus{
    -moz-box-shadow:0 0 3px #06c;
    -webkit-box-shadow:0 0 3px #06c;
    box-shadow:0 0 3px #06c;
  }


  .tbodyList tr {
    border-top: 1px solid #a2a2a2;
  }
  .tbodyList tr:hover {
    background-color: rgb(255, 253, 215);
  }
  .tbodyList td {
    height: 46px;
    width: auto;
    color: #178eb9;
    padding-left: 20px;
    font-size: 13px;
  }
  .theadList th {
    color: #73879c;
    border: 1px solid #aeb2b8;
    font-size: 12px;
    height: 30px;
    width: auto;
    cursor: pointer;
  }
  .theadList th:hover {
    background-color: rgb(255, 253, 215);
  }
  .theadList th:first-child:hover {
    background-color: rgb(238, 241, 245);
  }

</style>
