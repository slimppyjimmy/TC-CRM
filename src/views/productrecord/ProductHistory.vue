<template>
  <section class="sec">
    <div>
      <ul class="public-tab-nav">
        <router-link to="history1" tag="li">全部(<span>1</span>)</router-link>
        <router-link to="history2" tag="li">今天发货</router-link>
        <router-link to="history3" tag="li">作天发货</router-link>
        <router-link to="history4" tag="li">本月发货</router-link>
        <router-link to="history5" tag="li">上月发货</router-link>
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
                    v-model="value1"
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
    <!--    header-->
    <div class="d-send">
      <div class="d-send2">
        <!--      我自己  的 子菜单------------- -->
        <div class="d-s3">
          <div><span class="el-icon-user"></span>所有成员<span class="el-icon-caret-bottom"></span></div>
          <div class="d-zcd">
            <div class="d-z1">
              <div>指定负责人为:</div>
              <div>我自己</div>
              <div>所有成员</div>
            </div>
            <div class="d-z2">
              <div class="d-z22">
                <div>指定人员</div>
                <div>指定部门</div>
              </div>
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


        <div class="d-s1"><span class="el-icon-close"></span>删除</div>

        <div class="d-s2">
          <div><span class="el-icon-folder-remove"></span>导出<span class="el-icon-caret-bottom"></span></div>
          <div class="d-zhuang2">
            <div>导出选中</div>
            <div>导出搜索结果</div>
            <div>导出所有数据</div>
          </div>
        </div>

        <div class="d-inp">
          <el-input placeholder="输入负责人名字" v-model="khname" clearable size="small"></el-input>
        </div>
        <template>
          <div class="block">
            <el-date-picker v-model="outtime" type="daterange"
                            range-separator="至" start-placeholder="录入日期"
                            end-placeholder="发货日期" size="small"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd"
            >
            </el-date-picker>
            <el-button type="primary" style="height: 30px;width: 75px" @click="searhgoods">搜 索</el-button>
          </div>
        </template>
      </div>

      <!--      导航栏右边的 子菜单------------- -->
      <div class="d-send3">
        <div class="d-s2">
          <div><span class="el-icon-pie-chart"></span>统计<span class="el-icon-caret-bottom"></span></div>
          <div class="d-zhuang2">
            <div>统计选中</div>
            <div class="d-fahuo">统计全部结果</div>
            <div>设置</div>
          </div>
        </div>
        <div class="d-s2"><span class="el-icon-s-unfold"></span>
          <el-button type="text" @click="centerDialogVisible = true">显示列</el-button>

          <el-dialog
            title="自定义显示列"
            :visible.sync="centerDialogVisible"
            width="570px" class="el-dia"
            center>
            <div style="overflow-y:auto;overflow-x:hidden; width:520px; height:450px;">
              <div class="el-div">
                <div class="el-yetou">
                  <div>显示</div>
                  <div>列名</div>
                  <div>排序号</div>
                </div>
                <div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">主题</div>
                    <div class="el-paixu1">
                      <input typeof="number" id="input2"></input>
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">发货时间</div>
                    <div class="el-paixu2">
                      <!--                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">客户</div>
                    <div class="el-paixu3">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">成交订单</div>
                    <div class="el-paixu4">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">发货产品</div>
                    <div class="el-paixu5">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">备注</div>
                    <div class="el-paixu6">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">录入人</div>
                    <div class="el-paixu7">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">录入时间</div>
                    <div class="el-paixu8">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">负责人</div>
                    <div class="el-paixu9">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">物流公司</div>
                    <div class="el-paixu10">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">运单号</div>
                    <div class="el-paixu11">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">收货地址</div>
                    <div class="el-paixu12">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">相关文档</div>
                    <div class="el-paixu13">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">发货编号</div>
                    <div class="el-paixu14">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">仓库</div>
                    <div class="el-paixu15">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                  <div class="el-content">
                    <div class="el-check">
                      <div class="el-box"></div>
                    </div>
                    <div class="el-lieming">评论数</div>
                    <div class="el-paixu16">
                      <!--                                  <input typeof="number" id="input3"></input>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-select">
              <select class="d-s-select">
                <option value ="volvo">在《全部》中生效</option>
                <option value ="saab">--在所有分类中生效--</option>
                <option value="opel">在《今天发货》中生效</option>
                <option value="audi">在《作天发货》中生效</option>
                <option value ="saab">在《本月发货》中生效</option>
                <option value="opel">在《上月发货》中生效</option>
                <option value="audi">在《搜索结果》中生效</option>
              </select>
              <span class="d-s-span">请选择生效的数据分类</span>
            </div>
            <span slot="footer" class="dialog-footer">
             <el-button type="success" @click="centerDialogVisible = false" class="el-s">恢复默认</el-button>
             <el-button type="primary" @click="centerDialogVisible = false" class="el-p">保 存</el-button>
             <el-button @click="centerDialogVisible = false" class="el-b">关 闭</el-button>
          </span>
          </el-dialog>
        </div>

        <div class="d-s2">
          <div><span class="el-icon-s-operation"></span>排序<span class="el-icon-caret-bottom"></span></div>
          <div class="d-pai">
            <div><span></span>发货编号</div>
            <div><span></span>录入时间</div>
            <div><span></span>评论数</div>
            <div><span></span>主题</div>
            <div class="d-fahuo">发货时间</div>
            <div><span></span>物流公司</div>
            <div><span></span>顺序</div>
            <div class="d-fahuo"><span></span>倒叙</div>
            <div><span></span>默认</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <template>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="outGoodsOrderId" label="订单号" width="auto"></el-table-column>
          <el-table-column label="主题" width="auto">
            <template slot-scope="scope">
              <div>
                <shopDetails :data="scope.row"></shopDetails>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="outGoodsOutTime" label="发货时间" width="auto"></el-table-column>
          <el-table-column prop="orderClientName" label="客户" width="auto"></el-table-column>
          <el-table-column prop="orderId" label="成交订单" width="auto">
