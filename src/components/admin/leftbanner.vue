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


</style>
