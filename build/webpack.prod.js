const {merge} = require("webpack-merge")
const commonConfig = require("./webpack.common")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin  = require("optimize-css-assets-webpack-plugin");

// webpack plugin可以在webpack运行到某个时刻的时候，帮你做一些事情

const prodConfig = {
  mode: "production", // 开发环境打包， 打包的代码不会被压缩
  devtool: "cheap-module-source-map", // 使用source-map,
  // cheap -> 生成source-map的时候不带列信息，只带行信息，
  // module -> 对loader里的代码也生成source-map
  // eval -> 执行方式
  // source-map -> 生成.source-map文件 但是用eval .source-map文件被放到打包生成的main.js里面
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].chunk.css',
  })],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
    ],
  },
};

module.exports = merge(commonConfig, prodConfig)