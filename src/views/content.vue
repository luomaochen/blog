<template>
  <div class="content-container">
    <div class="content-left">
      <left class="phone-left"></left>
    </div>
    <div class="content-right">
      <div class="content-right-title">
        {{datas.title}}
      </div>
      <div class="content-right-meta">
        <time class="meta-time">{{datas.time}}</time>
        <span class="meta-category">{{datas.category}}</span>
      </div>
      <div class="content-right-mark">
        <div class="markdown-body" v-html="datas.content"></div>
      </div>
      <div title="回到主页" class="back-blog" @click="goback">
          <span   class="icon-home3"></span>
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
    methods: {
      goback() {
        this.$router.push('/blog');
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
  .back-blog
    position: fixed
    right: 1rem
    bottom: 2em
    &:hover
      cursor: pointer
    span
      font-size:35px
      color:#588D9C
      &:hover
        font-size: 38px


  .content-container
    background-color: white
    width: 100%
    height: 100%
    color: black
    font-size: 20px
    .content-right
      margin-left: 28%
      padding-top: 50px
      padding-bottom: 100px
      width: 72%
      background-color: white
      .content-right-title
        margin: 0 auto
        width: 80%
        background-color: white
        text-align: center /*文字水平居中对齐*/
        line-height: 30px
        font-size :1.3rem
      .content-right-meta
        width: 80%
        margin: 20px auto
        font-size :1rem
      .content-right-mark
        margin: 50px auto
        height: 90%
        width: 80%

    @media screen and (max-width: 900px)
      .content-container
        height :100%
        width :100%
        overflow-y :auto
      .content-left
        position: absolute
        top: 0
        background-color: pink
        width: 100%
        height: 30%
      .content-right
        position: absolute
        top: 30%
        background-color: white
        margin-left: 0
        width: 100%
        height: 45%
        overflow-y :scroll
        .back-blog
          position: fixed
          right: 0.3rem
          bottom: 1rem
        &:hover
          cursor: pointer
        span
          font-size:22px
          color:#588D9C


</style>
<style lang="css" type="text/css">
  @import "../assets/css/markdown.css";
</style>
