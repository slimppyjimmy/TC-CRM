<template>
  <div class="pc">
    <div>
      <ul class="public-tab-nav">
        <li>全部(1)</li>
      </ul>
    </div>
    <!--    功能条-->
    <div class="functionStrip">
      <!--搜索仓库-->
      <div class="search">
        <el-input v-model="cName" placeholder="请输入产品名称" style="width: 150px;"></el-input>
        <span class="demonstration">请选择日期</span>
        <el-date-picker
          v-model="writeTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          style="width: 230px;height: 40px"
        >
        </el-date-picker>
        <el-button>搜索</el-button>
      </div>
      <!--新建 修改 删除-->
      <div class="newAdd">
        <AddWarehouse></AddWarehouse>
        <ChangeWarehouse :changeinfo='changeInfo'></ChangeWarehouse>
        <div @click="deleteWarehouse"><i class="el-icon-close"></i>删除</div>
      </div>
    </div>
    <!--    仓库信息展示栏-->
    <div>
      <div class="productInfo">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="warehouseName"
            label="仓库名称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="warehouseManager"
            label="仓管员"
            width="200">
          </el-table-column>
          <el-table-column
            prop="warehousePhone"
            label="联系电话"
            width="200">
          </el-table-column>
          <el-table-column
            prop="warehouseAddress"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="warehouseRemark"
            label="备注"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="warehouseType"
            label="仓库类型"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!--    分页条-->
    <div class="cutpage">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        @current-change="pageWarehouse"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import AddWarehouse from '../../components/common/AddWarehouse'
  import ChangeWarehouse from '../../components/common/ChangeWarehouse'
  import  api from '../../api/warehouseControl'
  export default {
    components:{
      AddWarehouse,
      ChangeWarehouse
    },
    name: "WarehouseControl",
    data() {
      return{
        //搜索仓库名称
        cName:'',
        //录入时间
        writeTime:'',

        //仓库数据
        tableData: [
          /*{warehouseId:1,warehouseName:'qqq'},
          {warehouseId:2,warehouseName:'qqq'},
          {warehouseId:3,warehouseName:'qqq'},
          {warehouseId:4,warehouseName:'qqq'}*/
        ],
        multipleSelection: [],
        changeInfo:[],
        warehouseId:''
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          // console.log(rows)
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        // console.log(val)
        //点击修改后将点击选中的仓库信息传递到修改模态框
        this.multipleSelection = val;
        let warehouseId=[];
        for(let i =0; i<val.length; i++){
          warehouseId.push(val[i].id)
        }
        this.warehouseId=warehouseId;
        // console.log(this.warehouseId);
        this.changeInfo=this.multipleSelection[0];
        // console.log( this.changeInfo)

        //选择要删除的仓库将id拼接发给后台
        var warehouseIdArr=[]
        warehouseIdArr = val.map(item => {
          return item.warehouseId
        })
        // console.log(warehouseIdArr)
        this.warehouseId=warehouseIdArr.join(',')
        // console.log(this.warehouseId)
      },
      /*根据页码请求当前页数据*/
      pageWarehouse(page){
        api.getWarehouseList({
          //  返给后台进入页面渲染所需参数
          page:page,
          pageSize:5
        }).then(res=>{
          console.log(res)
          // this.tableData=res.data.list
        })
      },
      //删除仓库
      deleteWarehouse(){
        let warehouseId=this.warehouseId
        // console.log(warehouseId)
        api.deleteWarehouse(warehouseId).then(res=>{
          console.log(res.msg)
        })

      }

    },
        created(){
          api.getWarehouseList({
                //  返给后台进入页面渲染所需参数
            page:1,
            pageSize:5
          }).then(res=>{
            this.tableData=res.data.list
          })
        },
  }
