<template>
  <div>

    <div>
    <template>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="s_theme" label="主题" width="auto">
<!--          <template slot-scope="scope">-->
<!--             <el-button type="text" @click="">{{s_theme}}</el-button>-->
<!--          </template>-->
        </el-table-column>
        <el-table-column prop="s_time" label="发货时间" width="auto"></el-table-column>
        <el-table-column prop="s_name" label="客户" width="auto"></el-table-column>
        <el-table-column prop="s_order" label="成交订单" width="auto"></el-table-column>
        <el-table-column prop="s_money" label="相关回款金额" width="auto"></el-table-column>
        <el-table-column prop="s_product" label="发货产品" width="auto"></el-table-column>
        <el-table-column prop="s_remarks" label="备注" width="auto"></el-table-column>
        <el-table-column prop="s_Inputperson" label="录入人" width="auto"></el-table-column>
        <el-table-column prop="s_inputtime" label="录入时间" width="auto"></el-table-column>
        <el-table-column prop="s_address" label="收货地址" width="auto"></el-table-column>
        <el-table-column prop="s_personcharge" label="负责人" width="auto"></el-table-column>
        <el-table-column label="操作" width="auto">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
  </div>
</template>

<script>
  // 引进api
  import api from '../../../api/waitsend'

  import shipping from '../../../components/common/ShippingDetails'
  import userinfo from '../../../components/common/userinfo'
  export default {
    name: "history1",
    methods: {
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
      }
    },
    data() {
      return {
        tableData: [
          // {
          //     s_theme: '2019年8月13日发货1个产品',
          //     s_time: '8月13日 (周二) 20点30分',
          //     s_name: '龙泓昊',
          //     s_order: '8月12日，成交金额：70，产品：零食特产－1',
          //     s_money: '',
          //     s_product: '零食特产－1',
          //     s_remarks: '',
          //     s_Inputperson: '闵123',
          //     s_inputtime: '8月13日 (周二) 20点30分',
          //     s_address: '奶茶 1223344556 四川省成都市锦江区合江亭街道成都四川航空',
          //     s_personcharge: '闵123'
          // }
        ]

      }
    },
    components:{
      shipping,
      userinfo,
    },
    created() {

      api.getList().then(res => {
        console.log(res.data)
        this.tableData = res.data[0]
      })
    }

  }
</script>

<style scoped>

  /*-----------------------------*/

  .t-tr > th:last-child {
    border-right: none;
  }


</style>
