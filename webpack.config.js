const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

// webpack plugin可以在webpack运行到某个时刻的时候，帮你做一些事情

module.exports = {
  mode: "production", // 开发环境打包， 打包的代码不会被压缩
  devtool: "cheap-module-source-map", // 使用source-map,
  // cheap -> 生成source-map的时候不带列信息，只带行信息，
  // module -> 对loader里的代码也生成source-map
  // eval -> 执行方式
  // source-map -> 生成.source-map文件 但是用eval .source-map文件被放到打包生成的main.js里面
  entry: {
    main: "./src/index.js", // 入口
    // sub: './src/index.js'
  },
  devServer: {
    contentBase: "./dist",
    open: true,
    port: 8080,
    proxy: {
      "/api": "http://localhost:3000",
    },
    hot: true,
    hotOnly: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "images/",
            limit: 2048, // 生成base64,减少http请求，提高加载速度
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2, // scss 引入的scss重新使用"sass-loader", "postcss-loader",处理
            },
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 忽略第三方模块js代码，提高打包速度
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin(), // HMR
  ],
  // optimization: {
  //   usedExports: true
  // },
  output: {
    // publicPath: "http:cdn.com",
    filename: "[name]_[hash].js", // name 对应entry
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
};
