<template>

  <div>
    <span class="el-icon-plus" style="color: #1E9FFF;font-size: 18px;font-weight: bold"
          @click="dialogVisible = true"></span>
    新建入库单

    <el-dialog
      title="新建入库单"
      :visible.sync="dialogVisible"
      width="50%">
      <el-row style="margin-top: -40px">
        <el-col :span="24" style="line-height: 40px">
          <div class=" bg-purple-light">入库信息</div>
        </el-col>
      </el-row>
      <el-row style="line-height: 40px;border-bottom: 1px solid rgba(187,187,187,0.42);margin-bottom: 5px ">

      </el-row>
      <span>标题:</span>
      <el-input style="width: 135px" v-model="toSendData.outstorageTitle"></el-input>

      <span class="demonstration">入库时间:</span>
      <el-date-picker
        v-model="toSendData.inOutTime"
        type="datetime"
        placeholder="选择日期时间"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd-HH-mm-ss"
        default-time="12:00:00">
      </el-date-picker>
      <span>*</span>
      <div
        style="margin-top: 5px ;line-height:40px;border-top:1px solid rgba(201,201,201,0.33);border-bottom:1px solid rgba(201,201,201,0.33) ">
        <div class="choiceGoodBtn">

          <!--选择商品按钮，弹出模态框-->
          <el-button type="primary"
                     icon="el-icon-plus"
                     size="small"
                     @click="openDialog">选择产品
          </el-button>
          <el-dialog title="选择产品"
                     :visible.sync="dialogChoiceGood"
                     class="goodsDialog"
                     width="800px"
                     append-to-body
          >
            <!--商品分类选择和商品搜索-->
            <el-row class="row">
              <el-col :span="9">
                <div class="block">
                  <span class="demonstration">产品类别:</span>
                  <el-cascader
                    v-model="nowType"
                    :options="goodsTypes"
                    size="small"
                    @change="handleChange"></el-cascader>
                </div>
              </el-col>
              <el-col :span="8">
                <el-input placeholder="请输入内容"
                          v-model="searchVal"
                          class="input-with-select"
                          size="small"
                >
                  <el-button slot="append" icon="el-icon-search" @click="toSearch"></el-button>
                </el-input>
              </el-col>

            </el-row>

            <!--商品列表和分页-->
            <el-row class="row goodsMain">
              <el-col :span="18">
                <div class="goodsList">
                  <table style="width: 100%" v-if="goodsData.length">
                    <thead v-if="goodsData.length">
                    <tr height="40">
                      <td width="80%">产品名称</td>
                      <td width="20%" align="center">选择产品</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) of nowGoodsData" height="40">
                      <td>{{item.goodsName}}</td>
                      <td align="center">
                        <el-button size="mini"
                                   type="primary"
                                   icon="el-icon-plus"
                                   @click="addGoods(index, item.goodsName, item.goodsId)"
                                   circle>
                        </el-button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <div v-else class="noGoods">
                    <div class="noGoodsTip">
                      <img src="../../../static/images/ku_100.png" alt="">
                      <p>没有商品
                        <router-link to="">
                          <el-button size="mini"
                                     type="success"
                                     class="toProduct">点击去添加
                          </el-button>
                        </router-link>
                      </p>

                    </div>
                  </div>
                </div>
                <div class="pageList">
                  <el-pagination
                    background
                    @current-change="changeList"
                    :page-count="goodsLen"
                    layout="prev, pager, next">
                  </el-pagination>
                </div>
              </el-col>

              <!--已添加的商品-->
              <el-col :span="5" :offset="1">
                <div class="confirmTitle">
                  已选择<span class="confirmCount">{{choiceGoods?1:0}}</span>个
                </div>
                <ul class="choiceGoods">
                  <li class="goods-item">
                    <i class="el-icon-minus" @click="delGoods"></i>
                    {{ choiceGoods}}
                  </li>
                </ul>
              </el-col>
            </el-row>

            <!--确定和取消-->
            <span slot="footer" class="dialog-footer">
        <el-button @click="dialogChoiceGood = false">取 消</el-button>
        <el-button type="primary" @click="sendGoodsId">确 定</el-button>
      </span>
            <div class="line"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </el-dialog>
        </div>
      </div>
      <table style="text-align: center;line-height: 40px;width: 800px">
        <thead>
        <tr>
          <th style="width: 25%">商品编号</th>
          <th style="width: 25%">商品名称</th>
          <th style="width: 25%">入库前总库存</th>
          <th style="width: 25%">入库数量</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style="width: 25%">
            {{MyRuDan.goodsId}}
          </td>
          <td style="width: 25%">
            {{MyRuDan.goodsName}}
          </td>
          <td style="width: 25%">
            {{MyRuDan.goodsZongNums}}
          </td>
          <td style="width: 25%">
            <el-input v-model="addNum" :disabled="isDisabled"></el-input>
          </td>
          <td>
            <el-input-number v-model="inOutCount"
                             @change="numChange"
                             :min="1"
                             style="width:140px"></el-input-number>
          </td>
        </tr>
        </tbody>
        <tfoot>

        </tfoot>
      </table>
      <div style="width: 80%;margin: 10px auto">
        备注：
        <el-input style="width: 80%;margin: 0 auto"
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="toSendData.outstorageRemark">
        </el-input>
      </div>

      <span slot="footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="lijiruku">立即入库</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
  import api from '../../api/rudan'
  import getGoodApi from '../../api/productControl'

  export default {
    name: "RuDan",
    components: {
      // choiceGood
    },
    data() {

      return {
        dialogChoiceGood: false, // 模态框
        searchVal: '', // 搜索值
        goodsTypes: [], // 商品类别option
        nowType: '', // 选中的商品类别
        choiceGoods: '', // 选中的商品名称
        choiceGoodsId: [], // 选中的商品Id
        goodsData: [], // 商品数据,

        addNum : '', // 需要入库的数量

        isDisabled : true,


        goodsLen : 0, // 分页数量

        inOutCount : 1,


        dialogVisible: false,

        MyRuDan: {},

        toSendData : {
          outStorageNeedSend : 0,
          warehouseName : '默认仓库',
          warehouseNameId : 1,
          warehouseCount : 50,
          goodsName : '',
          goodsNameId : 0,
          warehouseZongCount : '',
          outstorageTitle : '',
          inOutCount : '',
          outstorageRemark : '暂无',
          inOutTime :'',
          operator : '管理员'
        }
      };
    },
    methods: {
      numChange(val){
        this.addNum  = val
      },
      sendGoodsId() {
        this.dialogChoiceGood = false;
        api.checkGoodsInfo(this.choiceGoodsId).then(res => {
          this.MyRuDan = res.data
          this.isDisabled = false;
          this.addNum = 1
        })
      },

      getNowList(nowPage = 1) {
        getGoodApi.getProductList({
          page: nowPage,
          pageSize: 4
        }).then(res => {
          this.goodsLen = res.data.pages
          console.log(this.goodsLen)
          this.goodsData = res.data.list
        })
      },
      changeList(val) {
        this.getNowList(val)
      },
      lijiruku() {
        this.toSendData.inOutCount = this.addNum
        this.toSendData.goodsName = this.MyRuDan.goodsName
        this.toSendData.goodsNameId = this.MyRuDan.goodsId
        this.toSendData.warehouseZongCount = this.MyRuDan.goodsZongNums

        api.sendData(this.toSendData).then(resp => {
          console.log(resp)
        })

      },



      // 打开模态框请求商品类别数据和所有商品数据
      openDialog() {
        this.dialogChoiceGood = true;
        this.getNowList()
      },

      // 点击搜索商品
      toSearch() {
        let searchVal = this.searchVal;
        let nowType = this.nowType;

        // 把搜索值和类型值发到后端请求数据替换goodsData的数据

      },


      // 更改下拉框的回调函数
      handleChange(value) {
      },

      // 选择商品
      addGoods(index, name, id) {
        // 防止重复选择
        if (!this.choiceGoods.includes(name)) {
          this.choiceGoods = name
          this.choiceGoodsId = id
        } else {


          return false
        }
      },

      // 删除已选择的商品
      delGoods(index) {
        this.choiceGoods = '';
      },

    },
    computed: {
      // 监听商品类别，切换商品列表，如果没选择商品类别默认全部商品
      nowGoodsData() {
        let goodsData = this.goodsData;

        if (this.nowType.length) {
          let arr = goodsData.filter(item => {
            return item.type === this.nowType[0]
          });
          return arr;
        } else {
          return goodsData;
        }
      }
    },
    created() {
    }


  }
