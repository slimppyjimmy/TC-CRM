<template>
  <div>
    <el-button @click="centerDialogVisible = true">
      <div class="d-num"><span class="el-icon-plus"></span>修改新成员</div>
    </el-button>

    <el-dialog
      title="添加新成员"
      :visible.sync="centerDialogVisible"
      width="830px"
      top="0px"
      center>
      <!--      内容，  -->
      <div>
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名：" prop="user">
            <el-input type="text"
                      v-model="ruleForm.user"
                      autocomplete="off"
                      disabled="true"
                      class="d-input"></el-input>
          </el-form-item>
          <el-form-item label="姓名：" prop="name">
            <el-input type="text" v-model="ruleForm.name" autocomplete="off" class="d-input"></el-input>
            <span> 在各共享资料处会显示此名称</span>
          </el-form-item>
          <el-form-item label="部门">
            <template>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span class="d-fuhao">*</span>
            </template>
          </el-form-item>
          <el-form-item label="职位：">
            <template>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span class="d-fuhao">*</span>
            </template>
          </el-form-item>
          <el-form-item label="手机号：" prop="phone">
            <el-input type="" v-model.number="ruleForm.phone" autocomplete="off" class="d-input"></el-input>
            <span class="d-fuhao">*</span><span> 请务必填写真实有效的手机号</span>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" class="d-input"></el-input>
            <span> <span class="d-fuhao">*</span> 用户的登录密码</span>
          </el-form-item>
          <el-form-item label="邮箱" prop="mailbox">
            <el-input type="text" v-model="ruleForm.mailbox" autocomplete="off" class="d-input"></el-input>
            <span> 请务必填写真实有效的邮箱</span>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Addmembers",
    props : ['title'],
    data() {
      return {
        centerDialogVisible: false,
        //下拉框
        options: [
          {
            value: '选项1',
            label: '普通成员'
          }, {
            value: '选项2',
            label: '管理员'
          }
        ],
        value: '',

        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
          user: '',
          phone: ''
          // name:''
        },
      }
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

  .d-num {
    color: #666666;
  }

  .el-icon-plus {
    color: #1e9fff;
    font-weight: bold;
  }

  .d-input {
    width: 216px;

  }

  .d-fuhao {
    color: red;
  }

</style>
