<template>

  <div>
    <span class="el-icon-plus" style="color: #1E9FFF;font-size: 18px;font-weight: bold"
          @click="dialogVisible = true"></span>
    新建出库单

    <el-dialog
      title="新建入库单"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="handleClose">
      <el-row  style="border-bottom: 1px solid rgba(187,187,187,0.42);height: 45px;line-height:40px;background-color: rgba(195,195,195,0.3);margin-top: -40px;border-top: 1px solid rgba(187,187,187,0.42)">
        <el-col :span="24" style="line-height: 40px">
          <div class=" bg-purple-light">出库信息</div>
        </el-col>
      </el-row>
      <el-row style="line-height: 40px;border-bottom: 1px solid rgba(187,187,187,0.42);margin-bottom: 5px " >
        <el-col span="1" :offset="1">
          <div class="grid-content bg-purple">仓库:</div>
        </el-col>
        <el-col span="20" >
          <div class="el-icon-plus" style="color: #207BD6">选择</div> <span>*</span>
        </el-col>

      </el-row>

      <span>标题:</span>
      <el-input style="width: 135px" v-model="MyRuDan.outstorageTitle"></el-input>

      <span class="demonstration">入库时间:</span>
      <el-date-picker
        v-model="MyRuDan.inOutTime"
        type="datetime"
        placeholder="选择日期时间"
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
                     @click="dialogChoiceGood = true; openDialog()">选择产品
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
                      <td width="20%">产品图片</td>
                      <td width="60%">产品名称</td>
                      <td width="20%" align="center">选择产品</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) of nowGoodsData" height="40">
                      <td><img :src="item.img" alt="" class="goods-img"></td>
                      <td>{{item.name}}</td>
                      <td align="center">
                        <el-button size="mini"
                                   type="primary"
                                   icon="el-icon-plus"
                                   @click="addGoods(index, item.name, item.id)"
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
                    layout="prev, pager, next"
                    :total="50">
                  </el-pagination>
                </div>
              </el-col>

              <!--已添加的商品-->
              <el-col :span="5" :offset="1">
                <div class="confirmTitle">
                  已选择<span class="confirmCount">{{choiceGoods.length}}</span>个
                </div>
                <ul class="choiceGoods">

                  <li v-for="(item, index) of choiceGoods" class="goods-item">
                    <i class="el-icon-minus" @click="delGoods(index)"></i>
<!--                    {{ item }}-->
                  </li>
                </ul>
              </el-col>
            </el-row>

            <!--确定和取消-->
            <span slot="footer" class="dialog-footer">
        <el-button @click="dialogChoiceGood = false">取 消</el-button>
        <el-button type="primary" @click="dialogChoiceGood = false; sendGoodsId">确 定</el-button>
      </span>

            <div class="line"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </el-dialog>
        </div>
      </div>


      <table style="text-align: center;line-height: 40px;width: 100%" >
        <thead >
        <tr>
          <th style="width: 10%">自定义</th>
          <th style="width: 10%">产品名称</th>
          <th style="width: 10%">出库前总库存</th>
          <th style="width: 10%">出库前仓库库存</th>
          <th style="width: 10%">出库数量</th>
        </tr>
        </thead>
        <tbody >
        <tr >
          <td style="font-size: 16px">
          </td>
          <td style="width: 10%">
            <el-input style="text-align: center"   class="u-input" v-model="MyRuDan.goodsName">{{goodsData.name}}}</el-input>
          </td>
          <td>
            <el-input v-model="MyRuDan.warehouseZongCount" disabled="true"></el-input>
          </td>
          <td>
            <el-input v-model="MyRuDan.warehouseCount" disabled="true"></el-input>
          </td>
          <td>
            <!--              此处要加判断>0 <库存-->
            <template>
              <el-input-number v-model="MyRuDan.inOutCount" @change="handleChange(item.p_id)" :min="1"
                               style="width:140px"></el-input-number>
            </template>
          </td>


        </tr>
        </tbody>
        <tfoot>

        </tfoot>
      </table>

      <el-row style="line-height: 40px;border-bottom: 1px solid rgba(187,187,187,0.42);margin-bottom: 5px " >
        <el-col span="2" :offset="1">
          <div class="grid-content bg-purple">出库负责人:</div>
        </el-col>
        <el-col span="20" >
          <div class="el-icon-plus" style="color: #207BD6">选择</div>
          <span>*</span>
        </el-col>
        <!--        <span>*</span>-->
      </el-row>
      <!--      <span>入库负责人：</span>-->
      <!--      <span class="el-icon-plus" style="color: #207BD6" v-model="MyRuDan.operator">选择</span>-->
      <!--      <span>*</span>-->
      <div style="width: 80%;margin: 10px auto">
        备注：
        <el-input style="width: 80%;margin: 0 auto"
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="MyRuDan.outstorageRemark">
        </el-input>
      </div>

      <span slot="footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="lijichudan">立即出库</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import api from '../../api/ChuDan'

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
        choiceGoods: [], // 选中的商品名称集合
        choiceGoodsId: [], // 选中的商品Id
        goodsData: [
          {
            name:'小米'},
          {
            name:'华为'
          },

        ], // 商品数据,


        dialogVisible: false,

        MyRuDan: {
          "goodsName": "java",
          "goodsNameId": 8,
          "outstorageTitle": "", //标题
          "inOutCount":"" ,
          "warehouseName": "测试厂库8", //仓库名
          "warehouseNameId": 8,//仓库名id
          "warehouseCount": "0",
          "warehouseZongCount": "0",
          "inOutTime": '',
          "operator": "张三", //负责人
          "outstorageRemark": "哈哈哈哈哈1",//备注
          "outStorageNeedSend": 0, //入库类型 0 1 2

        }
      };
    },
    methods: {
      lijichudan() {
        api.getData(this.MyRuDan).then(resp => {
          console.log(resp)

        })

        // this.dialogVisible = false;.
        // this.$axios.post('/java/InStorageSave',this.MyRuDan)
        //   .then(res=>{
        //     console.log('返回的数据',res)
        //   },error=>{
        //     console.log(error)
        //   })
        // api.sendData({}).then(resp => {
        //   console.log(resp)
        // })

      },
      // dialogChoiceGood(){
      // this.dialogVisible = true;
      // },
      // deleteList(id) {
      //   let newId = parseInt(id)
      //
      //   this.proTable.splice(newId, 1)
      //   // console.log(this.proTable)
      //   for (let i = 0; i < this.proTable.length; i++) {
      //     this.proTable[i].p_id = i
      //   }
      // },
      // addProList() {
      //
      //   this.proTable.push({
      //     p_id: '0',
      //
      //     p_beforeSum: '1',
      //     p_sum: 1,
      //
      //     p_num: 1,
      //     p_price: 55,
      //   })
      //   //给数组里所有对象根据下标赋予值
      //   for (let i = 0; i < this.proTable.length; i++) {
      //     this.proTable[i].p_id = i
      //   }
      // },


      // 打开模态框请求商品类别数据和所有商品数据
      openDialog() {
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
          this.choiceGoods.push(name);
          this.choiceGoodsId.push(id)
        } else {


          return false
        }
      },

      // 删除已选择的商品
      delGoods(index) {
        this.choiceGoods.splice(index, 1);
        this.choiceGoodsId.splice(index, 1)
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
      this.getdata()
    }


  }
</script>

<style scoped>
  .choiceGoodBtn {
    display: inline-block;
  }
  /*.el-input__inner{*/
  /*  text-align: center!important;*/
  /*}*/

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
