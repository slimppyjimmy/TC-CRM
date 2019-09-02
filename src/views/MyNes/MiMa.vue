<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
             style="margin-top: 10px">

      <div style="border-bottom: 1px solid rgba(194,194,194,0.24);width: 100%;">
        <el-form-item label="原始密码" prop="oldPass" style="width: 400px;margin: 0 auto 10px">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
      </div>

      <div style="border-bottom: 1px solid rgba(194,194,194,0.24);width: 100%;">
        <el-form-item label="密码" prop="pass" style="width: 400px; margin: 10px auto;">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
      </div>

      <div style="border-bottom: 1px solid rgba(194,194,194,0.24);width: 100%;">
        <el-form-item label="确认密码" prop="checkPass" style="width: 400px; margin: 10px auto;">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
      </div>

      <div style="width:800px ;line-height: 40px;margin: 0 auto;">请注意：如果您绑定了QQ，可以直接使用QQ登陆，此处修改密码是指您在客户无忧的密码，并非修改您的QQ密码。</div>
      <el-form-item style="padding-top:10px ;background-color: #f5f5f5;height: 45px;text-align: center">
        <el-button style="width: 90px" type="primary" @click="submitForm('ruleForm')">修改</el-button>
        <el-button style="width: 90px" @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "MiMa",
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          }
              else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            }
            // （判断与后台密码逻辑）
            else {
              callback();
            }
          }
        }
          , 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          age: [
            {validator: checkAge, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>
