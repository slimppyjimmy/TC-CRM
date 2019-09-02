<template>
  <!--    <div>这是报价单的操作栏</div>-->
  <div class="user-nav">
    <div>
      <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
      ></el-autocomplete>
    </div>
    <div>
      <el-button type="text" @click="agDialog"><i class="el-icon-plus"></i>新建成交订单</el-button>
      <el-dialog
        title="新建成交记录"
        :visible.sync="dialogVisible"
        width="70%"
        :before-close="handleClose">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
          <el-form-item label="订单内容">
            <span style="font-size: 12px;color: darkgrey">[标注有<span style="color: red"> * </span>的为必填项]</span>
          </el-form-item>
          <el-form-item label="主题：">
            <el-input v-model="reqData.orderTheme" style="width: 500px"></el-input>
          </el-form-item>
          <el-form-item label="负责人：" prop="fuze">
            <el-input v-model="reqData.orderAuditMan" style="width: 220px"></el-input>
          </el-form-item>
          <el-form-item label="成交客户：" prop="kehu">
            <el-autocomplete
              class="inline-input"
              v-model="reqData.orderClientName"
              :fetch-suggestions="querySearch"
              placeholder="请输入客户名"
              :trigger-on-focus="false"
              @select="handleSelect"
              style="width: 220px"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"><i class="el-icon-plus" style="font-weight: bold;margin-right: 5px"></i>选择产品
            </el-button>
          </el-form-item>
          <el-form-item>
            <table style="width: 100%;margin-left: -75px">
              <thead>
              <tr>
                <th style="width: 50px"></th>
                <th style="width: 75px">操作</th>
                <th style="width: 200px">产品名称</th>
                <th class="th-input">可用库存</th>
                <th class="th-input">成本</th>
                <th class="th-input">销售单价</th>
                <th style="width: 155px">成交数量</th>
                <th class="th-input">总价</th>
                <th class="th-input">折扣</th>
                <th class="th-input">实际成交</th>
                <th style="width: 200px">备注</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in reqData.goodOrders">
                <td style="background-color:#f4f4f4;"></td>
                <td class="operation-icon">
                  <i class="el-icon-plus" @click="addProList()"></i>
                  <i class="el-icon-delete" @click="deleteList(item.p_id)"></i>
                </td>
                <td>
                  <table>
                    <tbody>
                    <tr>
<!--                      此处要添加产品 给我传过来图片的路径-->
<!--                      <td><img :src="'/static/images/'+item.p_img" alt=""></td>-->
<!--                      库存也要-->
                      <td>{{item.goodsorderName}}</td>
                    </tr>
                    </tbody>
                  </table>
                </td>
                <td>{{item.p_kc}}</td>
                <td>
<!--                  成本也要传-->
                  <el-input v-model="reqData.goodOrders[item.p_id].p_cb" class="u-input"
                            :disabled="true"></el-input>
                </td>
                <td>
