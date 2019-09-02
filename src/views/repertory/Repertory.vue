<template>
  <section>
    <div class="pagecaption2_fz">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部(出入库记录)" name="first"></el-tab-pane>
        <el-tab-pane label="入库记录" name="second"></el-tab-pane>
        <el-tab-pane label="出库记录" name="third"></el-tab-pane>
      </el-tabs>
    </div>
    <!--    工具栏-->
    <div class="tools">
      <div class="btn-group" v-show="title === '入库记录' || title === '全部(出入库记录)'">
        <RuDan></RuDan>
      </div>
      <div class="btn-groups" v-show="title === '出库记录' || title === '全部(出入库记录)'">
        <ChuDan></ChuDan>
      </div>

    </div>
    <table id="rptList" class="TableList" width="100%">
      <thead class="TableHeader">
      <tr>
        <td width="17%" align="center" class="notop">创建时间</td>
        <td align="center" class="notop">产品</td>
        <td width="8%" align="center" class="notop">入库/出库量</td>
        <td width="8%" align="center" class="notop">仓库</td>
        <td width="8%" align="center" class="notop">仓库剩余库存</td>
        <td width="8%" align="center" class="notop">剩余总库存</td>
        <td width="8%" align="center" class="notop">操作人</td>
        <td width="15%" align="center" class="notop">入库/出库时间</td>
        <td width="11%" align="center" class="notop">详情</td>
      </tr>
      </thead>
      <tbody>
      <tr class="TableLine1" v-for="(item,index) in list" onmouseover="this.style.backgroundColor='#FFFDD7'"
          onmouseout="this.style.backgroundColor='#FFFFFF'" style="background-color: rgb(255,255,255)">
        <td align="center" style="color: red">{{item.creationTime}}</td>
        <td align="left" class="line-item">{{item.goodsName}}</td>
        <td align="center" style="color: rgb(0, 0, 255)">{{item.inOutCount}}</td>
        <!--        <td align="center"class="line-item">{{item.entrepot}}</td>-->
        <td>
          <EntrepotDetails :data="item">{{item.warehouseName}}</EntrepotDetails>
        </td>
        <td align="center">{{item.warehouseCount}}</td>
        <td align="center">{{item.warehouseZongCount}}</td>
        <td align="center" class="line-item ">
          <!--          <span class="el-icon-s-custom"></span>-->
          <userinfo class="el-icon-s-custom" :data="item">{{item.operator}}</userinfo>
        </td>
        <td align="center">{{item.inOutTime}}</td>
        <!--        <td align="center" class="line-item" @click="dialogVisible = true">{{item.particulars}}</td>-->
        <td>
          <Godown :data="item.id">{{item.details}}</Godown>
        </td>
      </tr>
      <tr class="TableFooter">
        <td colspan="10" align="right">
          <div class="listpager">
            <div>
            </div>
          </div>
        </td>
      </tr>

      </tbody>
    </table>
    <div class="paging">
      <el-pagination
        @current-change="changeList"
        background
        layout="prev, pager, next"
        :page-count="pageCounts"
        hide-on-single-page="true">
      </el-pagination>
    </div>
  </section>
