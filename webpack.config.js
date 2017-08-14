var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
