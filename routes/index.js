var express = require('express');
var router = express.Router();

router.route('/register') // 返回注册页面 
    .get(function(req, res, next) {
        res.render('index', { title: '注册' }) // 接受用户表单 
    }).post(function(req, res, next) {
        var username = req.body.username,
            password = req.body.password;
        console.log('Register post received!');
        console.log('username:', username, 'password::', password);
        res.end('成功收到POST请求');
    });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'index' });
});

/* GET home page. */
router.get('/movie:id', function(req, res, next) {
    res.render('detail', { title: 'detail' });
});


/* GET home page. */
router.get('/admin/list', function(req, res, next) {
    res.render('list', { title: 'list' });
});

/* GET home page. */
router.get('/admin/movie', function(req, res, next) {
    res.render('admin', { title: 'admin' });
});


router.get('/mockjs', function(req, res, next) {
    var Mock = require('mockjs')
    var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }],
            'logo': '@image(64x64,#333, logo)',
            'url': '@url'
        })
        // 输出结果
    var ret = JSON.stringify(data, null, 4);
    res.render('index', { title: ret });
});

router.get('/mockapi', function(req, res, next) {
    var callback = req.query.callback;
    console.log(callback);
    var Mock = require('mockjs')
    var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }],
            'logo': '@image(64x64,#333, logo)'
        })
        // 输出结果
    var ret = JSON.stringify(data, null, 4);
    ret = callback + '(' + ret + ')';
    res.send(ret);
});
module.exports = router;