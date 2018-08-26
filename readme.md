# 简易博客系统

## 1.初始化项目

    1.创建项目的根目录 blog
    2.创建了public目录 将静态资源复制到了public文件夹中
    3.创建了views目录 用以放置模板文件
    4.初始化项目描述文件 npm init -y 
        会在项目的根目录下生成一个叫package.json的文件
    2.建立项目的主文件app.js
    3.下载express框架 npm install express --save
        --save 将当前下载的第三方模块记录在项目的描述文件中
    4.利用express创建web服务器
    5.初始化本地仓库
        1.git init 在项目根目录下初始化本地仓库
        2.增加git忽略清单文件 目的是将node_modules文件夹或略掉不让git管理
        3.git add . 将项目文件添加到暂存区
        4.git commit -m 初始项目 将代码提交到本地仓库
        5.登录github创建远程仓库
        6.将本地仓库提交到远程仓库
            1.为远程仓库起别名 git remote add origin 仓库地址
            2.提交 git push -u origin master
                -u 记录当前提交的仓库别名与分支名称 方便下次提交 下次提交的时候只需要输入 git push 就可以了
            3.添加readme.md文件
    6.设计路由 规定用户访问什么请求路径 服务器端响应什么内容
        1.将public中的静态HTML文件剪切到views目录下的对应文件夹中
        2.下载模板引擎 npm install express-handlebars --save
        3.配置模板引擎
            1.告诉express项目所使用的模板引擎是哪个
            2.配置模板路径
            3.配置模板后缀
            4.使用res.render渲染模板
            5.将模板中的引用路径改成绝对路径
            6.开放静态资源 app.use(express.static(path.join(__dirname, 'public')))
            7.配置公共部分路径
            8.配置骨架路径
            9.配置默认骨架
            10.抽离骨架与模板公共部分并引入
## 2.创建前后端主路由  express.Router()

    1.将主路由挂在请求路径 前端 /home 后端 /admin
    2.抽取后端页面骨架
    3.抽取后端公共部分
    4.区分前后端公共部分

## 3.数据库配置

    1.下载第三方模块mysql npm install mysql --save
    2.创建数据库连接 并且将连接代码放置在单独的目录中
    3.将数据路连接对象暴露出去

## 4.实现业务逻辑

    1.注册
        1.接收post参数 npm install body-parser --save
        2.配置bodyParser app.use(bodyParser.urlencoded({ extended: false }));
    2.登录

## 5.项目目录

    public 放置静态资源(css/image/js)
    views  放置模板文件 原public中的html文件改了成handlebars文件
    model  放置数据库连接文件
    routes 放置路由文件以及业务逻辑
    node_modules nodejs的第三方模块

## 项目文件

    .gitignore         git忽略清单文件
    app.js             项目的主文件
    package.json       项目描述文件 记录项目信息
    package-lock.json  记录项目所下载的第三方模块所依赖的其他模块
    process.txt        项目制作流程文件
    readme.md          github中的项目说明

当我们拿到别人的项目时没有第三方模块 怎么办?
当我们将项目传递给别人的时候 由于第三方模块文件比较细碎 传递过慢 怎么办?

    我们只需要在项目的根目录下 打开命令行窗口 输入npm install即可
    命令会自动在项目的根目录下查找package.json文件 然后看文件中记录了哪些依赖模块 然后自动下载这些模块