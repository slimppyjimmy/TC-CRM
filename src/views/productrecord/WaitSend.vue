<template>
  <section class="sec">
<div>
  <ul class="public-tab-nav">
    <router-link to="send1" tag="li">全部</router-link>
   <router-link to="send2" tag="li">由我创建的</router-link>
    <router-link to="send3" tag="li">抄送给由我的</router-link>

<!--    自定义  -->
   <li>
      <el-button type="text"  @click="centerDialogVisible = true">自定义</el-button>

      <el-dialog
        title="设置待发货订单默认展示页"
        :visible.sync="centerDialogVisible"
        width="500px" class="el-d"
        center>
        <div class="el-div">
          <div class="el-div-1">
            <div>待发货订单</div>
            <div>默认</div>
          </div>
          <div class="el-div-1">
            <div>由我处理的</div>
            <div>
              <el-switch
                v-model="value"
                active-color="#1e9fff"
                inactive-color="#eeeeee">
              </el-switch>
            </div>
          </div>
          <div class="el-div-1">
            <div>由我创建的</div>
            <div>
              <el-switch
                v-model="value2"
                active-color="#1e9fff"
                inactive-color="#eeeeee">
              </el-switch>
            </div>
          </div>
          <div class="el-div-1">
            <div>抄送给我的</div>
            <div>
              <el-switch
                v-model="value3"
                active-color="#1e9fff"
                inactive-color="#eeeeee">
              </el-switch>
            </div>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="centerDialogVisible = false">保 存</el-button>
    <el-button  @click="centerDialogVisible = false">关 闭</el-button>
  </span>
      </el-dialog>
    </li>

  </ul>

</div>

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
<!--                      <input v-model="input" placeholder="请输入用户名称或者真实姓名搜索" id="input"></input>-->
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
          <div class="d-inp">
            <el-input placeholder="输入客户名字" v-model="kename" clearable size="small"></el-input>
          </div>
          <template>
            <div class="block">
              <el-date-picker v-model="waittime" type="daterange"
                              range-separator="至" start-placeholder="订单开始日期"
                              end-placeholder="订单结束日期" size="small"
                              format="yyyy-MM-dd"
                              value-format="yyyy-MM-dd"
              >
              </el-date-picker>
              <el-button type="primary" style="height: 30px" @click="selectgood">搜 索</el-button>
            </div>
          </template>

        </div>
        <!--        统计，显示列-----------   -->
        <div class="d-send3">
          <div class="d-s2">
            <div><span class="el-icon-pie-chart"></span>统计<span class="el-icon-caret-bottom"></span></div>
            <div class="d-zhuang2">
              <div>等我处理</div>
              <div>我已处理</div>
              <div>全部</div>
            </div>
          </div>
          <div class="d-s2"><span class="el-icon-s-unfold"></span>
            <el-button type="text" @click="centerDialogVisible = true">显示列</el-button>

            <el-dialog
              title="自定义显示列"
              :visible.sync="centerDialogVisible"
              width="570px" class="el-dia"
              center>
              <div class="el-div">
                <div class="el-yetou">
                  <div>显示</div>
                  <div>列名</div>
                  <div>排序号</div>
                </div>
                <div style="overflow-y:auto;overflow-x:hidden; width:520px; height:450px;">
                  <div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">成交/签约时间</div>
                      <div class="el-paixu1">
                        <input typeof="number" id="input2"></input>
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">成交客户</div>
                      <div class="el-paixu2">
                        <!--                  <input typeof="number" id="input3"></input>-->

                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">总数量</div>
                      <div class="el-paixu3">
                        <!--                  <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">成交产品</div>
                      <div class="el-paixu4">
                        <!--                     <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">负责人</div>
                      <div class="el-paixu5">
                        <!--                     <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">发货状态</div>
                      <div class="el-paixu6">
                        <!--                          <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">备注</div>
                      <div class="el-paixu7">
                        <!--                           <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">录入人</div>
                      <div class="el-paixu8">
                        <!--                               <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">录入时间</div>
                      <div class="el-paixu9">
                        <!--                             <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">成交订单</div>
                      <div class="el-paixu10">
                        <!--                           <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">收货人地址</div>
                      <div class="el-paixu11">
                        <!--                               <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">最后发货时间</div>
                      <div class="el-paixu12">
                        <!--                                 <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">发货总次数</div>
                      <div class="el-paixu13">
                        <!--                              <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">物流公司</div>
                      <div class="el-paixu14">
                        <!--                              <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">运单号</div>
                      <div class="el-paixu15">
                        <!--                           <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>
                    <div class="el-content">
                      <div class="el-check">
                        <div class="el-box"></div>
                      </div>
                      <div class="el-lieming">待发货订单编号</div>
                      <div class="el-paixu16">
                        <!--                            <input typeof="number" id="input3"></input>-->
                      </div>
                    </div>

                  </div>
                </div>

              </div>
              <span slot="footer" class="dialog-footer">
             <el-button type="success" @click="centerDialogVisible = false" class="el-s">恢复默认</el-button>
             <el-button type="primary" @click="centerDialogVisible = false" class="el-p">保 存</el-button>
             <el-button @click="centerDialogVisible = false" class="el-b">关 闭</el-button>
        </span>
            </el-dialog>
          </div>
        </div>
        </div>


