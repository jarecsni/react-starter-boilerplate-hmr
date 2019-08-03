const commonPaths = require('./common-paths');

const webpack = require('webpack');

const port = process.env.PORT || 3000;

const config = {
  mode: 'development',
  entry: {
    app: `${commonPaths.appEntry}/index.js`,
  },
  output: {
    filename: '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ],
    }],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
};

module.exports = config;
