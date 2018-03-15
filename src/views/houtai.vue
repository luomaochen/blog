<template>

  <el-container>
    <el-header height="100px">
      <img class="img" src="./../assets/image/touxiang.jpg"></img>
      <el-button @click="back" class="btn" type="primary" plain>注销</el-button>
    </el-header>
    <el-container>

      <el-aside>

        <left></left>

      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>


</template>

<script type="text/ecmascript-6">
  import Left from '@/components/admin/leftbanner.vue'

  export default{
    data() {
      return {
        msg: 'Hello blog'
      }
    },
    methods: {
      back() {
        sessionStorage.removeItem("login");
        this.$router.push('/login');
      }
    },
    created() {
      if (sessionStorage.login != "true") {
        this.$router.push('/login');
      }
    },

    components: {
      Left
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">

  .el-container
    width: 100%
    height: 100%
    .el-header
      background-color: #415865
      .img
        float: left
        margin: 11px 0 0 70px
        border-radius: 50%
        width: 70px
        height: 70px
      .btn
        float: right
        height :30px
        margin-top :27px
        padding-bottom :20px

    .el-aside
      width: 5%
      background-color: #7A9EB1
      color: #333
      text-align: center

    .el-main
      width: 95%
      background-color: #E9EEF3
      color: #333
      text-align: center
      line-height: 100px
      overflow-x: hidden


</style>