<!--    表格 ，数据  -->
    <template>
      <el-table ref="multipleTable" :data="goodsdata" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="orderId" label="订单编号" width="auto"></el-table-column>
        <el-table-column prop="orderSignedTime" label="成交/签约时间" width="auto">
          <template slot-scope="scope">
            <div class="el-color">
              <orderdetails :data="scope.row"></orderdetails>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="orderClientName" label="成交客户" width="auto"></el-table-column>
        <el-table-column prop="goodsorderCount" label="总数量" width="auto"></el-table-column>
        <el-table-column prop="goodsorderName" label="成交产品" width="auto"></el-table-column>
        <el-table-column prop="orderPrincipal" label="负责人" width="auto"></el-table-column>
        <el-table-column prop="orderGoodsWaitAlready" label="发货状态" width="auto"></el-table-column>
        <el-table-column prop="goodsorderRemark" label="备注" width="auto"></el-table-column>
        <el-table-column prop="orderCreatMan" label="录入人" width="auto"></el-table-column>
        <el-table-column prop="orderCreatTime" label="录入时间" width="auto"></el-table-column>
        <el-table-column prop="orderSendAddress" label="收货地址" width="auto"></el-table-column>
      </el-table>
    </template>

    <router-view></router-view>
    <!-----------分页----------->
    <div class="page-list" style="text-align: center">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="pageCounts"
        @current-change="changePage"
        :total="100"
        >
      </el-pagination>
    </div>
  </section>

</template>

<script>
  import Orderdetails from '../../components/common/Orderdetails2';
  import api from '../../api/waitsend';
  export default {
    name: "wait",
    components:{
      Orderdetails
    },
    created (){
      this.getNowList()
    },
    methods: {
      getNowList(nowPage=1){
        api.waitList({
          pageNum:nowPage,
          pageSize:'1',
          name:'tyd'
        }).then(res => {
          // this.pageCounts=res.pages;

          console.log(res)
          this.goodsdata = res
        })
      },
      changePage(nowPage){
        this.getNowList(nowPage)
      },
      //搜索----------
      selectgood(){
         let kname=this.kename
        let alltime=this.waittime

        let stattime=alltime[0]
        let endtime=alltime[1]
        if (!stattime) {
          stattime = ''
        }
        if (!endtime) {
          endtime = ''
        }
         console.log(stattime)
         console.log(endtime)
        api.selectgoods({
          clientName:kname,
          startTime:stattime,
          endTime:endtime
        }).then(res=>{
          this.goodsdata=res.data
        }).catch(
          this.goodsdata=[]
          // console.log(11111)
        )
      },
  //     api.selectgoods(){
  //
  //     }.then(res=>{
  //
  // }),

      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(val)
      },


    },
    data() {
      return {
        centerDialogVisible: false,
        pageCounts:0,
        //搜索的值
         waittime:'',
         kename:'',
         value: true,
         value2: false,
         value3: false,
      goodsdata:[]

      };
    },
  }
</script>