<!--            <template slot-scope="scope">-->
<!--              <div class="el-color">-->
<!--                <orderdetails :data="scope.row"></orderdetails>-->
<!--              </div>-->
<!--            </template>-->
          </el-table-column>
<!--          <el-table-column prop="s_money" label="相关回款金额" width="auto"></el-table-column>-->
          <el-table-column prop="goodsorderName" label="发货产品" width="auto"></el-table-column>
          <el-table-column prop="outGoodsRemarks" label="备注" width="auto"></el-table-column>
          <el-table-column prop="outGoodsPrincipal" label="录入人" width="auto"></el-table-column>
          <el-table-column prop="orderCreatTime" label="录入时间" width="auto"></el-table-column>
          <el-table-column prop="outGoodAdress" label="收货地址" width="auto"></el-table-column>
          <el-table-column prop="outGoodsPrincipal" label="负责人" width="auto"></el-table-column>
<!--          <el-table-column label="操作" width="auto">-->
<!--            <template slot-scope="scope">-->
<!--              <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">-->
<!--                移除-->
<!--              </el-button>-->
<!--            </template>-->
<!--          </el-table-column>-->
        </el-table>

      </template>
    </div>
    <router-view></router-view>
    <!-----------分页----------->
    <div class="page-list" style="text-align: center">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        :page-count="pageCounts"
      @current-change="changePage"
      >
      </el-pagination>
    </div>

  </section>

</template>

<script>

