<template>
  <div>
    <el-form :model="SubmitForm" ref="ruleForm" label-width="100px" class="demo-submitForm">
      <el-form-item label="标题" prop="title" style="width:500px">
        <el-input v-model="SubmitForm.title"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="category" style="width:500px">
        <el-input v-model="SubmitForm.category"></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-col :span="3">
          <el-date-picker type="date" placeholder="选择日期" v-model="SubmitForm.time" style="width: 100%;" @change="changeTime" value-format="yyyy-MM-dd"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="简介" prop="description" style="width:500px">
        <el-input type="textarea" resize="none" :rows="7" v-model="SubmitForm.description"></el-input>
      </el-form-item>

      <!--<div class="editor">-->
      <!--<mavon-editor v-model="SubmitForm.edit" @change="$change" @save="$save"  ref="html" style="height: 300px"></mavon-editor>-->
      <!--</div>-->
      <el-form-item label="内容" style="width:100%">
        <div class="editor">
          <mavon-editor v-model="SubmitForm.edit" @change="$change" @save="$save" ref="html"
                        style="height: 100%"></mavon-editor>
        </div>
      </el-form-item>

    </el-form>
    <div class="button">
      <el-button type="primary" @click="submitart">提交</el-button>
      <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from "axios";
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },

        value2: '',
        SubmitForm: {
          title: '',
          category: '',
          description: '',
          content: '',
          edit: '',
          time: '',
        },
      };
    },
    methods: {
      $change() {
        this.SubmitForm.content = this.$refs.html.d_render;
      },
      $save() {
        this.SubmitForm.content = this.$refs.html.d_render;

      },
      changeTime(time) {

        this.value1 = time;
      },
      submitart() {
        this.$confirm('是否提交', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          this.submit();
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
          this.$router.push('/admin/manage');
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      },
      submit() {
        this.SubmitForm.content = this.$refs.html.d_render;
        axios.post('/api/article', this.SubmitForm)
          .then(function (res) {
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    components: {
      mavonEditor
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .editor
    height: 800px
    width: 100%
    .v-note-wrapper
      min-height: 800px
      min-width: 800px

  .button
    margin: 50px
</style>
