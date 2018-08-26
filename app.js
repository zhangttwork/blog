// 引入express框架
const express = require('express');
// 创建web服务器
const app = express();


app.get('/',(req,res) => {
    res.send('aaa');
});

// 让服务器监听3000端口，向外界提供服务
app.listen(3000, err => {
     if(err == null){
        console.log('服务器启动成功，请访问http://localhost:3000');
     }
});
