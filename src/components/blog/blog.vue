<template>
  <div class="container">
    <div class="blog-left">
      <left v-on:listenToChildEvent="showMsg"></left>
    </div>
    <div class="blog-right">
      <div class="list1">
        <transition-group appear name="list" v-on:after-enter="showpage">
          <div v-for="(data,index) in datas" :key="data.ID" class="list-container" @click="go(data.ID)">
            <div class="list-wrapper" >
              <p class="list-title">{{data.title}}</p>
              <p class="list-description">{{data.description}}</p>
              <p class="points">……</p>
              <div class="list-meta">
                <span class="el-icon-date" style="color: #78C2C3"></span>
                <time class="list-time">{{data.time}}</time>

                <span class="list-category"><span class="icon-price-tag"
                                                  style="font-size: 15px;margin: 0 6px;color: #78C2C3"></span>{{data.category}}</span>
                <div class="list-content" @click="go(data.ID)"><a>阅读全文</a><span class="el-icon-d-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
        <div class="list-bottom" :class="{latershow:show}">
          <div class="pagination">
            <el-pagination
              @current-change="handleCurrentChange"
              background
              layout="prev, pager, next"
              :total="this.count">
            </el-pagination>
          </div>
        </div>
        <div  title="置顶" class="icon-scroll">
          <a @click="runup"><span class="icon-arrow-up"></span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from "axios";
  import Left from '@/components/blog/blogleft.vue'
  import Velocity from 'velocity-animate'
  import 'velocity-animate/velocity.ui.js'


  export default{
    data() {
      return {
        datas: [],
        dialogTableVisible: false,
        dialogFormVisible: false,
        show: true,
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
        number: 1,
        begin:false
      }
    },
    methods: {
      runup() {
        Velocity(document.getElementsByClassName("blog-right"), "scroll", {duration: 200, easing: "easeOutQuart"});
      },
      showMsg(data){
          this.begin=data;
          console.log(typeof (this.begin));
      },
      go(id) {
        this.$router.push({
          name: 'Content',
          query: {id: id}
        })
      },
      showpage() {
        this.show = false;
      },
      handleCurrentChange(val) {           //分页重新获得数据
        this.cur_page = val;

        const that = this;
        axios.post('/api/article-blog', {page: that.cur_page})           //重新获取数据刷新表格
          .then(function (res) {
            that.datas = res.data.data;

          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    created() {
        const that = this;
        axios.get('/api/article-count')           //重新获取数据刷新表格
          .then(function (res) {
            that.count = res.data.data.count;

          })
          .catch(function (error) {
            console.log(error);
          });

        axios.post('/api/article-blog', {page: that.cur_page})           //获取数据刷新表格
          .then(function (res) {
            that.datas = res.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });

    },
    components: {
      Left

    }

  }

</script>


<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .latershow
    display: none

  .list-container:hover
    cursor: pointer
    width: 81%!important
    .list-title
      &:after
        opacity: 0!important
      &:before
        background: #D5EEFF!important
        width: 100%!important
        content: ' '!important
        opacity: 1!important
        transition: 1s!important
    .list-content
      background-color :#D5EEFF!important
      color :#000!important
      transition: 0.5s!important





  .container
    height: 100%
    width: 100%
    font-size: 20px
    .blog-right
      margin-left: 28%
      width: 72%
      height: 100%
      background-color: #FCFCFC
      color: #000
      .list1
        background-color: #FCFCFC
        list-style-type: none
        .list-enter-active
          transition: all 1.5s
        .list-enter
          /* .list-leave-active for below version 2.1.8 */
          opacity: 0
          transform:rotate(-10deg)
        .list-container
          background-color: #FDFDFD
          margin: 30px auto
          padding-top: 30px
          padding-bottom: 20px
          border: 1px solid #4AA6B5
          margin-bottom: 20px
          -webkit-border-radius: 8px
          -moz-border-radius: 8px
          border-radius: 8px
          box-shadow: 4px 4px 18px rgba(77, 54, 100, 0.46)
          -webkit-box-shadow: 4px 4px 18px rgba(77, 54, 100, 0.46)
          width: 80%

          .list-wrapper
            width: 90%
            margin: 0 auto
            .list-title
              margin-bottom: 0.8em
              height: 45px
              font-family: Tahoma
              font-size: 25px
              letter-spacing: 2px
              text-align: center /*文字水平居中对齐*/
              line-height: 20px
              position: relative;
              transition: 0.5s;
              &:after
                position: absolute
                bottom: -0.5rem
                height: 1px
                width: 100%
                content: ' '
                left: 50%
                transform: translateX(-50%)
                background: #000
                animation: change 1s
              &:before
                position: absolute
                bottom: -0.5rem
                height: 2px
                width: 0
                content: ' '
                left: 50%
                opacity: 0
                transform: translateX(-50%)
                background: #000

            .list-description
              margin-top :50px
              font-size: 17px
              line-height: 25px
            .points
              display: none
            .list-meta
              margin-top: 40px
              .list-time
                font-size: 16px
              .list-category
                margin-left: 10px
                font-size: 17px
              .list-content
                float: right
                cursor: pointer
                color :#E0FCFF
                background-color: #588D9C
                width: 120px
                height: 30px
                font-size: 17px
                text-align: center
                line-height: 30px
      .pagination
        width: 100%
        text-align: center
        padding-top: 30px
        background-color: #FCFCFC
        .el-pagination
          padding-bottom: 50px
          background-color: #FCFCFC
          color: #000

      .icon-scroll
        position: fixed
        right: 10px
        bottom: 50px
        a
          margin-bottom: 10px
          cursor: pointer
          span
            font-size: 35px
            color: #588D9C
            &:hover
              font-size: 38px
    @media screen and (max-width: 900px)
      .blog-left
        position: absolute
        width: 100%
        height: 30%
        top: 0

      .blog-right
        background-color: #283149
        width: 100%
        height: 100%
        position: absolute
        top: 30%
        margin-left: 0
        margin-top: 0
        .list1
          position: absolute
          top: 0
          width: 100%
          .list-container
            padding-bottom: 20px
            border: 1px solid #4AA6B5
            margin-bottom: 1.5em
            -webkit-border-radius: 10px
            -moz-border-radius: 10px
            border-radius: 10px
            box-shadow: 4px 4px 20px rgba(77, 54, 100, 0.56)
            -webkit-box-shadow: 4px 4px 20px rgba(77, 54, 100, 0.56)
            width: 81%
            height: 10%
            .list-wrapper
              width: 90%
              margin: 0 auto
              .list-title
                margin-bottom: 0.8em
                height: 3.5em
                font-size: 1.1em
                letter-spacing: 0.1em
                line-height: 1.2em
              .list-description
                display: block
                height: 9em
                width: 100%
                overflow: hidden
                text-overflow: ellipsis
                font-size: 0.8em
                line-height: 1.5em
              .points
                display: block
                font-size: 1.3em
              .list-meta
                margin-top: 40px
                .list-time
                  font-size: 0.7em
                .list-category
                  margin-left: 0.05em
                  font-size: 0.7em
                .list-content
                  width: 5.5em
                  height: 1.8em
                  font-size: 0.7em
                  text-align: center
                  line-height: 1.8em
        .pagination
          width: 100%
          padding-top: 0
          background-color: #537791
          text-align: center
          .el-pagination
            padding-bottom: 1em
        .icon-scroll
          position: fixed
          right: 0.1em
          bottom: 1em
          a
            margin-bottom: 10px
            cursor: pointer
            span
              font-size: 25px
              color: #588D9C

    @media screen and (max-width: 330px)
      .el-icon-date
        display: none

      .list-time
        display: none
</style>























