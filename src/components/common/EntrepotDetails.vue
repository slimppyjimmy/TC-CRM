<template>
  <div>
    <el-button type="text" @click="showBlock">
      <slot></slot>
    </el-button>

    <el-dialog
      title="仓库详情"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <div style="height: 530px;overflow: auto;">
        <table class="TableList" >
          <tbody>
          <tr>
            <td class="detailsss" colspan="6">&nbsp基本信息</td>
          </tr>
          <tr class="TableLineEdit">
            <td width="15%" align="right">录入人:</td>
            <td width="35%" align="left">{{warehouse.operator}}</td>
            <td width="15%" align="right">录入时间:</td>
            <td width="35%" align="left">{{warehouse.inOutTime}}</td>
          </tr>
          <tr class="TableLineEdit">
            <td width="15%" align="right">入库总数量:</td>
            <td width="35%" align="left">115</td>
            <td width="15%" align="right">入库总次数:</td>
            <td width="35%" align="left">3</td>
          </tr>
          <tr class="TableLineEdit">
            <td width="15%" align="right">最后入库数量:</td>
            <td width="35%" align="left">3</td>
            <td width="15%" align="right">最后入库时间:</td>
            <td width="35%" align="left">明天 (周五) 19点整</td>
          </tr>
          <tr class="TableLineEdit">
            <td width="15%" align="right">出库总数量:</td>
            <td width="35%" align="left">0</td>
            <td width="15%" align="right">出库总次数:</td>
            <td width="35%" align="left">0</td>
          </tr>
          <tr class="TableLineEdit">
            <td width="15%" align="right">最后出库数量:</td>
            <td width="35%" align="left">0</td>
            <td width="15%" align="right">最后出库时间:</td>
            <td width="35%" align="left"></td>
          </tr>
          <tr>
            <td class="detailsss" colspan="6">&nbsp详情</td>
          </tr>
          <tr class="TableLineEdit">
            <td  align="right">仓库编号:</td>
            <td colspan="3">1</td>
          </tr>
          <tr class="TableLineEdit">
            <td width="15%" align="right">仓库名称:</td>
            <td width="35%" align="left">默认仓库</td>
            <td width="15%" align="right">仓管员:</td>
            <td width="35%" align="left">j大壮</td>
          </tr>
          <tr class="TableLineEdit">
            <td width="15%" align="right">联系电话:</td>
            <td width="35%" align="left"></td>
            <td width="15%" align="right">仓库类型:</td>
            <td width="35%" align="left">普通仓库</td>
          </tr>
          <tr class="TableLineEdit">
            <td  align="right">地址:</td>
            <td colspan="3"></td>
          </tr>
          <tr class="TableLineEdit">
            <td  align="right">备注:</td>
            <td colspan="3"></td>
          </tr>

          </tbody>
        </table>
      </div>
      <el-button type="primary" @click="dialogVisible = false" class="delete">关闭</el-button>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    name: "EntrepotDetails",
    data() {
      return {
        dialogVisible: false,
        warehouse: {}
      };
    },
    props : ['data'],
    methods: {
      showBlock(){
        this.dialogVisible = true;
        // console.log(this.data)
        this.warehouse = this.data
        console.log(this.warehouse)
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style scoped>
  .el-dialog__body {
    padding: 30px 0;
  }
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
  .delete {
    color: #666;
    background-color: #fff;
    border-color: #C9C9C9;
    margin-left: 430px;
  }
  .delete:hover {
    color: #666;
    background-color: #f1f1f1;
    border-color: #C9C9C9;
  }
</style>