</script>
<style scoped>
  .cutpage{

  }
  #custom{
    font-size: 12px;
  }
  #custom:hover{
    color: #178eb9;
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
  .el-icon-search {
    color: #1E9FFF;
  }
  .el-icon-plus {
    color: #1E9FFF;
  }
  .el-icon-edit {
    color: #F8A20F;
  }
  .el-icon-close {
    color: #FF6666;
  }
  .el-icon-folder-add {
    color: #1ABC9C;
  }
  .el-icon-folder-remove {
    color: #1E9FFF;
  }
  .el-icon-pie-chart {
    color: #FF6666;
  }
  .el-icon-s-unfold {
    color: #1ABC9C;
  }
  .el-icon-discount {
    color: #FF6666;
  }
  .el-icon-caret-bottom {
    color: #666;
  }
  .search div {
    text-align: center;
    height: 33px;
    line-height: 35px;
    width: 65px;
    background-color: #fff;
    border: 1px solid #e2e6ec;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
  }
  .search div:hover{
    background-color: #dee0e3;
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
    padding: 0 10px;
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
  .newAdd {
    float: left;
    margin-top: 7px;
    padding-left: 10px;


  }
  .sort {
    float: right;
    margin-top: 7px;
    padding-right: 5px;
  }
  .po{
    position: relative;
  }
  .po:hover .newProduct{
    display: block;
  }
  .newProduct{
    background-color: #fff;
    width: 110px;
    position: absolute;
    top: 34px;
    left:0;
    display: none;
  }
  .newProduct li{
    text-align: left;
    width: auto;
    height: auto;
    background-color: #fff;
    padding-left: 5px;
  }
  .newProduct li:hover{
    background-color: #dee0e3;
  }
  /*模态框样式*/
  .baseInfo{
    color: #999999;
    background-color: #f5f5f5;
    height: 30px;
    line-height: 30px;
    width: auto;
  }
  .chooseTime{
    border-top: 1px solid #f1f1f1;
  }
  .chooseTime td{
    padding: 6px 0;
    font-size: 13px;
    color: #323232;
  }
  .screen{
    height: 44px;
    border-top: 1px solid #f1f1f1;
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
  .chooseBtn{
    color: #207bd6;
  }
  .chooseBtn a:link,
  .chooseBtn a:visited,
  .chooseBtn a:hover,
  .chooseBtn a:active
  {
    color: #207bd6;
  }
  .chooseBtn a:hover{
    border-bottom: 1px solid #207bd6;
  }
  .chooseBtn i{
    font-weight: bold;
  }
  .chooseTime{
    border-top: 1px solid #f1f1f1;
  }
  .chooseTime td{
    padding: 6px 0;
    font-size: 13px;
    color: #323232;
  }
  .chooseTime td:first-child{
    text-align: right;
  }
  .chooseTime td:last-child{
    padding-left: 20px;
  }
  .classification input{
    height: 35px;
  }
  .customInput{
    width: 160px;
  }
  .el-input__inner{
    height: 34px;
  }
  .searchbtn{
    display: inline-block;
    border: 1px solid #1e9fff;
    background-color: #1e9fff;
    width: 90px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 3px;
    color: white;
  }
  .searchbtn:hover{
    background-color: rgba(30, 159, 255, 0.81);
  }
  .searchclose{
    display: inline-block;
    border: 1px solid #c9c9c9;
    width: 90px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 3px;
  }
  .searchclose:hover{
    background-color: #e2e2e2;
  }
  .productInfo {
    width: 100%;
  }
  .productInfoList {
    width: 100%;
    border-collapse: collapse;
  }
  .choseAll {
    display: inline-block;
    width: 13px;
    height: 13px;
    border: 1px solid black;
    border-radius: 2px;
    cursor: pointer;
  }
  .choseAll:hover {
    border: 1px solid #83ACCF;
    box-shadow: 0 0 2px #83accf inset;
  }
  .chose {
    display: inline-block;
    width: 13px;
    height: 13px;
    border: 1px solid black;
    border-radius: 2px;
    cursor: pointer;
  }
  .chose:hover {
    border: 1px solid #83ACCF;
    box-shadow: 0 0 2px #83accf inset;
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
