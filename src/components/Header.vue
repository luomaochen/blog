<template>
  <div class="box header">
    <img src="./../assets/image/1.jpg">
  </div>
</template>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">



  .header
    background-color: mediumvioletred
    height: 600px
    img
      width :100%
      height :100%

@media screen and (max-width: 1300px)
    .header
      height: 350px


@media screen and (max-width: 620px)
    .header
      height: 200px

@media screen and (max-width: 376px)
    .header
      height: 150px





</style>
