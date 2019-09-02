<template>
  <div class="choiceGoodBtn">

    选择商品按钮，弹出模态框
    <el-button type="primary"
               icon="el-icon-plus"
               size="small"
               @click="dialogChoiceGood = true; openDialog()">选择产品
    </el-button>
    <el-dialog title="选择产品"
               :visible.sync="dialogChoiceGood"
               class="goodsDialog"
               top="0"
               width="800px"
               style="position:relative"
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
                <td><img :src="item.img" alt=""></td>
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
              {{ item }}
            </li>
          </ul>
        </el-col>
      </el-row>

      确定和取消
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogChoiceGood = false">取 消</el-button>
        <el-button type="primary" @click="dialogChoiceGood = false; sendGoodsId">确 定</el-button>
      </span>

      <div class="line"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: 'choiceGoodsBtn',
    data() {
      return {
        dialogChoiceGood: false, // 模态框
        searchVal: '', // 搜索值
        goodsTypes: [

        ], // 商品类别option
        nowType: '', // 选中的商品类别
        choiceGoods: [], // 选中的商品名称集合
        choiceGoodsId : [], // 选中的商品Id
        goodsData: [] // 商品数据,
      };
    },
    methods: {
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
        if(!this.choiceGoods.includes(name)){
          this.choiceGoods.push(name);
          this.choiceGoodsId.push(id)
        }else{
          return false
        }
      },

      // 删除已选择的商品
      delGoods(index) {
        this.choiceGoods.splice(index, 1);
        this.choiceGoodsId.splice(index, 1)
      },

      // 给父组件传递选择的商品ID数组
      sendGoodsId(){
        this.$emit('choiceGoodsId',this.choiceGoodsId)
      }
    },
    computed: {
      // 选中商品的数量
      goodsLength() {
        return this.choiceGoods.length
      },
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
    }
  }
</script>

<style scoped lang="less">
  .choiceGoodBtn {
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

    .noGoods {
      margin-top: 40px;
      position: relative;
      width: 100%;
      height: 290px;

      .noGoodsTip {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        img {
          width: 100px;
          line-height: 0;
        }

        p {
          padding: 15px 0;
          letter-spacing: 1px;
        }
      }
    }

    .confirmTitle {
      padding: 10px 0;

      .confirmCount {
        padding: 0 3px;
        font-weight: 700;
        color: #ff3a42;
      }
    }

    .row {
      margin: 5px 0;

      &.first {
        margin-top: 0;
      }

      &.last {
        margin-bottom: 0;
      }
    }

    .choiceGoods {
      height: 290px;
      border: 1px solid #ededed;
      border-radius: 3px;
      overflow: auto;

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

    }

    table {
      border-collapse: collapse;
    }

    tr {
      border-bottom: 1px solid #ededed;

      img {
        width: 50px;
        height: 20px;
      }
    }
    .pageList{
      margin-top: 20px;
      text-align: center;
    }
    .goodsMain{
      margin-top: 30px;
      .goodsList{
        height: 280px;
      }
    }

  }

</style>
