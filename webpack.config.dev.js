const path = require('path')
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 3000,
    open: true
  },
  plugins: [
    
  ],
})