<style lang="less" scoped>
  /*  搜索---------商品*/
  .d-inp{
    width: 150px;
    height: 30px;
    line-height: 30px;
    float: left;
    margin-right: 7px;
    font-size: 13px;
  }

  .el-color:hover{
    color: red;
  }
  .sec{
    padding: 10px;
  }

.el-button{
  line-height: 0;
}
  .el-d{
    margin-top: 200px;
  }
  .el-div{
    width: 100%;
    height: auto;
    border: 1px solid gainsboro;
    border-radius: 5px;
    box-shadow: 1px 1px 5px  #dfdfdf;
  }
  .el-div > div{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid gainsboro;
  }
  .el-div > div:last-child{
    border: none;
  }
  .el-div > div:nth-child(1){
    background-color: rgba(214, 221, 255, 0.44);
  }
  .el-div-1 > div{
    width: 49%;
    height: 40px;
    text-align: center;
    float: left;
    line-height: 40px;
  }
  .el-div-1 > div:first-child{
    border-right: 1px solid gainsboro;
  }


/*  ----------------    图标设置------------------*/
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

  /*----------  -搜索， --------------------*/
  .d-send {
    width: 99.8%;
    min-height: 50px;
    background-color: white;
    border-bottom: gainsboro 1px solid;

  }

  .d-send2 {
    width: 82%;
    height: 35px;
    background-color: #fff;
    font-size: 13px;
    float: left;
    margin: 7px 0 0 7px;
  }

  .d-send3 {
    width: 180px;
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
    width: 80px;
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
    padding-left: 5px;
  }
  .d-zhuang2 > div{
    padding-left: 20px;
  }
  .d-s2:hover > .d-zhuang2{
    display: block;
  }

  .d-s1:hover > .d-zhuang{
    display: block;
  }
  .d-s2:hover > .d-zhuang2{
    display: block;
  }

  /*  ----------------显示列的弹窗-----------------*/
  .el-button--text{
    color: black;
  }
  .el-div{
    width: 100%;
    height: auto;
    border: 1px solid gainsboro;
    border-radius: 5px;
  }
  .el-yetou{
    width: 100%;
    height: 40px;
    background-color: rgb(237, 240, 255);
  }
  .el-yetou > div{
    width: 31%;
    height: 40px;
    float: left;
    line-height: 40px;
  }
  .el-yetou > div:first-child{
    margin-left: 15px;
  }
  .el-yetou > div:nth-child(2){
    text-align: center;
  }
  .el-yetou > div:last-child{
    text-align: right;
  }
  .el-content{
    width: 100%;
    min-height: 40px;
    border-bottom: gainsboro solid 1px;
  }
  .el-check{
    width: 10%;
    height: 35px;
    float: left;
  }
  .el-lieming{
    width: 72%;
    height: 35px;
    float: left;
    line-height: 40px;
    padding-left: 15px;
  }
  .el-paixu1,
  .el-paixu2,
  .el-paixu3,
  .el-paixu4,
  .el-paixu5,
  .el-paixu6,
  .el-paixu7,
  .el-paixu8,
  .el-paixu9,
  .el-paixu10,
  .el-paixu11,
  .el-paixu12,
  .el-paixu13,
  .el-paixu14,
  .el-paixu15,
  .el-paixu16{
    width: 15%;
    height: auto;
    float: left;
  }
  .el-box{
    width: 15px;
    height: 15px;
    border: 1px solid gainsboro;
    margin: 12px 0 0 16px;
  }
  /*  --------弹框foot-------------*/
  .el-s{
    width: 70px;
    height: 35px;
  }
  .el-p{
    width: 70px;
    height: 35px;
    margin-left: 280px;
  }
  .el-b{
    width: 70px;
    height: 35px;
    margin-left: 20px;
  }
  /*------------    表格，数据-----------------*/
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
  /*  子路由--------------------*/
  .public-tab-nav{
    padding: 0;
    margin: 0;
    height: 40px;
    border-bottom: 2px solid #1E9FFF;
  }
  .public-tab-nav>li{
    float: left;
    /*padding: 15px;*/
    height: 30px;
    line-height: 30px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
    color: #666;
    border-radius: 5px 5px 0 0;
  }
  .public-tab-nav > li.router-link-active{
    color: white!important;
    background-color: rgba(29, 160, 255, 0.89);
  }

</style>
