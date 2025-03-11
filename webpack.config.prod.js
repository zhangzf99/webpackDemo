const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(), // 所要清理的文件夹名称-用于在打包前清理上一次项目生成的 bundle 文件
  ],
})
