// 引入express框架
const express = require('express');
// 创建web服务器
const app = express();
// 引用express-handlebars
const exphbs = require('express-handlebars');
const path = require('path');




// connection.query('select * from posts',(err,rows) => {
//     console.log(rows);
// });
// 告诉express项目所使用的模版引擎是哪个
// 配置模版引擎
// 
// 开放静态资源目录
app.use(express.static(path.join(__dirname,'public')));



app.engine('handlebars',exphbs({
    partialsDir:[{
        dir:path.join(__dirname,'views','home','partials'),
        namespace:'home'
    },{
        dir:path.join(__dirname,'views','admin','partials'),
        namespace:'admin'

    }],
    layoutsDir:path.join(__dirname,'views','layouts'),
    defaultLayout:'home'
}));

// 在应用程序中设置一些变量
app.set('views',path.join(__dirname,'views'));

app.set('view engine','handlebars');

// 创建一级路由


// 导入前端home路由模块，返回前端路由一级路由对象
const home = require('./routes/home.js');
// 有请求来的时候，如果以home开头，走前端路由
app.use('/home',home);

// 导入前端admin路由模块，返回前端路由一级路由对象
const admin = require('./routes/admin.js');
// 有请求来的时候，如果以admin开头，走前端路由
app.use('/admin',admin);


// 让服务器监听3000端口，向外界提供服务
app.listen(3000, err => {
     if(err == null){
        console.log('服务器启动成功，请访问http://localhost:3000');
     }
});
