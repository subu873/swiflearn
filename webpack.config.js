const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//const HtmlWebpackPlugin = require("html-webpack-plugin")
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: './public/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      { test: /\.(css)$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './public/index.html',
        to: 'index.html'
      },
      {
        from: './public/index.js',
        to: 'index.js'
      },
      {
        from: './public/site.webmanifest',
        to: 'site.webmanifest'
      },
      {
        from: './public/images/',
        to: 'images'
      },
      {
        from: './public/images/favicon.ico',
        to: 'favicon.ico'
      },
      {
        from: './public/robots.txt',
        to: 'robots.txt'
      }
    ]),
    new CleanWebpackPlugin(),
    // new WorkboxWebpackPlugin.InjectManifest({
    // swSrc: "./src/src-sw.js",
    // swDest: "sw.js"
    // })
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'sw.js'
    })
  ]
}
