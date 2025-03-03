const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader/dist")

module.exports = {
  // 入口文件
  entry: { 
    main: './src/main.js'
  },
  // 出口文件
  output: {
    // 输出到dist文件夹（打包自动生成）
    path: path.resolve(__dirname, 'dist'), // _dirname:表示当前文件的绝路径（根目录）
    // 输出文件名在dist文件夹里的js文件夹的chunk.js下
    filename: 'js/chunk-[contenthash].js', // 使用由生成的内容产生的hash
    clean: true // 打包时自动覆盖原来的dist，不需要手动删除
  },
  
  plugins: [
    // HtmlWebpackPlugin - 打包index.html文件
    new HtmlWebpackPlugin({  
      template: './public/index.html', // 指定模版文件
      filename: 'index.html', // 打包以后的名称
      inject: 'body' // js插入到body
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // 正则匹配css文件
        use: ['style-loader', 'css-loader']  // 注意顺序，是从后往前加载的
      },
      {
        test: /\.less$/, // 处理.less结尾的文件
        use: ['style-loader', 'css-loader', 'less-loader', {
          // 部分css3属性需要通过postcss-loader和postcss-preset-env才能添加浏览器兼容性前缀，以确保在不同浏览器上的一致性
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                ['postcss-preset-env',]
              ]
            }
          }
        }]
      },
      // 处理图像资源
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
      },
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
      // 处理.vue结尾的文件
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}