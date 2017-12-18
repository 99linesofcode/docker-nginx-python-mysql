const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './assets/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: ["env", "react"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.sass|.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({ filename: "bundle.css", allChunks: true }),
    new HtmlWebpackPlugin({ template: "./assets/index.html", inject: "body" })
  ]
};