<!--                  单价也要-->
                  <el-input v-model="reqData.goodOrders[item.p_id].p_dj" class="u-input"
                            @change="handleChange(item.p_id)"></el-input>
                </td>
                <td>
                  <div>
                    <!--              此处要加判断>0 <库存-->
                    <template>
                      <el-input-number v-model="reqData.goodOrders[item.p_id].goodsorderCount"
                                       @change="handleChange(item.p_id)" :min="1"
                                       style="width:140px"></el-input-number>
                    </template>
                  </div>
                </td>
                <td>
                  <el-input v-model="reqData.goodOrders[item.p_id].goodsorderAllprice" class="u-input"
                            :disabled="true"></el-input>
                </td>
                <td>
                  <el-input v-model="reqData.goodOrders[item.p_id].goodsorderDiscount" style="width: 60px" @change="handleChange(item.p_id)"></el-input>
                  %
                </td>
                <td>
                  <el-input v-model="reqData.goodOrders[item.p_id].goodsorderRealityAllprice" class="u-input" @change="handleChange(item.p_id)"></el-input>
                </td>
                <td>
                  <el-input v-model="reqData.goodOrders[item.p_id].goodsorderRemark" style="width: 190px"></el-input>
                </td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td>合计</td>
                <td></td>
                <td>{{reqData.orderGoodsWaitAlready}}</td>
                <td></td>
                <td>{{reqData.c_count}}</td>
                <td>{{reqData.c_zj}}</td>
                <td></td>
                <td>{{reqData.orderAllprice}}</td>
                <td></td>
              </tr>
              </tfoot>
            </table>
          </el-form-item>
          <el-form-item label="成交金额：">
            <el-input :disabled="true" style="width: 10%" v-model="reqData.orderAllprice"></el-input>
            <span>元&nbsp;</span>
            <span class="smallSpan">[折扣</span>
            <el-input v-model="reqData.c_zk" style="width: 5%" prop="name" @change="changInput()"></el-input>
            <span class="smallSpan">%自动计算]</span>
          </el-form-item>
          <el-form-item label="成交时间：" required>
            <el-col :span="6">
              <el-form-item>
                <el-date-picker type="date" placeholder="选择日期" v-model="reqData.orderSignedTime"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="7" :offset="11">
              <template>
                状态：
                <el-select v-model="reqData.orderStatus" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-col>
          </el-form-item>
          <el-form-item label="说明：">
            <el-input
              type="textarea"
              :rows="6"
              placeholder="请输入内容"
              v-model="reqData.orderExplain" style="width: 500px">
            </el-input>
          </el-form-item>
          <el-form-item label="更新客户状态：">
            <el-select v-model="reqData.orderClientStatus" placeholder="请选择">
              <el-option
                v-for="item in userType"
                :key="item.value2"
                :label="item.label"
                :value="item.value2">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发货内容：">
            <span class="smallSpan">[标注有 <span style="color: red">*</span> 的为必填项]</span>
          </el-form-item>
          <el-form-item label="是否需要发货：" prop="name">
            <el-switch
              v-model="reqData.orderIssend"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="收货人地址：" prop="name">
            <el-input v-model="reqData.orderSendAddress" style="width: 500px" placeholder="请输入收货地址"></el-input>
          </el-form-item>
          <el-form-item label="备注：">
            <el-input
              type="textarea"
              :rows="6"
              placeholder="请输入内容"
              v-model="reqData.goodOrders.textarea" style="width: 500px">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addOrder" v-if="btoBc">保存</el-button>
            <el-button type="primary" @click="agOrder" v-if="btoAg">保存修改</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
    <div>
      <el-button type="text" @click="ChangeOrders"><i class="el-icon-edit"></i>修改</el-button>
    </div>
    <div>
      <el-button type="text" @click="deleteOrder"><i class="el-icon-close"></i>删除</el-button>
    </div>
    <div>
      <el-button type="text" @click="secondVisible = true"><i class="el-icon-folder-remove"></i>导出</el-button>
    </div>
  </div>
</template>

