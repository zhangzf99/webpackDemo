https://blog.csdn.net/weixin_46714216/article/details/140741361
### 第一次提交内容
#### 1、搭建的脚手架

  ```js
npm init // 1.在空文件夹初始化package.json文件
npm install webpack webpack-cli // 2.安装webpack以及webpack-cli依赖包
  ```
#### 2、搭建初始骨架

```js
新建main.js文件和tools文件夹
新建public/index.html文件
```

#### 3、配置出入口文件

#### 4、打包index.html文件

```js
npm install html-webpack-plugin -D

new HtmlWebpackPlugin({  
  template: './public/index.html', // 指定模版文件
  filename: 'index.html', // 打包以后的名称
  inject: 'body' // js插入到body
}),
```

#### 5、处理css和less文件

```js
npm install css-loader style-loader

rules: [
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader', {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            ['postcss-preset-env',]
          ]
        }
      }
    }]
  }
]

npm install postcss-loader postcss-preset-env -D  添加浏览器兼容性前缀，确保在不同浏览器上的一致性
```

#### 6、处理图像资源

```js
npm i file-loader url-loader -D

{
  test: /\.(png|jpe?g|gif)$/,
  type: 'asset',
  generator: {
    filename: 'img/[name].[hash:6][ext]'
  },
  parser: {
    dataUrlCondition: {
      maxSize: 10 * 1024
    }
  }
}
```



#### 7、babel的转换

```js
 // 处理ES6，转换成浏览器可以识别的ES5代码
{
  test: /\.js$/,
  loader: 'babel-loader',
  // use: {
  //   loader: 'babel-loader',
  //   options: {
  //     presets: ['@babel/preset-env']
  //   }
  // }
},
```



#### 8、处理.vue结尾的文件

```js
npm i vue vue-loader -D

{
  test: /\.vue$/,
  loader: 'vue-loader'
}

```



#### 9、自动运行打包后的index文件

```js
npm i webpack-dev-server -D

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "serve": "webpack serve"
 },
```

### 第二次提交
1、配置webpack的开发环境和生产环境

```js
npm install --save-dev webpack-merge

在Webpack项目中，通常会有一个webpack.config.common.js文件作为公共配置，然后针对开发环境（development）和生成环境（production）分别创建webpack.config.dev.js和webpack.config.prod.js。为了在开发环境和生产环境中都能引入和使用这个公共配置，可以通过在各自的配置文件中合并（merge）公共配置来实现。
```





