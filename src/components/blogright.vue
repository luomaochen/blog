<template>
  <div class="right">
    <div class="list1">
      <div v-for="data in datas" :key="data" class="list-container">
        <h2 class="list-title">这是第一篇博客</h2>
        <p class="list-description"> 在去年我应 IBM 编辑的邀请写过一篇关于 Swift 2 中 throws 的文章。现在回头看，Swift 2 其实是 Swift 语言发
          展的一个挺重要的节点：如果说 Swift 1 是一个更偏向于验证阶段的产品的话，Swift 2 中加入的特性为这门语言的基
          石进行了补足。在那篇文章里我们主要深入探索了新的 throw 关键字背后的事情，而同一时期其实 Swift
          官方有过一次关于错误处理的讨论。随着 Swift 3 的开源，这些原始文档也被一同公开，展示了 Swift 设计的过程和轨
          迹...…</p>
        <div class="list-meta">
          <time class="list-time">2017-10-9</time>
          <span class="list-category">node.js</span>
          <a class="list-content">阅读全文</a>
        </div>
        <hr class="list-line">
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default{
    data() {
      return {
        datas: [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          mod_id: '',
          title: '',
          category: '',
          description: '',
          content: '',
          delivery: false
        },
        cur_page: 1,
        count: 1,
        id: '',
        busy:true
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .right
    margin-left: 28%
    width: 72%
    height: 100%
    background-color: #028090
    color :#ECFEFF
    .list1
      background-color: #028090
      list-style-type: none
      .list-enter-active, .list-leave-active
        transition: all 2s
      .list-enter, .list-leave-to
        /* .list-leave-active for below version 2.1.8 */
        opacity: 0;
        transform: translateX(100px);
      .list-container
        margin: 30px auto
        padding-top: 30px
        padding-bottom: 20px
        border: 1px solid #4D3664
        margin-bottom: 20px
        -webkit-border-radius: 8px
        -moz-border-radius: 8px
        border-radius: 8px
        box-shadow: 4px 4px 18px rgba(77,54,100, 0.46)
        -webkit-box-shadow: 4px 4px 18px rgba(77,54,100, 0.46)
        width: 90%
        height: 35%
        .list-wrapper
          width: 90%
          margin: 0 auto
          .list-title
            margin-bottom: 0.8em
            height :45px
            font-family: Tahoma
            font-size: 25px
            letter-spacing:2px
            text-align: center /*文字水平居中对齐*/
            line-height: 20px
            color: white
          .list-description
            font-size: 17px
            line-height: 25px

</style>
