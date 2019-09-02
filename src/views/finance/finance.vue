<template>
  <el-tabs type="border-card">
    <el-tab-pane label="产品详情">
      <el-row :gutter="20">
        <el-col :span="2">
          <div class="grid-content">
              <el-button><i class="el-icon-back"></i>返回</el-button>
          </div>
        </el-col>
<!--        该模块结束-->
        <el-col :span="6">
          <div class="grid-content ">
            <build  style="float: left"></build>
<!--            <el-button  @click="outerVisible"  style="float: left"><i class="el-icon-plus"></i>新建</el-button>-->
<!------------------------------------------------------------------模块----------------------------------------------------------------------------------->
            <modify :tabedata="userData2"  style="float: left"></modify>
<!-----------------------------------------------------------------模块------------------------------------------------------------------------------------->
            <el-button  style="float: left"><i class="el-icon-close"></i>删除</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-light" style="line-height: 36px">
          &nbsp;产品信息
        </div></el-col>
      </el-row>
      <el-form   style="width: 100%"  :label-position="labelPosition"  :model="formLabelAlign"  label-width="80px">
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="产品分类:">
              <span>{{userData2.goodsTypeId}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="产品名称:">
              <span>{{userData2.goodsName}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="9" :offset="3">
            <el-form-item label="条码:">
              <span>{{userData2.goodsCode}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="产品图片:">
              <span>{{kehu}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="销售单价:">
              <span>{{userData2.goodsPrice}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="9" :offset="3">
            <el-form-item label="成本:">
              <span>{{userData2.goodsCosting}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="单位:">
              <span>{{userData2.goodsUnit}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="9" :offset="3">
            <el-form-item label="状态:">
              <span>{{userData2.goodsName}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="销售状态:">
              <span>{{userData2.goodsStatusId}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="9" :offset="3">
            <el-form-item label="产品类型:">
              <span>{{kehu}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="上市时间:">
              <span>{{userData2.goodsSell}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="介绍:">
              <span>{{userData2.goodsDesc}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <!--<el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="相关文档:">
              <span>{{kehu}}</span>
            </el-form-item>
          </el-col>
        </el-row>-->
      </el-form>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-light" style="line-height: 36px">
          &nbsp;基本信息
        </div></el-col>
      </el-row>
      <el-form   style="width: 100%"  :label-position="labelPosition"  :model="formLabelAlign"  label-width="80px">
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="产品分类:">
              <span>{{userData2.goodsTypeId}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="产品名称:">
              <span>{{userData2.goodsName}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="9" :offset="3">
            <el-form-item label="条码:">
              <span>{{userData2.goodsCode}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="产品图片:">
              <span>{{kehu}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="销售单价:">
              <span>{{userData2.goodsPrice}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="9" :offset="3">
            <el-form-item label="成本:">
              <span>{{userData2.goodsCosting}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="单位:">
              <span>{{userData2.goodsUnit}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="9" :offset="3">
            <el-form-item label="状态:">
              <span>{{userData2.goodsName}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="销售状态:">
              <span>{{userData2.goodsStatusId}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="9" :offset="3">
            <el-form-item label="产品类型:">
              <span>{{kehu}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="上市时间:">
              <span>{{userData2.goodsSell}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="介绍:">
              <span>{{userData2.goodsDesc}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <!--<el-row style="margin-bottom: 0">
          <el-col :span="9" :offset="3">
            <el-form-item label="相关文档:">
              <span>{{kehu}}</span>
            </el-form-item>
          </el-col>
        </el-row>-->
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import modify from '../../components/common/modify'
  import build from '../../components/common/build'
  import api from '../../api/finance'
  //../components/common/modify
  export default {
    name: "finance",
    data() {
      return {
        //user值
        user:'',
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
        options: [{
          value: '选项1',
          label: '第一级示例1'
        }, {
          value: '选项2',
          label: '第一级示例2'
        }, {
          value: '选项3',
          label: '第一级示例3'
        }, {
          value: '选项4',
          label: '第一级示例4'
        }, {
          value: '选项5',
          label: '第一级示例5'
        }],

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
      //组件
      getUser(msg){
        this.user = msg
      },


      /*querySearch(queryString, cb) {
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      */
      //bunengshan
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    // mounted() {
    //   this.restaurants = this.loadAll();
    // },
    components:{
      build,
// 2.在父组件中注册子组件
      modify
  },
    created() {
      // console.log( this.$route.query.id)
      let goodsId=this.$route.query.id
      api.getinfo({
        //  返给后台进入页面渲染所需参数
        goodsId
      }).then(res=>{
        console.log(res)
        this.userData2=res.data
      })

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
