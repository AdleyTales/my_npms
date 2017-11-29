
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const webpackDevServer = require('webpack-dev-server');

// var webpackConfig = {
//   entry: './src/index.js',
//   output: {
//     path: __dirname + '/dist',
//     filename: 'index_bundle.js'
//   },
//   module: {
//     loaders: [
//       { test: /\.css$/, loader:['css-loader','style-loader']}
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       hash: true,
//       filename: 'demo.html',
//       title: '这是demo页面',
//       template: './template/a.template',
//       favicon: './img/linus.ico'
//     })
//   ]
// };


var webpackConfig = {
  entry: './css-loader.js',
  output: {
    path: __dirname + '/dist',
    filename: 'cssloaderdemo.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader:'style-loader!css-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'cssloader.html',
      title: 'cssloader',
      template: './template/a.template',
      favicon: './img/linus.ico'
    })
  ]
};


module.exports = webpackConfig;