<script>
  import api from '../../../api/orderList'
  export default {
    name: "SuccessRecord",
    props:['chooseNum'],
    data() {
      return {
        btoAg:false,
        btoBc:true,
        //返回的值
        reqData: {
          //文档ID？？？如何自增长？，传给
          orderDocId:'',
          orderTheme: '',
          orderAuditMan: '',
          orderClientName: '',
          //成交时间
          orderSignedTime: '',
          //付款状态状态
          orderStatus: '',
          //说明
          orderExplain: '',
          //客户状态
          orderClientStatus: '',
          //是否发货
          orderIssend: '',
          //发货地址
          orderSendAddress: '',
          //table总计数据
          //成交金额
          orderAllprice: '1',
          //成本
          orderTotalCost: '1',
          c_zj: '1',
          c_count: '1',
          c_zk:100,
          //表单内的值
          goodOrders: [
            {
              p_id: 0,
              goodsorderName: '未知商品',
              p_dj: 1,
              goodsorderCount: 1,
              goodsorderAllprice: 1,
              goodsorderDiscount: 100,
              goodsorderRealityAllprice: 1,
              goodsorderRemark: '',
              p_kc: 1,
              p_cb: 1,
              textarea:''
            }
          ]
        },
        //更新客户状态
        userType: [{
          value2: '潜在客户',
          label: '潜在客户'
        }, {
          value2: '意向客户',
          label: '意向客户'
        }, {
          value2: '成交客户',
          label: '成交客户'
        }, {
          value2: '失败客户',
          label: '失败客户'
        }, {
          value2: '已流失客户',
          label: '已流失客户'
        }],
        dialogVisible: false,
        //下拉栏
        options: [{
          value: '未付款',
          label: '未付款'
        }, {
          value: '已付款',
          label: '已付款'
        }, {
          value: '等待发货',
          label: '等待发货'
        }, {
          value: '调试安装',
          label: '调试安装'
        }, {
          value: '已完结',
          label: '已完结'
        }],
        // value: '',
        //  from
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        }
      };
    },
    //输入用户
    mounted() {
      this.restaurants = this.loadAll();
    },
    methods: {
      //修改 删除
      ChangeOrders() {
        this.btoAg=true
        this.btoBc=false
        var newData = this.chooseNum.split(',')
        // console.log(newData)
        // console.log(this.chooseNum)
        if (newData.length !==1) {
          this.open3()
          this.chooseNum = '';
          console.log('这是清空后的',this.chooseNum)
        }else if (newData.length===1) {
          // this.agDialog();
          this.dialogVisible = true
          // console.log('这是请求的',this.chooseNum)
          this.$axios.get('/java/order/editPage?id=' + this.chooseNum)
            .then(res => {
              console.log(res)
              // this.chooseNum='';
              if (res.data.code === 200) {
                var oRes=res.data.data
                var oGoods=oRes.goodOrders
                console.log(oRes)
                this.reqData.orderDocId=oRes.orderDocId
                this.reqData.orderTheme=oRes.orderTheme
                this.reqData.orderAuditMan=oRes.orderAuditMan
                this.reqData.orderClientName=oRes.orderClientName
                this.reqData.orderSignedTime=oRes.orderSignedTime
                this.reqData.orderStatus=oRes.orderGoodsWaitAlready
                this.reqData.orderExplain=oRes.orderExplain
                this.reqData.orderClientStatus=oRes.orderClientStatus
                this.reqData.orderIssend=oRes.orderIssend
                this.reqData.orderSendAddress=oRes.orderSendAddress
                this.reqData.orderAllprice=oRes.orderAllprice
                this.reqData.orderTotalCost=oRes.orderTotalCost
               //原始容器内的table 数组只有一个对象 返回来是多个要增加原始容器
                //把返回的数据里的表格绑入数据
                for (let j=1;j<oGoods.length;j++){
                  this.reqData.goodOrders.push({
                    p_id: 0,
                    goodsorderName: '未知商品',
                    p_dj: 1,
                    goodsorderCount: 1,
                    goodsorderAllprice: 1,
                    goodsorderDiscount: 100,
                    goodsorderRealityAllprice: 1,
                    goodsorderRemark: '',
                    p_kc: 1,
                    p_cb: 1,
                    textarea:''
                  })
                }
                //要赋予下标
                for (let i = 0; i < this.reqData.goodOrders.length; i++) {
                  this.reqData.goodOrders[i].p_id = i
                }
                for(let i=0;i<oGoods.length;i++){
                  this.reqData.goodOrders[i].goodsorderName=oGoods[i].goodsorderName
                  this.reqData.goodOrders[i].goodsorderCount=oGoods[i].goodsorderCount
                  this.reqData.goodOrders[i].goodsorderAllprice=oGoods[i].goodsorderAllprice
                  this.reqData.goodOrders[i].goodsorderDiscount=oGoods[i].goodsorderDiscount
                  this.reqData.goodOrders[i].goodsorderRealityAllprice=oGoods[i].goodsorderRealityAllprice
                  this.reqData.goodOrders[i].goodsorderRemark=oGoods[i].goodsorderRemark
                }
                //调用一次input刷新  即时刷新并触发计算值刷新
                var sumCount = 0, sumZj = 0, sumCj = 0;
                for (let i = 0; i < this.reqData.goodOrders.length; i++) {
                  sumCount += this.reqData.goodOrders[i].goodsorderCount;
                  sumZj += this.reqData.goodOrders[i].goodsorderAllprice;
                  sumCj += this.reqData.goodOrders[i].goodsorderRealityAllprice
                }
                this.reqData.c_count = sumCount;
                this.reqData.c_zj = sumZj;
                this.reqData.orderAllprice = sumCj;
              }
            },error =>{
              console.log(error)
            })
        }
      },
      agDialog(){
        this.dialogVisible = true
        this.btoAg=false
        this.btoBc=true
      },
      deleteOrder() {
        this.$axios.get('/java/order/delete?ids=' + this.chooseNum)
          .then(res => {
            // console.log(res)
            if (res.data.data.code === 200) {
              this.openS()
            }
          })
        // this.chooseNum = []
        //提交要操作的id之后要清空 容器 以防二次点击发送数据
      },
      handleSelect() {
      },
      /*新建订单请求*/
      addOrder() {
        // console.log(this.reqData)
        this.$axios.post('/java/order/setOrder', this.reqData)
          .then(res => {
            // console.log('返回的数据',res)
            if (res.data.code == 200) {
              this.dialogVisible = false
              this.$emit('refreshList')
              this.open2()
            }
          })
      },
      //提交修改
      agOrder(){
        this.reqData.orderId=this.chooseNum
        console.log('这是传过来的：',this.chooseNum)
        console.log('这是orderID：',this.reqData.orderId)
        this.$axios.post('/java/order/edit', this.reqData)
          .then(res => {
            console.log('返回的数据',res)
            if (res.data.code == 200) {
              this.dialogVisible = false
              this.$emit('refreshList')
              this.open2()
            }
          })
      },
      //这是输入用户的
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          // 此处要请求回来所有员工的姓名，放在下面
          {"value": '张山'},
        ];
      },
      //点击添加和删除产品列表
      deleteList(id) {
        let newId = parseInt(id);
        this.reqData.goodOrders.splice(newId, 1);
        for (let i = 0; i < this.reqData.goodOrders.length; i++) {
          this.reqData.goodOrders[i].p_id = i
        }
        // console.log(e.currentTarget)
        // e.currentTarget.parentElement.parentElement.innerHTML = ''
      },
      addProList() {
        // var f=e.currentTarget.parentElement.parentElement;
        // console.log(f)
        this.reqData.goodOrders.push({
          p_id: 0,
          goodsorderName: '商品',
          p_dj: 1,
          goodsorderCount: 1,
          goodsorderAllprice: 1,
          goodsorderDiscount: 100,
          goodsorderRealityAllprice: 1,
          goodsorderRemark: '',
          p_kc: 1,
          p_cb: 1,
          textarea: ''
        });
        //给数组里所有对象根据下标赋予值
        for (let i = 0; i < this.reqData.goodOrders.length; i++) {
          this.reqData.goodOrders[i].p_id = i
        }
      },
      //  这是加减数量的 总计的
      handleChange(id) {
        this.reqData.goodOrders[id].goodsorderAllprice = this.reqData.goodOrders[id].p_dj * this.reqData.goodOrders[id].goodsorderCount;
        this.reqData.goodOrders[id].goodsorderRealityAllprice = this.reqData.goodOrders[id].goodsorderAllprice * this.reqData.goodOrders[id].goodsorderDiscount * 0.01;
        var sumCount = 0, sumZj = 0, sumCj = 0;
        for (let i = 0; i < this.reqData.goodOrders.length; i++) {
          sumCount += this.reqData.goodOrders[i].goodsorderCount;
          sumZj += this.reqData.goodOrders[i].goodsorderAllprice;
          sumCj += this.reqData.goodOrders[i].goodsorderRealityAllprice
        }
        this.reqData.c_count = sumCount;
        this.reqData.c_zj = sumZj;
        this.reqData.orderAllprice = sumCj;
      },
      //这是改变input输入框
      changInput() {
        this.reqData.orderAllprice = this.reqData.c_zk * this.reqData.orderAllprice * 0.01
      },
      //其他的
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // this.dialogVisible = false;
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '提交成功',
          type: 'success'
        });
      },
      openS() {
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '同时只能编辑一条记录，请只选择一个！',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('操作失败');
      },

    },
    created() {

    }
  }
