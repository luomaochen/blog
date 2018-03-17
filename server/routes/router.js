const express=require('express');
const mysql=require('mysql');
var models = require('../db');

var MarkdownIt = require('markdown-it');

var md = new MarkdownIt();

let db=mysql.createConnection(models.mysql);

module.exports=function (){

  let router = express.Router();

  db.connect();



  router.post('/login', (req, res) => {
    let username=req.body.username;
    let password=req.body.password;


      db.query(`SELECT * FROM admin_table WHERE username='${username}' `,(err,data) => {

      if(err){
        console.log(err);
      }else{
        if(data.length==0){                            //此判断处理如果用户名不一样 返回的数据长度为0 则不继续 否则下面调用data[0]会报错

              res.json({code: 400, msg: '用户名不存在'});
            }else{
                if (data[0].password == password) {
                  //成功
                  let user = {
                    user_id: data[0].ID,
                    user_name: data[0].username,
                  };

                  res.json({code: 200, msg: '登录成功', user: user});
                }else {
                  res.json({code: 400, msg: '密码错误'});
                }
            }
      }

    });

  });





  router.post('/article',(req,res) => {     //修改   提交
    let title=req.body.title;
    let category=req.body.category;
    let description=req.body.description;
    let content=req.body.content;
    let edit=req.body.edit;
    let time=req.body.time;

    content1=mysql.escape(content);
    edit1=mysql.escape(edit);
    title1=mysql.escape(title);
    description1=mysql.escape(description);
    category1=mysql.escape(category);



    if(req.body.mod_id){   //修改
        db.query(`UPDATE article_table SET title=${title1}, \
                                           category=${category1},\
                                           description=${description1},\
                                           content=${content1},\
                                           edit=${edit1},\
                                           time='${time}' \
                                           WHERE ID=${req.body.mod_id}`,(err,data) => {
                                          if(err){
                                            console.error(err);
                                            res.json({code: 500, msg: '编辑失败'});
                                          }else{
                                            res.json({code: 200, msg: '编辑成功'});
                                          }
        });
    }else{                //提交文章
      db.query(`INSERT INTO article_table (title,category,description,content,edit,time) VALUES (${title1},${category1},${description1},${content1},${edit1},'${time}')`,(err,data) => {
        if(err){
          console.error(err);
          res.json({code: 500, msg: '数据库失败'});
        }else{
          res.json({code: 200, msg: '提交成功'});
        }
      });

    }
  });


  router.get( '/article-count',(req,res) => {

    db.query(`SELECT COUNT(*) as count FROM article_table`,(err,data) => {
      if(err){
        console.error(err);
        res.json({code: 400, msg: '找不到数据库'});
      }else{
        res.json({code:200,msg:'成功',data:data[0]});
      }
    });

  });


  router.post('/article-table',(req,res) => {   // 开始页面数据渲染
    const pagenumbers=4;
    let page=req.body.page;
    db.query(`SELECT * FROM article_table order by ID desc LIMIT ${(page-1)*pagenumbers},${pagenumbers}`,(err,data) => {
      if(err){
        console.error(err);
        res.json({code: 400, msg: '找不到数据'});
      }else{
        res.json({code:200,msg:'成功',data:data});
      }
    });

  });


  router.post('/article-blog',(req,res) => {
    const pagenumbers=10;
    let page=req.body.page;
    db.query(`SELECT * FROM article_table order by ID desc LIMIT ${(page-1)*pagenumbers},${pagenumbers}`,(err,data) => {
      if(err){
        console.error(err);
        res.json({code: 400, msg: '找不到数据'});
      }else{
        res.json({code:200,msg:'成功',data:data});
      }
    });
  });


  router.post('/article-table-handle',(req,res) => {      //编辑  删除
    let act = req.body.act;
    let id = req.body.id;

    switch (act) {
      case 'mod':
        db.query(`SELECT * FROM article_table WHERE ID=${id}`,(err,data) => {
          if(err){
            console.error(err);
            res.json({code:500,msg:'失败'});
          }else if(data.length==0){
            res.json({code:404,msg:'找不到该数据'});
          }else{
            res.json({code:200,msg:'成功',mod_data:data[0]});
          }
        });
        break;
      case 'del':
        db.query(`DELETE FROM article_table WHERE ID=${id}`, (err, data) => {
          if (err) {
            console.error(err);
            res.json({code: 400, msg: '失败'});
          } else {
            res.json({code: 200, msg: '删除成功'});
          }
        });
        break;
      case 'first':
        db.query(`SELECT * FROM article_table WHERE ID=${id}`, (err, data) => {
          if (err) {
            console.error(err);
            res.json({code: 400, msg: '失败'});
          } else {
            res.json({code: 200, msg: '删除成功',data:data[0]});
          }
        });
        break;
    }
  });

  return router;

  db.end();
};


