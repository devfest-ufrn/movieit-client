const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const buildDirectory = './static/';

module.exports = {
  entry: [
    './src/main.js'
  ],
  devServer: {
    hot: true,
    contentBase: './'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ]
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: 'dashes',
              localIdentName: '[local]---[hash:base64:6]'
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      test: /\.js($|\?)/i
    })
  ]
};