</template>
<script>
  import api from '../../api/Repertory'
  import Godown from '../../components/common/Godown'
  import EntrepotDetails from '../../components/common/EntrepotDetails'
  import userinfo from '../../components/common/userinfo'
  import RuDan from '../../components/common/RuDan'
  import ChuDan from '../../components/common/ChuDan'

  export default {
    name: "Repertory",
    components: {
      Godown,
      EntrepotDetails,
      userinfo,
      RuDan,
      ChuDan
    },
    data() {
      return {
        activeName: 'first',
        list: [],
        pageCounts: 0,
        erro: true,
        succes: true,
        title: '全部(出入库记录)',
        tabIndex: '0'
      }


    },
    methods: {
      handleClick(tab) {
        // console.log(tab.$options.propsData.label);
        // console.log(tab.options.propsData.label);
        // console.log(tab.$options.propsData.label)
        this.title = tab.$options.propsData.label;
        this.tabIndex = tab.index;
        if (this.tabIndex === '0') {
          this.pageCounts = 0;
          this.getNowList(1)
        } else if (this.tabIndex === '1') {
          this.pageCounts = 0;
          api.getList({
            page:1 ,
            pageSize: 5
          }).then(res => {
            this.pageCounts = res.data.pages;
            this.list = res.data.list
          })
        } else if (this.tabIndex === '2') {
          this.pageCounts = 0;
          api.getItem({
            page: 1,
            pageSize: 5
          }).then(res => {
            this.pageCounts = res.data.pages;
            this.list = res.data.list
          })
        }
      },

      getNowList(nowPage) {
        api.getText({
          page: nowPage,
          pageSize: 5
        }).then(res => {
          this.pageCounts = res.data.pages;
          console.log(res.data.list)
          this.list = res.data.list

        })
      },
      changeList(nowPage) {
        switch (this.tabIndex) {
          case '0':
            this.getNowList(nowPage);
            break;
          case '1':
            api.getList({
              page: nowPage,
              pageSize: 5
            }).then(res => {
              // this.pageCounts = res.data.pages;
              this.list = res.data.list
            });
              break;
          case '2':
            api.getItem({
              page: nowPage,
              pageSize: 5
            }).then(res => {
              // this.pageCounts = res.data.pages;
              this.list = res.data.list
            });
                break;
        }
      }

    }
    ,
    // Particulars() {
    //   api.getParticulars({
    //     page: 1,
    //     pageSize: 5
    //   }).then(res => {
    //     console.log(res)
    //     this.list = res
    //
    //   })
    // },
    created() {
      // console.log(1)
      this.getNowList(1)


    }
  }
</script>

<style scoped lang="">
  section {
    position: relative;
  }
  table {
    height: 300px;
  }

  .pagecaption2_fz {
    border-bottom: 2px solid #1E9FFF;
    overflow: hidden;
    background-color: #fff;
    width: 100%;
  }

  .tools {
    width: 100%;
    padding: 10px;
    border-left: 1px solid #e2e6ec;
    border-right: 1px solid #e2e6ec;
    border-bottom: 1px solid #e2e6ec;
    background-color: #f4f6f9;
    color: #666;
    min-height: 40px;
  }

  .btn-group {
    margin-right: 9px;
    border-radius: 3px;
    background-color: #fff;
    float: left;
    width: 100px;
    cursor: pointer;

  }

  .btn-groups {
    margin-left: 10px;
    border-radius: 3px;
    float: left;
    width: 100px;
    cursor: pointer;

  }

  /*.btn-group:hover {*/
  /*  background-color: rgb(244, 246, 249);*/
  /*}*/


  /*.btn-groups:hover {*/
  /*  background-color: rgb(244, 246, 249);*/
  /*  }*/


  /*表单*/
  table, td {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .TableList {
    line-height: 20px;
    font-size: 13px;
    background-color: #fff;
    box-sizing: border-box;
  }

  .TableList .TableHeader td, .TableList td.TableHeader {
    border: 1px #e2e6ec solid;
    color: #666666;
    padding: 5px 5px 5px 5px;
    font-size: 12px;
  }

  .TableList td.notop {
    border-top: 0px;
    border-left: 0;
  }

  .TableList .TableLine1 td {
    height: 46px;
    padding-left: 10px;
    border-top: 1px #f1f1f1 solid;
  }

  .listpager {
    background: #f9fbfd;
    border-radius: 3px;
    border: 1px solid #E4ECF3;
    margin-bottom: 5px;
    float: left;
    position: relative;
    width: 100%;
  }

  .line-item {
    color: #178eb9;
    cursor: pointer
  }

  .line-item:hover {
    color: red;
  }

  .paging {
    text-align: center;
    padding-top: 15px;
  }
</style>
