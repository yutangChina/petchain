var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var supplierRouter = require('./routes/supplier');
var customerRouter = require('./routes/customer');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('petsupermarket'));
app.use(express.static(path.join(__dirname, 'public')));

//页面路由
app.use('/', indexRouter);


//API路由
//登录&&注册路由
app.use('/login', loginRouter);
//商户相关路由
app.use('/supplier', supplierRouter);
app.use('/customer', customerRouter);


//404
app.use(function(req, res, next){
    res.sendFile(path.join(__dirname, '/routes/pages/404.html'));
});

module.exports = app;
