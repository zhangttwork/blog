const express = require('express');
const connection = require('../module/db.js');


const admin= express.Router();


admin.get('/index',(req,res) => {
    console.log(req.session.isLogin);
    console.log(111);
    res.render('admin/index',{
        layout:'admin'
    });
});

// 添加文章页面路由
admin.get('/blog_add',(req,res) => {
    res.render('admin/blog_add',{
        layout:'admin'
    });
});

admin.get('/blog_list',(req,res) => {
    res.render('admin/blog_list',{
        layout:'admin'
    });
});


admin.get('/settings',(req,res) => {
    res.render('admin/settings',{
        layout:'admin'
    });
});


module.exports = admin;