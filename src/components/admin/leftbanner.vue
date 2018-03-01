<template>

  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="vertical"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">文章</template>
      <el-menu-item index="1-1">
        <router-link class="article_a" to="/admin/article">写文章</router-link>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">管理</template>
      <el-menu-item index="2-1">修改头像</el-menu-item>
      <el-menu-item index="2-2">修改密码</el-menu-item>
      <el-menu-item index="2-3">
        <router-link class="article_a" to="/admin/manage">文章管理</router-link>
      </el-menu-item>
    </el-submenu>
  </el-menu>


  <!--<div class="left">-->
  <!--<div class="title">My Blog</div>-->
  <!--<div class="img_container">-->
  <!--<img class="img" src="./../../assets/image/touxiang.jpg"></img>-->
  <!--</div>-->
  <!--<div class="select">-->
  <!--<div class="article">-->
  <!--<router-link class="article_a" to="/admin/article">文章</router-link>-->
  <!--</div>-->
  <!--<div class="manage">-->
  <!--<router-link class="manage_a" to="/admin/manage">管理</router-link>-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .el-menu
    height: 100%
    .el-submenu
      margin-top: 50px
      .article_a
        text-decoration: none
        color :white
        padding :10px
  /*.left*/
  /*background-color: #C5F0A4*/
  /*width :100%*/
  /*height :100%*/
  /*.title*/
  /*margin: auto*/
  /*width: 200px*/
  /*height: 100px*/
  /*padding-top: 100px*/
  /*font-size: 30px*/
  /*font-family: FZShuTi*/
  /*font-weight: bold*/
  /*color: #226B80*/
  /*.img_container*/
  /*margin: 15px auto*/
  /*width: 150px*/
  /*height: 150px*/
  /*.img*/
  /*border-radius: 50%*/
  /*width: 100%*/
  /*height: 100%*/
  /*.select*/
  /*margin: 45px auto*/
  /*.article*/
  /*margin: 20px auto*/
  /*font-size: 23px*/
  /*.article_a*/
  /*text-decoration: none*/
  /*color: #226B80*/
  /*.manage*/
  /*margin: 50px auto*/
  /*font-size: 23px*/
  /*.manage_a*/
  /*text-decoration: none*/
  /*color: #226B80*/

</style>
