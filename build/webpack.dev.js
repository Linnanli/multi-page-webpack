var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var devServer = require('webpack-dev-server');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
var {WebPlugin} = require('web-webpack-plugin');
//设置全局环境变量
var env = require('../config/dev.env');
process.env.NODE_ENV = JSON.parse(env.NODE_ENV);
//加载配置文件
var webpackCommon = require('./webpack.common');
var styleCfg = require('./style.cfg');
var config = require('../config').dev;

var webpackDev = merge(webpackCommon,{
    module:{
        rules:styleCfg.cssLoader
    },
    devtool:config.devtool,
    watch:true,
    watchOptions:{
        ignored:/node_modules/
    },
    devServer:{
        inline:true,
        hot:true,
        quiet: true,
        open:config.isOpenBrowser,
        host:config.host,
        port:config.port,
        overlay:{ //当有编译错误或者警告的时候显示一个全屏overlay
            errors:true,
            warnings:true,
        }
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':env
        }),
        new FriendlyErrorsWebpackPlugin(),//优化提示信息
        new webpack.HotModuleReplacementPlugin(),//热替换插件
        new webpack.NamedModulesPlugin(),
        new WebPlugin({
            template:path.resolve(__dirname,'../index.html'),
            filename:'index.html',
            requires:['app']
        })
    ]
});
module.exports = webpackDev;
// console.log(webpackDev);
// devServer(webpackDev);