import shopDetails from '../../components/common/ShippingDetails';
import Orderdetails from '../../components/common/Orderdetails';
import api from '../../api/producthistory';

  export default {
    name: "Product",
    components:{
      shopDetails,
      Orderdetails,
      history
    },
    created (){
      this.getNowList()

    },
    methods: {
      //搜索商品
      searhgoods(){
        let kename=this.khname
        let ttime=this.outtime
        let stattime=alltime[0]
        let endtime=alltime[1]
        if (!stattime) {
          stattime = ''
        }
        if (!endtime) {
          endtime = ''
        }

      },

      getNowList(nowPage=1){

        api.outList({
          pageNum:nowPage,
          pageSize:'1',
        }).then(res =>{
          this.tableData=res.data.list
          console.log(res)
          // console.log(this.tableData)
          let dataArr = this.tableData;
          let newArr = [];
          for (let i = 0; i < dataArr.length; i++){
            let str = '';
            for(let j = 0 ; j < dataArr[i].order.goodOrders.length; j++){
              str += dataArr[i].order.goodOrders[j].goodsorderName+ ',';
            }
            str = str.substr(0,str.length-1)
            newArr.push({
              outGoodsOrderId : dataArr[i].outGoodsOrderId,
              outGoodsTheme : dataArr[i].outGoodsTheme,
              outGoodsOutTime : dataArr[i].outGoodsOutTime,
              orderClientName : dataArr[i].order.orderClientName,
              orderId : dataArr[i].order.orderId,
              goodsorderName : str,
              outGoodsRemarks : dataArr[i].outGoodsRemarks,
              outGoodsPrincipal : dataArr[i].order.orderPrincipal,
              orderCreatTime : dataArr[i].order.orderCreatTime,
              outGoodAdress : dataArr[i].outGoodAdress,
              outGoodsPrincipal1 :dataArr[i].outGoodsPrincipal
            })
          }
          this.tableData = newArr
          // console.log(res.data.list[0].order.goodOrders[0].goodsorderName)
        })
      },
      changePage(nowPage){
        this.getNowList(nowPage)
      },
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
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
    },

    data() {
      return {
        centerDialogVisible: false,
        pageCounts:0, //分页
        orderId : 0,
        value1: true,
        value2: false,
        value3: false,
        //搜索的值
        khname:'',
        outtime:'',
        tableData: [
           //数据数组
        ],
        outstate:[]

      }
    }
  }
</script>

<style lang="less" scoped>

  .el-color:hover{
    color: red;
  }
.sec{
  padding: 10px;
}
/*自定义 模态框*/

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

/*   子路由-------------*/
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
  *{
    margin: 0;
    padding: 0;
  }
  /*.el-input__inner{*/
  /*  height: 32px;*/
  /*}*/
  /*  搜索---------商品*/
  .d-inp{
    width: 150px;
    height: 30px;
    line-height: 30px;
    float: left;
    margin-right: 7px;
    font-size: 13px;
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
  .el-icon-s-custom,
  .el-icon-s-operation,
  .el-icon-close{
    color: #ff6666;
    font-size: 13px;
    margin: 0 7px;
  }
  .el-icon-edit{
    color: #f8a20f;
    font-size: 13px;
    margin: 0 7px;
  }
  /*----------  ---------------------*/
  .d-send {
    width: 99.8%;
    min-height: 50px;
    background-color: white;
    border-right: gainsboro 1px solid;
    border-left: gainsboro 1px solid;
  }

  .d-send2 {
    width: 75%;
    height: 35px;
    background-color: white;
    font-size: 13px;
    float: left;
    margin: 7px 0 0 7px;
  }

  .d-send3 {
    width: 270px;
    height: 35px;
    font-size: 13px;
    float: right;
    margin: 7px 7px 0 0;
  }

  .d-s1 {
    width: 70px;
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

  .d-z22{
    width: 95%;
    height: 32px;
  }
  .d-z22 > div{
    width: 50%;
    float: left;
    text-align: center;
    cursor: pointer;
  }
  .d-z22 > div:hover{
    border-bottom: 1px solid gainsboro;
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
    padding-left: 20px;
  }
  .d-s2:hover > .d-zhuang2{
    display: block;
  }
  /*  -----------------排序的子菜单---------------*/
  .d-pai{
    position: relative;
    width: 155px;
    height: auto;
    background-color: white;
    border: 1px solid gainsboro;
    color: #5d5d5d;
    display: none;
    font-size: 12px;
    z-index: 5;
    margin-left: -86px;
  }
  .d-pai > div{
    padding-left: 20px;
  }
  .d-s2:hover > .d-pai{
    display: block;
  }
  .d-fahuo{
    border-bottom: 1px solid gainsboro;
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
  /*  输入框*/
  #input2{
    width: 50px;
    height: 30px;
    margin: 4px 0 0 15px;
    border: 1px solid gainsboro;
  }
  /*  -----下拉栏-------*/
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .d-select{
    width: 100%;
    height: 50px;
    margin-top: 20px;
  }
  .d-s-select{
    width: 150px;
    height: 30px;
    margin-top: 10px;
    border: #65c4ff;
  }
  .d-s-span{
    color: red;
  }

</style>
