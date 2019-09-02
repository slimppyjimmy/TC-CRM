<template>
  <div>
  <div>
    <el-button type="primary" @click="dialogVisible = true" size="medium">主要按钮</el-button>
  </div>
    <div>
      <el-dialog
        title="出库单详情"
        :visible.sync="dialogVisible"
         width="60%"
        :before-close="handleClose"
       center="true">
       <div style="border: 1px solid gainsboro;font-size: 13px ">
           <el-row type="flex">
             <el-col :span="24" class="title1">详情</el-col>
           </el-row>
         <el-row class="row" type="flex">
           <el-col :span="4" class="space15">出库编号：</el-col>
           <el-col :span="8" class="space10"><span>11</span></el-col>
           <el-col :span="4" class="space15">出库来源：</el-col>
           <el-col :span="8" class="space10"><span>11</span></el-col>
         </el-row>
         <el-row class="row" type="flex">
           <el-col :span="4" class="space15">仓库：</el-col>
           <el-col :span="20" class="space10"><span>默认仓库</span></el-col>
         </el-row>
         <el-row class="row" type="flex">
           <el-col :span="4" class="space15">标题：</el-col>
           <el-col :span="8" class="space10"><span>2019年8月14日出库1个产品</span></el-col>
           <el-col :span="4" class="space15">出库时间：</el-col>
           <el-col :span="8" class="space10"><span>今天 (周三) 19点整</span></el-col>
         </el-row>
         <el-row class="rowbg" type="flex">
           <el-col :span="1" style="line-height: 138px;padding-left: 15px ; border-bottom: 1px solid gainsboro;">1</el-col>
           <el-col :span="23">
             <el-row class="row" type="flex" style="border-bottom: none">
               <el-col>产品名称</el-col>
               <el-col>出库前总库存</el-col>
               <el-col>出库前仓库库存</el-col>
               <el-col>出库数量</el-col>
               <el-col>备注</el-col>
             </el-row>
             <!--<el-row class="row" type="flex" style="border-bottom: none" v-for="item in productlist">
               <el-col class="bgcStyle">{{item.name}}</el-col>
               <el-col class="bgcStyle">{{item.zkz}}</el-col>
               <el-col class="bgcStyle">{{item.ckkc}}</el-col>
               <el-col class="bgcStyle">{{item.cksl}}</el-col>
               <el-col class="bgcStyle">{{item.bz}}</el-col>
             </el-row>-->
             <el-row class="row" type="flex">
               <el-col>合计</el-col>
               <el-col>10</el-col>
               <el-col>10</el-col>
               <el-col>1</el-col>
               <el-col>备注</el-col>
             </el-row>
           </el-col>
         </el-row>
         <el-row class="row" type="flex">
           <el-col :span="4" class="space15">出库负责人：</el-col>
           <el-col :span="20" class="space10"><span>规划局k</span></el-col>
         </el-row>
         <el-row class="row" type="flex" style="border-bottom: none">
           <el-col :span="4" class="space15">备注：</el-col>
           <el-col :span="20" class="space10"><span>现场v搞不好就看见你好吧v呈现出v回家的风格和健康建行股份分割的风格和健康建行股份的法国k</span></el-col>
         </el-row>
       </div>
        <span slot="footer" class="dialog-footer">
       <el-button type="primary" @click="dialogVisible = false" style="font-size: 13px">关闭</el-button>
  </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
    export default {
        name: "OutOrderInfo",
      data() {
        return {
          dialogVisible: false,
          productlist:[
            {
              name: 'qaz',
              zkz: '11',
              ckkc: '12',
              cksl: '22',
              bz: 'sdfghjkjhgfdsdfgh'
            },
          ]
          }
      },
      methods: {

      }
    }
</script>

<style scoped>
.title1{
  width: 100%;
  background-color: #f5f5f5;
  height: 32px;
  line-height: 32px;
  font-size: 13px;
  color: black;
  padding-left: 6px;
}
  .row{
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid gainsboro;
  }
  .space10{
    padding-left: 5px;
  }
  .space15{
    text-align: right;
    padding-left: 20px;
  }
  .rowbg{
    background-color: rgb(245, 245, 245);
    text-align: center;
  }
  .bgcStyle{
    background-color: rgb(255, 253, 215);
  }

</style>
