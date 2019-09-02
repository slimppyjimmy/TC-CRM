<template>
  <div>
    <el-button @click="openAdd">
      <div class="d-num"><span class="el-icon-plus"></span>新增新成员</div>
    </el-button>

    <el-dialog
      title="添加新成员"
      :visible.sync="centerDialogVisible"
      width="830px"
      top="20px"
      center>
      <!--      内容，  -->
      <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名：" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off" class="d-input"></el-input>
            <span> <span class="d-fuhao">*</span> 由汉字、字母、数字、下划线组成，不能是纯数字，长度为2-16位。</span>
          </el-form-item>
          <el-form-item label="姓名：" prop="name">
            <el-input type="text" v-model="ruleForm.name" autocomplete="off" class="d-input"></el-input>
            <span> 在各共享资料处会显示此名称</span>
          </el-form-item>
          <el-form-item label="部门" prop="departmentId">
            <template>
                <el-cascader
                  :options="departments"
                  @change="departmentChange"></el-cascader>
              <span class="d-fuhao">*</span>
            </template>
          </el-form-item>
          <el-form-item label="角色" prop="roleId">
              <el-cascader
                :options="roles"
                @change="roleChange"></el-cascader>
            <span class="d-fuhao">*</span>
          </el-form-item>
          <el-form-item label="手机号：" prop="phone">
            <el-input type="" v-model.number="ruleForm.phone" autocomplete="off" class="d-input"></el-input>
            <span class="d-fuhao">*</span><span> 请务必填写真实有效的手机号</span>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off" class="d-input"></el-input>
            <span> <span class="d-fuhao">*</span> 用户的登录密码</span>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input type="text" v-model="ruleForm.email" autocomplete="off" class="d-input"></el-input>
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
  import api from '../../api/department'
  export default {
    name: "Addmembers",
    props : ['title'],
    data() {
      //  手机号
      var addphone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字！'));
          } else {
            callback();
          }
        }, 1000);
      };


      return {
        value:[],
        centerDialogVisible: false,
        // 部门列表
        departments: [
          {
            value: '1',
            label: '市场部'
          }, {
            value: '2',
            label: '行政部'
          }
        ],
        // 角色列表
        roles: [
          {
            value: '2',
            label: '普通成员'
          }, {
            value: '1',
            label: '管理员'
          }
        ],

        ruleForm: {
          password: '',
          username: '',
          phone: '',
          departmentId : '',
          name:'',
          roleId : '',
          sid : '',
          pic :''
        },
        rules: {
          password: [
            {required:true,message:'请输入密码', trigger: 'blur'},
            {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
          ],
          username: [
            {required:true,message:'请输入用户名', trigger: 'blur'},
          ],
          phone: [
            {required:true,message:'手机号', trigger: 'blur'},
            {pattern: /^1[34578]\d{9}$/, message: '手机为11位'}
          ],
          name: [
            {required: true, message: '请输入姓名',trigger : 'blur'},
            {min: 2, max: 7, message: '长度在 2 到 7 个字符'},
            {pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文'}
          ],
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
          departmentId : [
            {required: true, message: '请选择部门', trigger: 'blur'},
          ],
          roleId : [
            {required: true, message: '请选择角色', trigger: 'blur'},
          ],
        }
      }
    },
    methods: {
      openAdd(){
        this.centerDialogVisible = true;
        this.ruleForm.sid = this.$tool
      },
      departmentChange(val){
        this.ruleForm.departmentId = Number(val[0])
      },
      roleChange(val){
        this.ruleForm.roleId = Number(val[0])
      },
      // 提交新增用户按钮
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 满足正则调用新增接口
            api.addUser(this.ruleForm).then(res => {
              console.log(res)
            })
          } else {
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
