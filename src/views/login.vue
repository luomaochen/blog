<template>
  <div class="login-wrap">
    <div class="ms-title">后台管理系统</div>
    <div class="ms-login">
      <el-form :model="loginForm"   label-width="80px" class="demo-ruleForm">
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="password" ></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitart">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from "axios";

  export default{
    name: 'login',

    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        }
      };
    },

    methods: {
      submitart() {
        const that = this;
        axios.post('/api/login', this.loginForm)
          .then(function (res) {
            if (res.data.code === 200) {
              alert(res.data.msg);
              that.$router.push('/admin');
              sessionStorage.login=true;
            } else {
              alert(res.data.msg);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }


</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .login-wrap
    position: relative
    width:100%
    height:100%
  .ms-title
    position: absolute
    top:50%
    width:100%
    margin-top: -230px
    text-align: center
    font-size:30px
    color: #fff
  .ms-login
    position: absolute
    left:50%
    top:50%
    width:300px
    height:160px
    margin:-150px 0 0 -190px
    padding:40px
    border-radius: 5px
    background: #fff
  .login-btn
    text-align: center
  .login-btn button
    width:30%
    height:42px
    font-size :17px
</style>
