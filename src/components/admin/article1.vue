<template>
  <el-container>
    <el-main>
      <div class="art-title">
        <span>
        标题：
        </span>
        <el-input class="title_input" placeholder="请输入标题" v-model="SubmitForm.title"></el-input>
      </div>

      <div class="art-description">
        <span>简介：</span>
        <el-input class="description_input" placeholder="请输入简介" v-model="SubmitForm.description"></el-input>
      </div>
      <div id="editor">
        <mavon-editor v-model="SubmitForm.edit" @change="$change" @save="$save"  ref="html" style="height: 100%"></mavon-editor>
      </div>


      <div class="art-submit">
        <el-button type="success" round @click="open2">提交</el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script type="text/ecmascript-6">
  import axios from "axios";
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'



  export default {
    data() {
      return {
        SubmitForm: {
          title: '',
          description: '',
          content: '',
          edit:'',
        },

      };
    },
    methods: {
      $change() {
        this.SubmitForm.content=this.$refs.html.d_render;
      },
      $save() {
        this.SubmitForm.content=this.$refs.html.d_render;
      },
      open2() {
        this.$confirm('是否提交', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          this.submit();
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
        }).catch(() => {
          console.log(this.SubmitForm.content);
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      },
      submit() {
        this.SubmitForm.content=this.$refs.html.d_render;
        console.log(this.SubmitForm.title);
        console.log(this.SubmitForm.description);
        console.log(this.SubmitForm.content);
//        const that = this;
        axios.post('/api/article', this.SubmitForm)
          .then(function(res){
            console.log(res.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    components: {
      mavonEditor,
    }

  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .el-container,.el-main
    overflow-x: hidden
    .art-title
      width: 1000px
      height :70px
      position :relative
      span
        position:absolute
        top :0
        left :40px
      .title_input
        width: 800px
    .art-description
      margin-bottom :30px
      width: 1000px
      height :70px
      position :relative
      span
        position:absolute
        top :0
        left :40px
      .description_input
        width: 800px
    #editor
      margin: auto
      width: 80%
      height: 580px
    .art-content
      width: 1000px
      position :relative
      span
        position:absolute
        top :-30px
        left :40px
      .content_input
        width :800px
    .art-submit
      float :left
      width :1000px

</style>
