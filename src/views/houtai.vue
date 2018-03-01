<template>

  <el-container>
    <el-header  height="100px">
      <img class="img" src="./../assets/image/touxiang.jpg"></img>
    </el-header>
    <el-container>

      <el-aside width="210px">

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
        float :left
        margin:13px 0 0 40px
        border-radius: 50%
        width :70px
        height :70px

    .el-aside
      background-color: #7A9EB1
      color: #333
      text-align: center

    .el-main
      background-color: #E9EEF3
      color: #333
      text-align: center
      line-height: 100px
      overflow-x: hidden



</style>
