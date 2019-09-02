<template>
  <div>
    <div class="po" @click="showDialog">
      <i class="el-icon-plus"></i>修改
    </div>
    <el-dialog
      title="修改仓库"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <div style="text-align: left">
        <div style="background-color:#f5f5f5; padding-left: 8px;font-size: 13px">标注有<span class="color1">*</span>的为必填项</div>
        <div class="content-css">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="仓库名称" prop="warehouseName">
              <el-input v-model="ruleForm.warehouseName" style="width: 200px"></el-input>
            </el-form-item>

            <el-form-item label="仓库类型" prop="warehouseType" style="padding-bottom: 15px;border-bottom: 1px solid #cdcdcd">
              <el-radio-group v-model="ruleForm.warehouseType">
                <el-radio label="普通仓库"></el-radio>
                <el-radio label="残次品仓库"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="仓库管理员" prop="warehouseManager" style="padding: 15px 0;border-bottom: 1px solid #cdcdcd">
              <el-input v-model="ruleForm.warehouseManager" style="width: 200px"></el-input>
            </el-form-item>

            <el-form-item label="联系电话" prop="warehousePhone" style="padding: 15px 0;border-bottom: 1px solid #cdcdcd">
              <el-input v-model="ruleForm.warehousePhone" style="width: 200px"></el-input>
            </el-form-item>

            <el-form-item label="地址" prop="warehouseAddress" style="padding: 15px 0;border-bottom: 1px solid #cdcdcd">
              <el-input v-model="ruleForm.warehouseAddress" style="width: 400px"></el-input>
            </el-form-item>

            <el-form-item label="备注" style="padding: 15px 0;border-bottom: 1px solid #cdcdcd">
              <el-input type="textarea" v-model="ruleForm.warehouseRemark"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import api from '../../api/warehouseControl'
  export default {
    name: "ChangeWarehouse",
    props:['changeinfo'],
    data(){
      return{
        //模态框
        dialogVisible: false,

        ruleForm:{
          warehouseName:'',
          warehouseManager:'',
          warehouseAddress:'',
          warehouseRemark:'',
          warehousePhone:'',
          warehouseType:''
        },
        rules: {
          warehouseName: [
            {required: true, message: '请输入仓库名称', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 3 到 10 个字符', trigger: 'input'}
          ],
          warehousePhone: [
            {required: true, message: '请输入电话号码', trigger: 'blur'},
            {min: 11, max: 11, message: '长度只能为11位且为数字', trigger: 'input'}
          ],
          warehouseAddress: [
            {required: true, message: '请输入仓库地址', trigger: 'blur'},
            {min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'input'}
          ],
          warehouseManager: [
            {required: true, message: '请输入仓库管理员', trigger: 'blur'},
            {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'input'}
          ],
          warehouseType: [
            { required: true, message: '请选择仓库类型', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            if (this.ruleForm.warehouseType === '普通仓库'){
              this.ruleForm.warehouseType=1
            }else{
              this.ruleForm.warehouseType=2
            }
            console.log(this.ruleForm)
            let warehouseUpdate=this.ruleForm

            api.changeWarehouse(warehouseUpdate).then(res=>{
              console.log(res)
            })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      showDialog(){
        this.ruleForm.warehouseName = this.changeinfo.warehouseName
        this.ruleForm.warehouseManager = this.changeinfo.warehouseManager
        this.ruleForm.warehousePhone = this.changeinfo.warehousePhone
        this.ruleForm.warehouseAddress = this.changeinfo.warehouseAddress
        this.ruleForm.warehouseRemark = this.changeinfo.warehouseRemark
        this.ruleForm.warehouseType = this.changeinfo.warehouseType
        this.dialogVisible = true;
      }


    },

  }
</script>

<style scoped>
  .el-icon-plus {
    color: #1E9FFF;
  }
  .color1{
    color: #ff0000;
    padding-left: 5px;
  }
  .content-css input{
    border: 1px solid #e2e6ec;
    width: 200px;
    height: 30px;
    border-radius: 2px;
    transition: all 0.4s;
    margin-top: 5px;
  }
  .addressRow input{
    border: 1px solid #e2e6ec;
    width: 350px;
    height: 30px;
    border-radius: 2px;
    transition: all 0.4s;
    margin-top: 5px;
  }
  .content-css textarea{
    border: 1px solid #e2e6ec;
    width: 450px;
    height: 200px;
    border-radius: 2px;
    transition: all 0.4s;
    margin-top: 5px;
    font-size: 13px;
    max-width: 450px;
    max-height: 200px;
    min-height: 30px;
    min-width: 400px;
    resize: both;
  }
  .content-css textarea:focus{
    -moz-box-shadow:0 0 3px #06c;
    -webkit-box-shadow:0 0 3px #06c;
    box-shadow:0 0 3px #06c;
  }
  .content-css input:focus{
    -moz-box-shadow:0 0 3px #06c;
    -webkit-box-shadow:0 0 3px #06c;
    box-shadow:0 0 3px #06c;
  }

  .chooseBtn a:link,
  .chooseBtn a:visited,
  .chooseBtn a:hover,
  .chooseBtn a:active
  {
    color: #207bd6;
  }
  .chooseBtn a:hover{
    border-bottom: 1px solid #207bd6;
  }
  .chooseBtn i{
    font-weight: bold;
  }

</style>
