<template>
  <div class="box nav">
    <ul class="nav-bar">
      <li><router-link to="/blog/first">first</router-link></li>
      <li><router-link to="/blog/second">second</router-link></li>
    </ul>
  </div>
</template>


<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        msg: 'Hello blog'
      }
    },

    methods: {
      but() {
        alert('haha')
      }
    }
  }

</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">


  .nav
    height: 70px
    background-color: #011121
    .nav-bar
      li
        float: right
        list-style: none
        padding: 10px
        margin-right: 60px
        a
          text-decoration: none
          padding: 10px
          font-size: 18px
          color: white

  @media screen and (max-width: 620px)
    .nav-bar
      display: none


</style>
