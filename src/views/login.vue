<template>
  <div class="login-bg">
    <div class="login-center">
      <div class="logo">
        <img src="static/images/logo.png" alt="">
      </div>
      <div class="login-main">
        <h4 class="login-title">账号登录</h4>
        <el-form :model="userForm" status-icon :rules="rules" ref="userForm" class="login-form">
          <el-form-item prop="account">
            <el-input v-model="userForm.account" autocomplete="off" placeholder="用户名/手机号/邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input type="password" v-model="userForm.pwd" autocomplete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-btn" @click="checkForm('userForm')">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="line"></div>
        <div class="form-bottom clearfix">
          <div class="markId">
            <el-checkbox v-model="checked">记住账号</el-checkbox>
          </div>
          <div class="findPwd">
            <router-link to="">找回密码？</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import loginAPI from './../api/login'

  export default {
    name: "Login",
    data: function () {
      return {
        checked: localStorage.getItem('userId') ? true : false,
        rules: {
          account: [
            {required: true, message: '请输入用户名/手机号/邮箱', trigger: 'blur'},
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        userForm: {
          account: localStorage.getItem('userId') || '',
          pwd: ''
        }
      }
    },
    methods: {
      // 提交表单,检查表单的填写规范
      checkForm(formName) {
        let _this = this;

        // 检查表单规范
        this.$refs[formName].validate((valid) => {
          if (valid) { // 符合规范请求登录
            _this.login();
          } else { // 不符合规范提示用户
            return false
          }
        });
      },

      // 登录
      login() {
        if (this.checked) { // 如果点了记住账号，就将账号存入本地存储
          this.saveUserAccount();
        } else { // 取消记住账号，本地存储删除账号
          this.delUserAccount();
        }
        this._loginApi(); // 发起ajax请求
      },

      // 向服务端发送账号和密码，验证登录信息
      _loginApi() {
        let userId = this.userForm.account,
          userPwd = this.userForm.pwd,
          _this = this;
        // ajax请求后台验证登录信息
        loginAPI.login({
          username: userId,
          password: userPwd
        }).then(res => {
          _this._checkLogin(res)
        })
      },

      // 根据服务端返回的信息，如果成功则跳转首页，不成功提示用户
      _checkLogin(res) {
        let target = this.$route.query.redirect ? this.$route.query.redirect : '/';
        if (res.code === 200) {
          this._updateUser(res.data);
          this.$router.push(target)
        } else if (res.code === 400) {
          this.$message({
            message: '账号错误，请重新输入',
            type: 'error'
          })
        }
      },

      // 更新vuex的用户信息，并且本地存储的isLogin = true
      _updateUser(user) {
        this.$store.commit('loginSuccess',user);
      },

      // 将用户名保存在localstorage
      saveUserAccount() {
        let userId = this.userForm.account;
        localStorage.setItem('userId', userId)
      },

      // 删除localstorage里的用户名
      delUserAccount() {
        localStorage.removeItem('userId')
      }
    }
  }
</script>

<style scoped lang="less">
  .login-bg {
    background: url('../../static/images/login_bg.jpg') no-repeat;
    background-size: 100%;
    box-sizing: border-box;
    min-height: 100%;

    .login-center {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 350px;

      .logo {
        width: 30%;
        margin: 0 auto 20px;
      }

      .login-main {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 3px;
        background-color: rgba(5, 5, 5, 0.48);

        .login-title {
          margin-bottom: 30px;
          text-align: center;
          letter-spacing: 1px;
          color: #fff;
        }

        .login-form {
          .el-form-item {
            margin-bottom: 30px;

            .el-form-item__error {
              padding-top: 10px;
            }
          }

          .login-btn {
            width: 100%;
          }
        }

        .line {
          height: 1px;
          background-color: rgba(255, 255, 255, 0.58);
        }

        .form-bottom {
          margin-top: 20px;

          .markId {
            float: left;
          }

          .findPwd {
            float: right;
            a {
              color: #989898;
              font-size: 14px;
              &:hover{
                color: #d6d6d6;
              }
            }
          }
        }
      }
    }
  }
</style>
