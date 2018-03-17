<template>
  <div class="my-self">
    <a href="https://github.com/luomaochen" target="_blank" class="github-corner">
      <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#BA68C8; color:#fff; transform:scale(-1, 1); position: absolute; top: 0; border: 0; left: 0; z-index: 5001">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
      </svg>
    </a>
    <div class="message-container">
      <div class="img-wrapper">
        <img class="my-img" src="./../assets/image/touxiang.jpg"></img>
      </div>
      <span class="my-motto">得之坦然，失之淡然，顺其自然，争其必然</span>
      <hr class="my-line">
      <p class="my-introduce">嗨，我是茂琛<br>一名爱好前端的在校大学生！</p>
      <div class="message-icon">
        <a href="tencent://message/?uin=943284338" target="_blank"><span class="icon2 icon-CN_tencent_QQ"></span></a>
        <a href="https://github.com/luomaochen" target="_blank"><span class="icon3 icon-Popular_GitHub"></span></a>
        <a href="https://www.zhihu.com/people/luo-mao-chen-26/activities" target="_blank"><span class="icon4 icon-CN_zhihu"></span></a>
      </div>
      <div class="go-admin"  >
      <span @click="goadmin">站长登录</span>
      <span >关于我</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Velocity from 'velocity-animate'
  import 'velocity-animate/velocity.ui.js'



  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        show: false,

      }
    },
    methods: {
      goadmin(){
        this.$router.push('/login');
      },
//      magicw(){
//        this.magic=true;
//        this.$emit("listenToChildEvent",this.magic);   //向父组件传值
//      },
      run() {
        Velocity(document.getElementById('test'), "fadeIn", { duration: 1500 });
      }
    }
  }
</script>


<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  /*.my-self-first*/
    /*position: fixed*/
    /*z-index :5000*/
    /*width: 100%*/
    /*height: 100%*/
    /*background-color: #537791*/
    /*background-image :url('./../assets/image/background.jpg')*/
    /*background-size:100%*/
    /*background-repeat:no-repeat*/
  .my-self
    position: fixed
    z-index :5000
    width: 28%
    height: 100%
    background-color: #537791
    background-image :url('./../assets/image/background.jpg')
    background-size:1280px 100%
    background-repeat:no-repeat
    .github-corner:hover .octo-arm
      animation: octocat-wave 560ms ease-in-out
      @keyframes octocat-wave
        0%, 100%
          transform: rotate(0)
        20%, 60%
          transform: rotate(-25deg)
        40%, 80%
          transform: rotate(10deg)
  .message-container
      width: 100%
      height: 60%
      .img-wrapper
        width: 110px
        margin: 0 auto
        .my-img
          margin: 228px 0 auto
          border-radius: 50%
          border: 2px solid #58DADA
          box-shadow: 0 0 18px rgba(88, 218, 218, 0.8)
          width: 110px
          height: 110px
          &:hover
            cursor :pointer
      .my-motto
        margin: 33px  auto
        display: block
        width: 100%
        text-align: center
        font-size :17px
        color: #ECFEFF
      .my-line
        width: 60%
        margin:-25px auto
        border-top:1px solid rgba(255, 255, 255, 0.14)
      .my-introduce
        margin: 65px 0 auto
        display: block
        width: 100%
        text-align: center
        line-height :30px
        color: ghostwhite
      .message-icon
        margin :100px 0 auto
        width :100%
        text-align :center
        font-size :30px
        a
          margin-left :20px
          .icon1
            color:#00c251
          .icon2
            color:#dfdfe0
            &:hover
              color :#0088fa
          .icon3
            color:black
          .icon4
            color:#0088fa

      .go-admin
        margin :30px 0 auto
        width :100%
        text-align :center
        font-size :15px
        color:#dfdfe0
        &:hover
          cursor: pointer
        span:first-child
          margin-right :20px

    @media screen and (max-width: 900px)
    .my-self
      position:relative
      background-color: #028090
      width: 100%
      height: 100%
      background-size:100% 100%
      .message-container
        width:100%
        height :100%
        .img-wrapper
          width: 70px
          margin: 0 auto
          .my-img
            margin: 1.2rem 0 auto
            border-radius: 50%
            border: 2px solid #58DADA
            box-shadow: 0 0 18px rgba(88, 218, 218, 0.8)
            width: 70px
            height: 70px
        .my-motto
            margin: 1.5rem auto
            display: block
            width: 100%
            text-align: center
            font-size :1rem
            color: #ECFEFF
        .my-line
            width: 90%
            margin:-0.8em auto
            border-top:1px solid rgba(255, 255, 255, 0.14)
        .my-introduce,.message-icon,.go-admin
            display :none

    @media (max-width: 500px)
      .github-corner:hover .octo-arm
        animation: none
      .github-corner .octo-arm
        animation: octocat-wave 560ms ease-in-out


</style>


























