
const webpack = require("webpack");
const {merge} = require("webpack-merge")
const commonConfig = require("./webpack.common")

// webpack plugin可以在webpack运行到某个时刻的时候，帮你做一些事情

const devConfig = {
  mode: "development", // 开发环境打包， 打包的代码不会被压缩
  devtool: "cheap-module-eval-source-map", // 使用source-map,
  // cheap -> 生成source-map的时候不带列信息，只带行信息，
  // module -> 对loader里的代码也生成source-map
  // eval -> 执行方式
  // source-map -> 生成.source-map文件 但是用eval .source-map文件被放到打包生成的main.js里面
  
  devServer: {
    contentBase: "./dist",
    open: true,
    port: 8080,
    proxy: {
      "/api": "http://localhost:3000",
    },
    hot: true,
    // hotOnly: true,
  },
  module: {
    rules:[
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
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR
  ],
  optimization: {
    usedExports: true
  },
  output: {
    // publicPath: "http:cdn.com",
    publicPath: "./",
    filename: "[name].js", // name 对应entry
  },
};

module.exports = merge(commonConfig, devConfig)