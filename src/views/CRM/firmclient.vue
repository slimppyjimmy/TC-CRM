<template>
  <div class="maincontent" align>
    <div class="tools">
      <div class="tools-btn">
        <el-button type="primary" icon="el-icon-delete" size="medium" @click="delAll">批量删除</el-button>
      </div>
      <div class="tools-btn">
        <newC v-on:receivedata="showchilddata"></newC>
      </div>
      <div class="tools-btn">
        <el-input placeholder="请输入关键词" style="width:300px;" v-model="search"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <div class="table-a">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="30"></el-table-column>
        <el-table-column label="编号" width="64" prop="clientId"></el-table-column>
        <el-table-column label="企业名称" width="157" prop="clientName">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="personinfo(scope.$index, scope.row)"
            >{{scope.row.clientName}}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="获得客户时间" width="109" prop="clientAddtime"></el-table-column>
        <el-table-column label="公司地址" width="109" prop="clientAddress"></el-table-column>
        <el-table-column label="企业电话" width="150" prop="clientTel"></el-table-column>
        <el-table-column label="企业简介" width="150" prop="clientDesc"></el-table-column>
        <el-table-column label="企业负责人" width="150" prop="clientRespName"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <div @click="edit(scope.$index, scope.row)" class="editpart">
              <edit :rowdata="scope.row" v-on:editrecive="apply"></edit>
            </div>

            <el-button size="mini" type="danger" @click="openDialog(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 删除模态框 -->
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <span>删除不可恢复，是否确定删除？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="deleteRow">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 查看模态框 -->
      <el-dialog title="客户信息
      " :visible.sync="showlogVisible">
        <showP :infodata="this.infodata"></showP>
      </el-dialog>
      <el-pagination
        background
        class="pageside"
        layout="prev, pager, next"
        :total="100"
        @pager-count="pageCount"
        @current-change="changelist"
        hide-on-single-page="true"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import edit from "../../views/CRM/firmeidt";
import newC from "../../views/CRM/firmnew";
import showP from "../../views/CRM/firmshowdata";
import api from "../../api/zjw";
export default {
  name: "",
  components: {
    edit,
    newC,
    showP
  },
  data() {
    return {
      pageCount: "0",
      showlogVisible: false,
      dialogVisible: false,
      dellarr: "",
      dormitory: [],
      search: "",
      infodata: []
    };
  },
  methods: {
    getdata(nowPage) {
      api
        .firmgetdata({
           page:nowPage,
            pagesize: 5
        })
        .then(resp => {
          this.dormitory = resp.data.list;
          console.log(787878);
          console.log(resp.data.list);
        });
    },
    openDialog(index, row) {
      (this.dialogVisible = true), (this.id = row.clientId);
    },
    deleteRow() {
      api.firmdelete(this.id).then(resp => {
        this.getdata(1);
      });
      this.$message({
        message: "删除成功",
        type: "success"
      });
      this.dialogVisible = false;
    },
    edit(index, row) {},
    showchilddata(data) {
      this.$message({
        message: "新建成功",
        type: "success"
      });
      this.getdata(1);
    },
    handleSelectionChange(val) {
      // console.log(val)
      var arr = [];
      for (let index = 0; index < val.length; index++) {
        arr.push(val[index].clientId);
      }
      var B;
      B = arr.join(",");
      this.dellarr = B;
       console.log(this.dellarr)
      //  console.log(B);
      // console.log(arr);
    },
    delAll() {
      api.firmdellAll(this.dellarr).then(resp => {
        this.getdata(1);
        this.$message({
          message: "删除成功",
          type: "success"
        });
      });
    },
    changelist(nowPage) {
      this.getdata(nowPage);
    },
    personinfo(index, row) {
      this.showlogVisible = true;
      console.log(777);
      console.log(row);
      this.infodata = row;
    },
    apply(){
      this.$message({
        message: "修改成功",
        type: "success"
      });
      this.getdata(1);
    },
  },
  computed: {
    tableData() {
      const search = this.search;
      if (search) {
        return this.dormitory.filter(data => {
          return Object.keys(data).some(key => {
            return (
              String(data[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.dormitory;
    }
  },
  created() {
    this.getdata(1);
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.pageside{
  position: absolute;
  left: 40%;
}
.tools {
  width: 100%;
  border-left: 1px solid #e2e6ec;
  border-right: 1px solid #e2e6ec;
  border-bottom: 1px solid #e2e6ec;
  background-color: #f4f6f9;
  color: #666;
  height: 50px;
  line-height: 50px;
}
.tools-btn {
  float: left;
  height: 34px;
  margin-left: 30px;
}
.editpart {
  display: inline-block;
}
</style>
