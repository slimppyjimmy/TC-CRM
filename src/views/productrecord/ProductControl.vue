<template>
  <div class="pc">
    <router-view></router-view>
  </div>
</template>
<script>
  import modify from '../../components/common/modify'
  import newcustomer from '../CRM/newcustomer'
  export default {
    name: "ProductControl",
    data(){
      return{
        //搜索产品名称
        pName:'',
        //录入时间
        writeTime:''

      }
    },

    components:{
      modify,
      newcustomer
    },
    methods: {

    }
  }
</script>
<style scoped>
  .funList{
    float: left;
    padding: 10px 10px;

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
  .newAdd {
    float: left;
    margin-top: 7px;
    padding-left: 10px;


  }
  .addIn {
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
    background-color: #c3c5c8;
  }
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
  .classification input{
    height: 35px;
  }
  .customContent{
    border-top: 1px solid #f1f1f1;
    height: 44px;
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
