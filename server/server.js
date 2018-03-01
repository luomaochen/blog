const express=require('express');
//const static=require('express-static');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const path=require('path');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');




    let server=express();
    server.listen(8083,() => {
      console.log(`connect to 8083`);
    });


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname,'views')));



//route  路由
let createRouter=require('./routes/router.js');

server.use('/api',createRouter());