</script>

<style scoped>
  .choiceGoodBtn {
    display: inline-block;
  }
  .line {
    position: absolute;
    top: 60px;
    width: 95%;
    height: 1px;
    margin: 0 auto;
    background-color: #ededed;
  }

  .line2 {
    position: absolute;
    bottom: 80px;
    width: 95%;
    height: 1px;
    margin: 0 auto;
    background-color: #ededed;
  }

  .line3 {
    position: absolute;
    top: 145px;
    width: 95%;
    height: 1px;
    margin: 0 auto;
    background-color: #ededed;
  }


  .confirmTitle {
    padding: 10px 0;
  }

  .confirmCount {
    padding: 0 3px;
    font-weight: 700;
    color: #ff3a42;
  }


  .row {
    margin: 5px 0;
  }

  .row.first {
    margin-top: 0;
  }

  .row.last {
    margin-bottom: 0;
  }


  .choiceGoods {
    height: 290px;
    border: 1px solid #ededed;
    border-radius: 3px;
    overflow: auto;
  }

  .goods-item {
    padding: 5px 10px;
    border-bottom: 1px solid #ededed;
  }

  i {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 5px;
    background: red;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 16px;
    cursor: pointer;
    user-select: none;
  }


  table {
    border-collapse: collapse;
  }

  tr {
    border-bottom: 1px solid #ededed;
  }

  .goods-img {
    width: 50px;
    height: 20px;
  }

  .pageList {
    margin-top: 20px;
    text-align: center;
  }

  .goodsMain {
    margin-top: 30px;
  }

  .goodsList {
    height: 280px;
  }

  .noGoods {
    margin-top: 40px;
    position: relative;
    width: 100%;
    height: 290px;
  }

  .noGoodsTip {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  img {
    width: 100px;
    line-height: 0;
  }

  p {
    padding: 15px 0;
    letter-spacing: 1px;
  }


  .bg-purple-light {
    background: #e5e9f2;
  }


</style>
