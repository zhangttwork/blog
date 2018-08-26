const express = require('express');
const connection = require('../model/db.js');

const home = express.Router();




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

// 将前端主路由开放出去
module.exports = home;