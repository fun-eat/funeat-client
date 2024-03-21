const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: false,
      hash: true,
    }),
  ],
});
