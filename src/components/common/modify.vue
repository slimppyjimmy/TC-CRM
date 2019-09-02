<template>
  <div>
    <el-button  @click="outerVisible2 = true" style="margin-left: 0"><i class="el-icon-edit"></i>修改</el-button>
    <!--            以下是 修改下面的模态框-->
    <el-dialog title="修改产品信息" :visible.sync="outerVisible2" width="80%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!--                以下是 灰色提示条纹-->
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-light" style="line-height: 36px">
            标注有 * 的为必填项
          </div></el-col>
        </el-row>
        <el-row style="margin-bottom: 0;">
          <el-form-item label="产品分类:">
            <el-col :span="6">
              <el-select v-model="tabedata.TypeId" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="产品名称:" style="padding-left: 30px">
              <el-col>
                <el-input v-model="tabedata.goodsName"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="条码:" style="padding-left: 195px">
              <el-input v-model="tabedata.goodsCode" placeholder="请输入条码" clearable></el-input>
            </el-form-item>
            <el-form-item style="color: #909399">
              可扫码录入
            </el-form-item>
          </el-form>
        </el-row>
        <!--                下一个模块-->
        <!--                图片上传-->
        <el-form-item label="产品图片">
          <el-button  size="mini" @click="innerVisible2 = true">
            <i  class="el-icon-plus" >选择图片</i>
          </el-button>
          <el-dialog title="选择图片"
                     width="30%"
                     :visible.sync="innerVisible2"
                     append-to-body>
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-dialog>
        </el-form-item>
        <!--                上传图片结束-->
        <el-form :inline="true" :model="formInline" class="demo-form-inline" style="padding-left: 30px">
          <el-form-item label="销售单价:">
            <el-input v-model="tabedata.goodsPrice" placeholder="请输入" clearable></el-input>
          </el-form-item>
          <el-form-item label="成本:" style="padding-left: 190px">
            <el-input v-model="tabedata.goodsCosting" placeholder="请输入" clearable></el-input>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="formInline" class="demo-form-inline"  style="padding-left: 55px">
          <el-form-item label="单位:">
            <el-select v-model="tabedata.goodsUnit" placeholder="活动区域">
              <el-option label="个" value="ge"></el-option>
              <el-option label="台" value="tai"></el-option>
              <el-option label="部" value="bu"></el-option>
              <el-option label="箱" value="xiang"></el-option>
              <el-option label="包" value="bao"></el-option>
              <el-option label="年" value="nian"></el-option>
              <el-option label="月" value="yue"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态:" style="padding-left: 190px">
            <el-select v-model="tabedata.goodsStatusId">
              <el-option label="上架" value="one"></el-option>
              <el-option label="下架" value="two"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="formInline" class="demo-form-inline"  style="padding-left: 30px">
          <el-form-item label="销售状态:">
            <el-select v-model="tabedata.goodsSell">
              <el-option label="上架" value="up"></el-option>
              <el-option label="下架" value="down"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品类型:" style="padding-left: 160px">
            <el-select v-model="formInline.region4">
              <el-option label="未归类" value="weiguilei"></el-option>
              <el-option label="成品" value="chengpin"></el-option>
              <el-option label="半成品" value="banchengpin"></el-option>
              <el-option label="原材料" value="yuancailiao"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form-item label="上市时间:" required>
          <el-col :span="4">
            <el-form-item>
              <el-date-picker type="date" placeholder="选择日期" v-model="tabedata.goodsTtm" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <!--                模态框说明模块-->
        <el-form-item label="介绍:">
          <el-col :span="12">
            <el-input type="textarea" v-model="tabedata.goodsDesc"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="lijichudan">确认修改</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>
<script>
  import api from '../../api/finance'
  export default {
    name: "modify",
    props:['tabedata'],
    data() {
      return {
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        labelPosition: 'left',
        input: '',
        formInline: {
          user: '',
          region: '',
          region1: '',
          region2: '',
          region3: '',
          region4: ''
        },
        userData2:{
          goodsId:'',
          goodsTypeId:'',
          goodsName:'',
          goodsCode:'',
          goodsPrice:'',
          goodsCosting:'',
          goodsUnit:'',
          goodsStatusId:'',
          goodsSell	:'',
          goodsTtm:'',
          goodsDesc:'',
          warehouseId:''
        },

        userData1:{
          id:'',
          time:'',
          amount:'',
          number:'',
          total:'',
          cost:'',
          profit:'',
          idNumber1:'',
          idNumber2:'',
          stock:'',
          goods1:'',
          goods2:'',
          stock1:'',
          stock2:''
        },
        //新组件数据
        paramData:[
          {acronym:'D',
            name:'第一级示例1',
            operate:'修改 删除 设置下级'
          },
          {acronym:'D',
            name:'第一级示例2',
            operate:'修改 删除 设置下级'
          },
          {acronym:'D',
            name:'第一级示例3',
            operate:'修改 删除 设置下级'
          }
        ],
        options: [
          {
            value: '选项1',
            label: '第一级示例1'
          }
        ],
        kehu:'客户VIP服务',

        //数据
        goodsTypeId: '',
        goodsName	: '',
        goodsCode	: '',
        goodsPrice	: '',
        goodsCosting	: '',
        goodsUnit	: '',
        goodsStatusId	: '',
        goodsSell	: '',
        goodsTtm	: '',
        goodsDesc	: '',
        warehouseId	: '',



        num: 1,
        value1: true,
        value2: false,
        restaurants: [],
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        state1: '',
        state2: '',
        activeName: 'second',
        outerVisible: false,
        outerVisible2: false,
        innerVisible: false,
        innerVisibleA: false,
        innerVisible1: false,
        innerVisible2: false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        dialogFormVisible1: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          date3: '',
          date4: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        ruleForm: {
          name: '',
          name1: '',
          name2: '',
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
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          name1: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]},
        formLabelWidth: '120px'
      };
    },
    methods: {
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
      handleSelect(item) {
        console.log(item);
      },
      handleChange(value){
        console.log(value);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      formatter(row, column) {
        return row.address;
      },
      onSubmit() {
        console.log('submit!');
      },
      lijichudan() {
        // console.log(12)
        api.getqwe(this.tabedata[0]).then(res => {
          console.log(res)
        })
        /*resetForm(formName){
          this.$refs[formName].resetFields();
        }*/
      },
      // submitForm(formName) {
      //   this.$refs[formName].validate((valid) => {
      //     api.getqwe({
      //       //  返给后台进入页面渲染所需参数
      //       'tabedata':this.tabedata
      //     }).then(res=>{
      //       console.log(res)
      //       this.tabedata=res.data
      //     })
      //   });
      // },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
      // this.restaurants = this.loadAll();
    },
    created() {

    }
  }

</script>

<style scoped>
  .el-icon-search {
    color: #1E9FFF;
  }

  /*.el-icon-plus {*/
  /*  color: #1E9FFF;*/
  /*}*/

  .el-icon-edit {
    color: #F8A20F;
  }

  .el-icon-close {
    color: #FF6666;
  }

  .el-icon-folder-add {
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
  }


  /*以下是的布局*/
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  /* 以下是下拉菜单*/
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
