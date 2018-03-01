<template>
  <div class="content-container">
    <div class="content-left">
      <left></left>
    </div>
    <div class="content-right">
      <div class="content-right-title">
        <h2>{{datas.title}}</h2>
      </div>
      <div class="content-right-meta">
        <time class="meta-time">{{datas.time}}</time>
        <span class="meta-category">node.js</span>
      </div>
      <div class="content-right-mark">
        <div class="markdown-body" v-html="datas.content"></div>
        <!--<mavon-editor default_open="preview" :toolbarsFlag="false" :subfield="false"  -->
        <!--style="width:100% ;height: 100% " class="editor"></mavon-editor>-->
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from "axios";
  import Left from '@/components/blogleft.vue'
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'


  export default{
    data() {
      return {
        datas: [],
        id: ''
      }
    },
    created() {
      this.id = this.$route.query.id;
      const that = this;
      axios.post('/api/article-table-handle', {id: this.id, act: 'first'})           //获取数据刷新表格
        .then(function (res) {
          that.datas = res.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    components: {
      Left,
      mavonEditor
    }

  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .content-container
    background-color: white
    width: 100%
    height: 100%
    color: black
    font-size: 20px
    /*.content-left*/
      /*position: fixed*/
      /*width: 28%*/
      /*height: 100%*/
      /*background-color: #36626A*/
    .content-right
      margin-left: 28%
      padding-top: 50px
      padding-bottom: 100px
      width: 72%
      background-color: white
      .content-right-title
        margin: 0 auto
        width: 60%
        height: 30px
        background-color: white
        text-align: center /*文字水平居中对齐*/
        line-height: 30px
      .content-right-meta
        width: 80%
        margin: 20px auto
      .content-right-mark
        margin: 50px auto
        height: 90%
        width: 80%

    @media screen and (max-width: 900px)
      .content-left
        position: absolute
        top: 0
        background-color: pink
        width: 100%
        height: 30%

      .content-right
        position: absolute
        top: 30%
        background-color: blue
        margin-left: 0
        width: 100%
        height: 70%
</style>
<style lang="css" type="text/css">
  @import "../assets/css/markdown.css";
</style>
