<template>
  <div>
    <SuccessRecord :chooseNum="chooseBox"></SuccessRecord>
    <div>
      <template>
        <el-table
          ref="multipleTable"
          :data="tableData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <!--        这是自生成编号-->
          <el-table-column
            lable="编号"
            type="index"
            :index="indexMethod">
          </el-table-column>
          <el-table-column
            prop="orderSignedTime"
            label="成交时间"
            sortable>
          </el-table-column>
          <el-table-column
            @click="chooseUser($.event)"
            width="50">
            <template>
              <i class="el-icon-plus"></i>
            </template>
          </el-table-column>
          <el-table-column
            prop="orderClientName"
            label="成交客户"
            @click="chooseUser"
            :span-method="arraySpanMethod">
          </el-table-column>
          <el-table-column
            prop="orderAllprice"
            label="成交总额"
            sortable>
          </el-table-column>
          <el-table-column
            prop="orderTotalCost"
            label="总成本"
            sortable>
          </el-table-column>
          <el-table-column
            prop="countLr"
            label="利润"
            sortable>
          </el-table-column>
          <el-table-column
            prop="counts"
            label="总数量"
            sortable>
          </el-table-column>
          <el-table-column @click="chooseProduct($.enent)" width="50">
            <!-- 图片的显示 -->
            <template slot-scope="scope">
              <img :src="'/static/images/'+scope.row.productImg"  alt="产品"/>
            </template>
          </el-table-column>
          <el-table-column
            prop="goodsorderName"
            label="成交产品">
          </el-table-column>
          <el-table-column
            label="录入人"
            prop="orderAuditMan">
          </el-table-column>
          <!--        <el-table-column-->
          <!--          label="录入人"-->
          <!--          :formatter="formatter">-->
          <!--        </el-table-column> -->
        </el-table>
      </template>
<!--      <div class="block">-->
<!--        <el-pagination-->
<!--          @size-change="handleSizeChange"-->
<!--          @current-change="handleCurrentChange"-->
<!--          :page-sizes="[20, 50, 100, 200]"-->
<!--          :page-size="20"-->
<!--          layout="total, sizes, prev, pager, next, jumper"-->
<!--          :total="Num">-->
<!--        </el-pagination>-->

<!--       -->
<!--      </div>-->
  <div style="text-align: center">
    <el-pagination
      background
      layout="prev, pager, next"
      :page-count="Num"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
    </div>
  </div>
</template>

<script>
  import SuccessRecord from '../../../components/common/successrecord/SuccessRecord'
  export default {
    name: "AllOrder",
    components: {
      SuccessRecord,
    },
    data() {
      return {
        //选择框
        chooseBox:[],
        /*总条数*/
        Num:'',
        // //总页数
        // pages:1,
        //table
        tableData: [
        //   {
        //   orderSignedTime: '2016-05-04',
        //   orderClientName: '李四',
        //   orderAllprice:'4', //成交总额
        //   orderTotalCost:'333',//总成本
        //   countLr:'959', //利润 没有 要写方法
        //   counts:'120', //数量？
        //   orderTheme:'飞机', //没有名称-直接用主题
        //   productImg:'product.jpg',---不要？留在后面再说
        //   orderAuditMan: 'ff_my' //负责人
        // }
        ]
      }
    },
    methods: {
      /*点击分页，请求对应数据*/

      changePage(nowPage){
        this.$axios.get('/hgd/order/list',{
          params:{
            pageNum:nowPage,
            pageSize:5
          }
        })
          .then(res=>{
            console.log(res);
            this.tableData=res.data.data.list;
            this.Num = res.data.data.pages;
            // console.log(this.Num)
            // console.log(this.Num);
            // console.log(res.data.data.pages)
            // console.log(res.data.data.pages)
            // console.log('这是插入的data',this.tableData)
            //便利插入前台对象属性的值,前台计每行数据的利润，
            for(let i=0;i<this.tableData.length;i++){
              var obj=this.tableData[i]
              // console.log(obj)
              obj.goodsorderName=obj.goodOrders[0].goodsorderName
              obj.counts=obj.goodOrders[0].goodsorderCount
              obj.countLr=obj.orderAllprice-obj.orderTotalCost
            }
          },error =>{
            console.log(error)
          })
      },

      // formatter(row, column) {
      //   console.log('这是row',row)
      //   console.log('这是column',column)
      //   console.log('row.address',row.address)
      //   return row.address
      // },
      //提示
      handleSelectionChange(e) {
        this.chooseBox = []
        for (let i = 0; i < e.length; i++) {
          this.chooseBox.push(e[i].orderId)
        }
        this.chooseBox = this.chooseBox.join(',')
        console.log(this.chooseBox)
        console.log(typeof this.chooseBox)
      },
      //设置序列号
      indexMethod(index) {
        return index + 1;
      },
      //点击用户名弹出用户详细资料
      chooseUser() {

      },//点击图片
      chooseProduct() {

      },
      //合并
      arraySpanMethod({row, column, rowIndex, columnIndex}) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },
      refreshList() {
        this.created();
      },
    },
    created() {
      // console.log('执行了')
      this.$axios.get('/hgd/order/list',{
        params:{
          pageNum:1,
          pageSize:5
        }
      })
        .then(res=>{
          console.log(res);
          this.tableData=res.data.data.list;
          this.Num = res.data.data.pages;
          // console.log(this.Num)
          // console.log(this.Num);
          // console.log(res.data.data.pages)
          // console.log(res.data.data.pages)
          // console.log('这是插入的data',this.tableData)
          // this.
          //便利插入前台对象属性的值,前台计每行数据的利润，
          for(let i=0;i<this.tableData.length;i++){
            var obj=this.tableData[i]
            // console.log(obj)
            obj.goodsorderName=obj.goodOrders[0].goodsorderName
            obj.counts=obj.goodOrders[0].goodsorderCount
            obj.countLr=obj.orderAllprice-obj.orderTotalCost
          }
        },error =>{
          console.log(error)
        })
    }
  }
</script>

<style scoped>
  #pages {
    width: 100%;
    text-align: center;
    height: 50px;
    margin-top: 50px;
  }
  img{
    width: 23px;
    height: 23px;
  }
</style>
