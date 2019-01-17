const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env) => {
  // create a nice object from the env variable
  // const envKeys = Object.keys(env).reduce((prev, next) => {
  //   prev[next] = JSON.stringify(env[next]);
  //   return prev;
  // }, {});
  return {
    mode: 'development',
    entry: ['./src/index.jsx'],
    output: {
      publicPath: '/',
      path: path.resolve('dist'),
      filename: 'app-bundle.js'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            'babel-loader'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: false,
              },
            },
          ],
        }
      ]
    },
    plugins: [
      // new webpack.DefinePlugin({
      //   'process.env': envKeys
      // }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html',
        // favicon: './src/images/favicon/favicon-16x16.png'
      }),
    ],
    devServer: {
      host: '0.0.0.0',
      disableHostCheck: true,
      overlay: true
    },
    // externals: {
    //   Config: JSON.stringify({
    //     webApiBaseUrl: 'http://10.20.6.229:9090'
    //   })
    // }
  }
}
