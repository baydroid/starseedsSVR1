const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  output: {
    path: resolve(__dirname, '../dist/swapwidget'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
    new NodePolyfillPlugin(),
  ],
};
