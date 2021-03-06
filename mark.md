## 无法使用import按需加载模块的问题

因为没有Promise垫片,需要bable转换,可以使用require.ensure()方法

```javascript
require.ensure(['../show'],function(require){
    var show = require('../show');
    console.log(show)
},'show')
```

说明: require.ensure在需要的时候才下载依赖的模块，当参数指定的模块都下载下来了（下载下来的模块还没执行），便执行参数指定的回调函数。require.ensure会创建一个chunk，且可以指定该chunk的名称，如果这个chunk名已经存在了，则将本次依赖的模块合并到已经存在的chunk中，最后这个chunk在webpack构建的时候会单独生成一个文件。

语法: require.ensure(dependencies: String[], callback: function([require]), [chunkName: String])

dependencies: 依赖的模块数组

callback: 回调函数，该函数调用时会传一个require参数

chunkName: 模块名，用于构建时生成文件时命名使用
注意点：requi.ensure的模块只会被下载下来，不会被执行，只有在回调函数使用require(模块名)后，这个模块才会被执行。


## 在提取共用代码vendor时可以尝试剔除css-loader的代码

```javascript
new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf('css-loader')===-1 &&//去除被打包进来的css-loader
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
```

## 生成可视化打包数据

```
    npm run build --profile --json > states.json
```

## 浏览器错误提示插件

用于更友好地输出webpack的警告、错误等信息

```
    npm install friendly-errors-webpack-plugin --save-dev
```
[地址](https://www.npmjs.com/package/friendly-errors-webpack-plugin)

## 打包注释添加工具

[地址](https://doc.webpack-china.org/plugins/banner-plugin/)

#多页架构

[地址](https://segmentfault.com/a/1190000007126268)

# handlebars-loader 使用方法

[地址](http://debugrun.weweapp.com/a/F7Jh6Sy.html)

#关于使用webpack.ProvidePlugin注册的脚本

如果在入口文件中调用 zepto的方法,那么他会被打包到vendor中,

如果是在异步加载的脚本中调用,那么zepto会被打包到异步脚本中.(尽量不要让多个异步模块依赖类库文件)

#VueJS 开发常见问题集锦 (抽离css样式 blog,polyfill和transform-runtime)

异步加载组件时，会产生 polyfill 代码冗余

[地址](https://juejin.im/entry/591aa6ab44d904006c7b0938)

# webpack 可视化工具

[地址](http://blog.csdn.net/qq_16559905/article/details/78551719)