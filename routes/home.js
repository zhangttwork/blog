const express = require('express');
const connection = require('../module/db.js');
const home = express.Router();
const md5 = require('md5');


home.get('/index',(req,res) => {
    res.render('home/index');
    connection.query('select * from posts',(err,rows) => {
        console.log(rows);
    });
    // res.send('aaa');
});

home.get('/about',(req,res) => {
    res.render('home/about');
});

home.get('/join',(req,res) => {
    res.render('home/join');
});

home.get('/register',(req,res) => {

    res.render('home/register');
});

home.get('/login',(req,res) => {

    res.render('home/login');
});

home.post('/register',(req,res) => {
    //接收前端传递过来的注册信息
    let {name,email,pass} = req.body;
    // console.log(res.send(req.body));
    if(name.trim().length == 0){
        res.send({error:100,message:'请填写用户名'});
        return;
    }

    
    let sql1 = 'select * from users where name =?';
    // 发送查询请求
    connection.query(sql1,[name],(err,rows)=> {
        if(!err && rows.length == 0) {
            // res.send('没有注册过');
            let sql2 = 'insert into users set ?';
            req.body.pass = md5(pass);

            connection.query(sql2,req.body,err => {
                if(!err){
                     res.send({success:true,message:'注册成功'});
                }else{
                    res.send({error:400,message:'注册失败'});
                }
            })
        }else{
            res.send({error:300,message:'用户名已经注册过'})
        }
    });
});


home.post('/login',(req,res) => {

    // res.send('hahha');
    // res.send(loginInfo);
    let {email,pass} = req.body;

    let sql = 'select * from users where email = ?';
    
    connection.query(sql,email,(err,rows) => {
        if(rows.length == 0) {
            res.send({err:100,message:'用户名不存在'});
        }else {
            if(rows[0].pass == md5(pass)){
                // 引入express-session模块后，在req对象下面就多出了一个session对象，
                // 1.为当前用户生成了一个唯一的sessionID
                // 2.将sessionId通过cookie形式存储到了客户端
                // 3.当客户端发来请求的时候，自动解析cookie中存储的sessionID
                // 4.看这个sessionID在服务器中是否存在
                // 5.

                req.session.isLogin = true; 
                res.send({success:true,message:'登录成功'})
            }else{
                res.send({err:200,message:'用户名或密码错误'});
            }
        }
    });
});

// 将前端主路由开放出去
module.exports = home;