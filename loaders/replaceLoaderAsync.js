const loaderUtils = require('loader-utils')
module.exports = function(source) {
  
  const options = loaderUtils.getOptions(this)
  console.log(options);
  // const result = source.replace("world", options.name)
  // this.callback(null, result) 
  const callback = this.async()
  setTimeout(() => {
    const result = source.replace("world", options.name)
    callback(null, result)
  }, 1000)
}