<template>
  <div class="container">
    <div class="left">
      <left></left>
    </div>
    <div class="right">
      <div class="list1">
        <transition-group appear name="list" v-on:after-enter="showpage">
        <div v-for="(data,index) in datas" :key="data.ID" class="list-container">
          <div class="list-wrapper">
            <p class="list-title">{{data.title}}</p>
            <p class="list-description">{{data.description}}……</p>
            <p class="points">……</p>
            <div class="list-meta">
              <span class="el-icon-date" style="color: #BDE4F4"></span>
              <time class="list-time">{{data.time}}</time>

              <span class="list-category"><span class="icon-price-tag" style="font-size: 15px;margin: 0 6px;color: #BA68C8"></span>{{data.category}}</span>
              <div class="list-content" @click="go(data.ID)"><a >阅读全文</a><span class="el-icon-d-arrow-right"></span></div>
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
          <div class="icon-scroll">
            <a @click="runup"><span class="icon-arrow-up"></span></a>
          </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from "axios";
  import Left from '@/components/blogleft.vue'
  import Right from '@/components/blogright.vue'
  import Velocity from 'velocity-animate'
  import 'velocity-animate/velocity.ui.js'


  export default{
    data() {
      return {
        datas: [],
        dialogTableVisible: false,
        dialogFormVisible: false,
        show:true,
        form: {
          mod_id: '',
          title: '',
          category: '',
          description: '',
          content: '',
          delivery: false
        },
        cur_page: 1,
        count:1,
        id: '',
        number:1
      }
    },
    methods: {
      runup() {
        Velocity(document.getElementsByClassName("right"), "scroll", { duration: 200, easing: "easeOutQuart"  });
       },
      go(id) {
        this.$router.push({
          name: 'Content',
          query: {id: id}
        })
      },
      showpage() {
        this.show=false;
      },
      handleCurrentChange(val) {           //分页重新获得数据
        this.cur_page = val;
        console.log(this.cur_page);
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
          console.log(that.count);
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
      Left,
      Right
    }

  }

</script>


<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .latershow
    display :none


  .container
    height: 100%
    width: 100%
    font-size: 20px
    /*.left*/
      /*position: fixed*/
      /*width: 28%*/
      /*height: 100%*/
      /*background-color: #36626A*/
    .right
      margin-left: 28%
      width: 72%
      height: 100%
      background-color: #028090
      color :#ECFEFF
      .list1
        background-color: #028090
        list-style-type: none
        .list-enter-active
          transition: all 1.5s
        .list-enter
          /* .list-leave-active for below version 2.1.8 */
          opacity: 0;
          transform: translateX(100px)
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
            .points
              display :none
            .list-meta
              margin-top: 40px
              .list-time
                font-size: 16px
              .list-category
                margin-left: 10px
                font-size: 17px
              .list-content
                float: right
                cursor:pointer
                background-color :#3DC7BE
                width :120px
                height :30px
                font-size :17px
                text-align :center
                line-height :30px
      .pagination
        width:100%
        text-align:center
        padding-top: 30px
        background-color: #028090
        .el-pagination
          padding-bottom :50px
          background-color: #028090
          color: white
          .btn-prev
            background-color: #028090
            color: white
          .btn-next
            background-color: #028090
            color: white
          .number
            background-color: #028090
      .icon-scroll
          position :fixed
          right :10px
          bottom :50px
          a
            margin-bottom :10px
            cursor:pointer
            span
              font-size :35px
              color :#ECFEFF
              &:hover
                font-size :38px
                color :#588D9C
    @media screen and (max-width: 900px)
      .left
        width: 100%
        height: 30%
      .right
        background-color:#028090
        width: 100%
        height: 100%
        margin-left: 0
        margin-top :0
        .list1
          .list-container
            margin: 10% auto
            padding-bottom: 20px
            border: 1px solid #4D3664
            margin-bottom: 1.5em
            -webkit-border-radius: 10px
            -moz-border-radius: 10px
            border-radius: 10px
            box-shadow: 4px 4px 20px rgba(77,54,100, 0.56)
            -webkit-box-shadow: 4px 4px 20px rgba(77,54,100, 0.56)
            width: 90%
            height: 10%
            .list-wrapper
              width: 90%
              margin: 0 auto
              .list-title
                margin-bottom: 0.8em
                height :3.5em
                font-size: 1.1em
                letter-spacing:0.1em
                line-height: 1.2em
              .list-description
                display :block
                height:9em
                width :100%
                overflow: hidden
                text-overflow:ellipsis
                font-size: 0.8em
                line-height: 1.5em
              .points
                display :block
                font-size :1.3em
              .list-meta
                margin-top: 40px
                .list-time
                  font-size: 0.7em
                .list-category
                  margin-left: 0.05em
                  font-size: 0.7em
                .list-content
                  width :5.5em
                  height :1.8em
                  font-size :0.7em
                  text-align :center
                  line-height :1.8em
        .pagination
          width: 100%
          padding-top: 0.5em
          background-color: #028090
          text-align:center
          .el-pagination
            padding-bottom :1em
        .icon-scroll
          position :fixed
          right :0.1em
          bottom :1em
          a
            margin-bottom :10px
            cursor:pointer
            span
              font-size :25px
              color :#ECFEFF
              &:hover
                font-size :28px
                color :#588D9C

    @media screen and (max-width: 330px)
      .el-icon-date
        display:none
      .list-time
        display:none
</style>























