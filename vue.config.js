const path = require("path")
module.exports = {
  // 原生webpack配置
  // configureWebpack: {
  //   devServer: {
  //     contentBase:  [path.resolve(__dirname, 'static')]
  //   }
  // }
  devServer: {
    contentBase:  [path.resolve(__dirname, 'static')]
  }
}