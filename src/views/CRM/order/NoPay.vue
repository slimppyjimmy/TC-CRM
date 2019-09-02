<template>
  <div>
    <SuccessRecord></SuccessRecord>
    <div>
      <template>
        <el-table
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
            prop="date"
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
            prop="name"
            label="成交客户"
            @click="chooseUser"
            :span-method="arraySpanMethod">
          </el-table-column>
          <el-table-column
            prop="countCj"
            label="成交总额"
            sortable>
          </el-table-column>
          <el-table-column
            prop="countCb"
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
            prop="productName"
            label="成交产品">
          </el-table-column>
          <el-table-column
            label="录入人"
            prop="addP">
          </el-table-column>
          <!--        <el-table-column-->
          <!--          label="录入人"-->
          <!--          :formatter="formatter">-->
          <!--        </el-table-column> -->
        </el-table>
      </template>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[20, 50, 100, 200]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1000" id="pages">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import SuccessRecord from '../../../components/common/successrecord/SuccessRecord'

  export default {
    name: "NoPay",
    components: {
      SuccessRecord,
    },
    data() {
      return {
        //table
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          countCj:'2',
          countCb:'33',
          countLr:'99',
          counts:'20',
          productName:'盘',
          productImg:'product.jpg',
          addP: 'ff_my'
        }, {
          date: '2016-05-04',
          name: '李四',
          countCj:'4',
          countCb:'333',
          countLr:'959',
          counts:'120',
          productName:'飞机',
          productImg:'product.jpg',
          addP: 'ff_my'
        }, {
          date: '2016-05-01',
          name: '留',
          countCj:'1',
          countCb:'66',
          countLr:'99',
          counts:'2550',
          productName:'空间',
          productImg:'worklog.png',
          addP: 'ff_my'
        },
        //   {
        //   date: '2016-05-03',
        //   name: '鲁迅',
        //   countCj:'3',
        //   countCb:'666',
        //   countLr:'989',
        //   counts:'280',
        //   productName:'炸弹',
        //   productImg:'waittask.png',
        //   addP: 'ff_my'
        // }
        ]
      }
    },
    methods: {
      formatter(row, column) {
        console.log('这是row',row)
        console.log('这是column',column)
        console.log('row.address',row.address)
        return row.address
      },
      handleSelectionChange(val) {
        //这是返回选择框一行的值 直接用this.multipleSelection[0].name---这种得到值
        this.multipleSelection = val;
      },
      //这是分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        console.log('这是分页的data：',this.currentPage)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //设置序列号
      indexMethod(index){
        return index+1;
      },
      //点击用户名弹出用户详细资料
      chooseUser(){

      },//点击图片
      chooseProduct(){

      },
      //合并
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      }
    },
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
