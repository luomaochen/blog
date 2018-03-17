<template>
  <div class="table">
    <el-table :data="datas" align="left" border max-height="800" style="width: 100%">
      <el-table-column prop="ID" label="ID" ></el-table-column>
      <el-table-column prop="time" label="时间" ></el-table-column>
      <el-table-column prop="title" label="标题"  ></el-table-column>
      <el-table-column prop="category" label="分类" ></el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
          <el-button size="mini" @click="open(scope.row)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="edit">
      <el-dialog width="80%" height="100%" title="内容编辑" :visible.sync="dialogFormVisible">
        <el-form :model="form" >
          <el-form-item label="标题" style="width:500px">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="分类" style="width:500px">
            <el-input v-model="form.category"></el-input>
          </el-form-item>
          <el-form-item label="简介" style="width:500px">
            <el-input type="textarea" resize="none" :rows="5" v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="内容">
            <div class="editor">
              <mavon-editor v-model="form.edit"  @save="$save" ref="html"
                            style="height: 100%"></mavon-editor>
            </div>
            <!--<el-input type="textarea" resize="none" :rows="15" v-model="form.content"></el-input>-->
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="decide_edit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="this.count">
      </el-pagination>
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
        datas: [],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          mod_id: '',
          title: '',
          category: '',
          description: '',
          content: '',
          edit: '',
          time:'',
          delivery: false
        },
        cur_page: 1,
        count:0
      }
    },

    methods: {
      $save() {
         console.log("待开发");
      } ,
      getdata() {
        const that = this;
        axios.post('/api/article-table', {page: that.cur_page})           //重新获取数据刷新表格
          .then(function (res) {
            that.datas = res.data.data;
            let leng = res.data.data.length;

          })
          .catch(function (error) {
            console.log(error);
          });
      },

      handleDelete(row) {          //删除函数
        const that = this;
        axios.post('/api/article-table-handle', {id: row.ID, act: 'del'}).then(function (res) {

          if (res.data.code == 200) {
            that.$message.success('删除成功');
            that.getdata();         //重新获取数据刷新表格
          } else {
            this.$message.error('删除失败');
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      open(row) {        //删除弹框打开确认函数
        this.$confirm('此操作将永久删除该文件, 是否继续?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          this.handleDelete(row);           //调用删除函数
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      edit(row) {             //点击编辑  呈现要编辑的那条的全部内容
        const that = this;
        axios.post('/api/article-table-handle', {id: row.ID, act: 'mod'}).then(function (res) {
          if (res.data.code == 200) {
            that.form.mod_id = res.data.mod_data.ID;
            that.form.title = res.data.mod_data.title;
            that.form.category = res.data.mod_data.category;
            that.form.description = res.data.mod_data.description;
            that.form.edit = res.data.mod_data.edit;
            that.form.time = res.data.mod_data.time;
            that.dialogFormVisible = true
          } else {
            this.$message.error('编辑数据展示失败');
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      decide_edit() {              //确认编辑  进行数据库修改函数
        const that = this;
        this.form.content = this.$refs.html.d_render;
        this.dialogFormVisible = false;
        axios.post('/api/article', this.form)
          .then(function (res) {
            that.$message.success('编辑成功');
            if (res.data.code == 200) {
              that.getdata();     //重新获取数据刷新表格
            }
          })
          .catch(function (error) {
            this.$message.error('编辑失败');
            console.log(error);
          });
      },

      handleCurrentChange(val) {           //分页重新获得数据
        this.cur_page = val;

        const that = this;
        axios.post('/api/article-table', {page: that.cur_page})           //重新获取数据刷新表格
          .then(function (res) {
            that.datas = res.data.data;

          })
          .catch(function (error) {
            console.log(error);
          });
      }

    },
    created() {                 //初始进入加表格载数据
      const that = this;
      axios.get('/api/article-count')           //重新获取数据刷新表格
        .then(function (res) {
          that.count = (res.data.data.count)/4*10;

        })
        .catch(function (error) {
          console.log(error);
        });

      this.getdata()
    },
    components: {
      mavonEditor
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">

  .table
    overflow-y: hidden

  .pagination
    margin: 20px 0
    text-align: right

  .edit
    height: 100%
    width: 80%
    .editor
      height :680px
    .dialog-footer
      margin-top :60px


</style>
