const path = require("path")

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  // externals: ['lodash'],
  externals: {
    lodash: {
      root: '_', // 全局变量
      commonjs: 'lodash' // commonjs
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "library.js",
    libraryTarget: "umd",
    // libraryTarget: "this",
    library: "library"
  }
}