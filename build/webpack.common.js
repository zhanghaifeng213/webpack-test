const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js', // 入口
    // sub: './src/index.js'
  },
  resolve: {
    extensions: ['.css', '.jpg', '.js', '.jsx'],
    alias: {
      hello: path.resolve(__dirname, '../src/child'),
    },
    mainFiles: ['index', 'child'],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048, // 生成base64,减少http请求，提高加载速度
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // scss 引入的scss重新使用"sass-loader", "postcss-loader",处理
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/, // 忽略第三方模块js代码，提高打包速度
        include: path.resolve(__dirname, '../src'),
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll/venders.dll.js'),
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/venders.manifest.json'),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000, // 大于30kb做代码分割
      maxSize: 0, // 50kb lodash 1mb
      minChunks: 1, // 至少一个依赖的文件被引入 进行代码分割
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: { // 缓存组
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          // filename: "vendors.js"
        },
        default: {
          // minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          filename: 'common.js',
        },
      },
    },
  },
  output: {
    // publicPath: "http:cdn.com",
    filename: '[name].js', // name 对应entry
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
};
