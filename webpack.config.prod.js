const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    
  ],
})
