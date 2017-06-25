### express笔记

- 1. 利用express-genetator生成器 构建应用的骨架
```
npm install express-generator -g
// -h 选项可以列出所有可用的命令行选项

```
express myapp 创建 应用
Windows 平台使用如下命令：
set DEBUG=myapp & npm start
然后在浏览器中打开 http://localhost:3000/ 网址就可以看到这个应用了。
通过 Express 应用生成器创建的应用一般都有如下目录结构：
```
.
├── app.js  //入口
├── bin     
│   └── www
├── package.json
├── public  //静态资源
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes  //路由
│   ├── index.js
│   └── users.js
└── views   //视图
    ├── error.jade
    ├── index.jade
    └── layout.jade
```
7 directories, 9 files

- 2. 知识点：
    + a. app.get 和 app.use 的区别
        - app.get(xxx, 只能是函数)
        - app.use(xxx, 函数和路由)
        - app.use(函数路由以及其他的中间件都可以)
    + b. res.render和res.send的区别
        - res.render("viewsname", {data})主要用来生成视图的工具，绑定视图，比如本例中的views中的视图
        - res.send(data)直接返回数据
- 3. mockjs的简单使用
    + requirejs

```
本来如果没有安装body-parser第三方模块的话，我们是不能使用xxx.body.yyy这种形式的，一切都来自xxx.query.yyy ，query是用来表示参数的。

// 配置 Mock 路径
require.config({
    paths: {
        mock: 'http://mockjs.com/dist/mock'
    }
})

// 加载 Mock
require(['mock'], function(Mock) {
    // Mock.mock( template )
    var data = Mock.mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    });
    $('<pre>').text(JSON.stringify(data, null, 4))
        .appendTo('body')

    // Mock.mock(rurl, template)
    Mock.mock(/\.json/, {
        'list|1-10': [{
            'id|+1': 1,
            'email': '@EMAIL',
            'regexp3': /\d{5,10}/
        }]
    })
    $.ajax({
        url: 'hello.json',
        dataType: 'json'
    }).done(function(data, status, jqXHR) {
        $('<pre>').text(JSON.stringify(data, null, 4))
            .appendTo('body')
    })
})

```

```
// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
        //1. 
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
        }],
        "name": Mock.Random.natural(100)
    })
    // 输出结果
console.log(JSON.stringify(data, null, 4))
``` 