</script>

<style scoped>
  .show-box {
    margin-top: 10px;
  }

  .show-box div {
    margin: 5px 0;
  }

  .show-row > div {
    float: left;
  }

  .bto-box {
    color: #1E9FFF;
    cursor: pointer;
  }

  .bto-box > i {
    color: #1E9FFF;
  }

  .small-box {
    width: 10%;
    text-align: right;
  }

  .show-row {
    width: 100%;
    float: left;
  }

  .che-date > div {
    float: left;
  }

  .che-date {
    margin-top: -15px !important;
  }

  .people-list {
    border: 1px solid #dbdbdb;
    margin-top: -20px;
    width: 100%;
  }

  .change-list {
    width: 96%;
    margin-left: 2%;
  }

  .c-list {
    width: 100%;
    height: 50px;
    border-top: 1px solid #dbdbdb;
    cursor: pointer;
  }

  .c-list:hover {
    background-color: rgba(255, 249, 143, 0.78);
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

  .el-icon-s-release {
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
    padding-right: 10px;
  }

  .el-icon-s-custom {
    color: #ff745f;
    padding-left: 5px;
  }

  .user-nav {
    background-color: #f3f5f8;
    height: 62px;
  }

  .user-nav > div {
    height: 34px;
    margin-top: 14px;
    float: left;
    line-height: 34px;
    font-size: 12px;
    cursor: pointer;
    border: 1px solid darkgrey;
    margin-left: 10px;
  }

  .user-nav > div > button {
    font-size: 12px;
    padding: 0 10px;
    color: black;
  }

  i {
    margin: 0 5px;
  }

  td > i {
    cursor: pointer;
  }

  td > i:hover {
    color: red;
  }

  img {
    width: 23px;
    height: 23px;
  }

  .smallSpan {
    font-size: 12px;
    color: darkgrey;
  }

  thead {
    background-color: #f4f4f4;
  }

  tfoot {
    background-color: #f4f4f4;
    color: #F8A20F;
  }

  .u-input {
    width: 70px;
  }

  .th-input {
    width: 85px;
  }

  tr > td {
    text-align: center;
  }

  tr > td > input {
    height: 35px;
    line-height: 35px;
  }

  tbody > tr > td:not(:first-child) {
    background-color: #fdfcd6;
  }

  .operation-icon i {
    width: 17px;
    height: 17px;
    font-size: 16px;
    font-weight: bold;
    color: #7ca2c8;
  }

  input {
    text-align: center;
  }


</style>
