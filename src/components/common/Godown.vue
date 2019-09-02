<template>
  <div>
    <el-button type="text" @click="showDialog">
      <slot></slot>
    </el-button>
    <el-dialog
      title="入库单详情"
      :visible.sync="dialogVisible"
      width="55%"
      :before-close="handleClose" >
      <div style="height: 530px;overflow: auto;">
        <table class="TableList" >
          <tbody>
          <tr>
            <td class="detailsss" colspan="6">详情</td>
          </tr>
          <tr class="TableLineEdit">
            <td align="right">入库编号:</td>
            <td>{{list.id}}</td>
            <td align="right">入库来源:</td>
            <td>直接入库</td>
          </tr>
          <tr class="TableLineEdit">
            <td align="right">仓库:</td>
            <td colspan="6">
              <div class="default">{{list.warehouseName}}</div>
            </td>
          </tr>
          <tr class="TableLineEdit">
            <td align="right">标题:</td>
            <td>{{list.outstorageTitle}}</td>
            <td align="right">入库时间:</td>
            <td style="color: red">{{list.inOutTime}}</td>
          </tr>

          <tr class="TableLineEdit">
            <td min-width="30px" align="center"></td>
            <td width="200px" align="left">产品名称</td>
            <td width="150px" align="left">入库总库存</td>
            <td width="150px" align="left">入库前仓库库存</td>
            <td width="150px" align="left">入库数量</td>
            <td width="200px" align="left">备注</td>
          </tr>
          <tr class="TableLineEdit" style="background-color: #FFFDD7;">
            <td>{{list.id}}</td>
            <td>{{list.goodsName}}</td>
            <td>{{list.warehouseCount}}</td>
            <td>{{list.warehouseZongCount}}</td>
            <td>{{list.quantity}}</td>
            <td>{{list.inOutCount}}</td>
          </tr>
          <tr class="TableLineEdit" >
            <td></td>
            <td>合计</td>
            <td></td>
            <td>0</td>
            <td>111</td>
            <td>---</td>
          </tr>
          <tr class="TableLineEdit">

            <td align="right">入库负责人:</td>
            <td colspan="5">{{list.operator}}</td>
          </tr>
          <tr class="TableLineEdit">
            <td align="right">备注:</td>
            <td align="left" colspan="5" style="padding: 5px 3px;color: #323232"></td>
          </tr>
          </tbody>
        </table>
      </div>
      <el-button type="primary" @click="dialogVisible = false" class="delete">关闭</el-button>
    </el-dialog>
  </div>
</template>

<script>
  import api from '../../api/Repertory'
  export default {
    name: "Godown",
    data() {
      return {
        dialogVisible: false,
        list:
          {}

      };

    },
    props : ['data'],
    methods: {
      showDialog(){
        api.getParticulars({
          inventoryRecordsId:1
            }).then(res => {
              console.log(res)
              this.list = res.data

            })
        // console.log(this.data)
        this.dialogVisible = true;
        // console.log(this.data)
        this.list = this.data
        // console.log(this.list)
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    },

  }
</script>

<style scoped>
  .TableList {
    line-height: 20px;
    font-size: 13px;
    border-collapse: collapse;
    background-color: #fff;
    width: 100%;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  .detailsss {
    background-color: #f5f5f5;
    padding: 6px 0;
    border-left: 1px #f1f1f1 solid;
    border-right: 1px #f1f1f1 solid;
    border-top: 1px #f1f1f1 solid;
    height: 30px;

  }
  .TableList .TableLineEdit td, .TableList td.TableLineEdit {
    border-top: 1px #f1f1f1 solid;
    padding-left: 10px;
    height: 46px;
  }
  .TableList td {
    padding: 5px 3px;
    color: #323232;
  }
  .default {
    color: #178eb9;
    line-height: 33px;
    background-color: #DEE7F8;
    padding: 0px 3px 3px 3px;
    border: 1px #CAD8F3 solid;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    height: 26px;
    margin-right: 5px;
    margin-top: 2px;
    cursor: pointer;
    width: 63px;
    text-align: center;
  }
  .default:hover {
    color: red;
  }
  .delete {
    color: #666;
    background-color: #fff;
    border-color: #C9C9C9;
    margin-left: 460px;
  }
  .delete:hover {
    color: #666;
    background-color: #f1f1f1;
    border-color: #C9C9C9;
  }
</style>
