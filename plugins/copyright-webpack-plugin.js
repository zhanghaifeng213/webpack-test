class CopyrightWebpackPlugin {
  constructor(options) {
    console.log("插件被使用了", options);
  }
  apply(compiler) {
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation)=>{
      console.log('compile');
    })
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb)=>{
      debugger
      console.log(compilation.assets);
      compilation.assets['copyright.txt'] = {
        source: function() {
          return 'copyright by zhf'
        },
        size: function() {
          return 16
        }
      }
      cb()
    })
  }
}

module.exports = CopyrightWebpackPlugin