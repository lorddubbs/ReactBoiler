 const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     historyApiFallback: true,
     static: './dist',
     open: true,
     compress: true,
     hot: true,
     port: 9000
   },
 });
