const fs = require("fs")
const path = require("path")
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const babel = require("@babel/core")

const  moduleAnylaser = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = parser.parse(content, {
    sourceType: 'module'
  })
  const dependencies = {}
  traverse(ast, {
    ImportDeclaration({node}) {
      // console.log(node);
      const dirname = path.dirname(filename)
      const newFile = './'+path.join(dirname, node.source.value)
      dependencies[node.source.value] = newFile
    }
  })
  // console.log('dependencies', dependencies);
  const {code} = babel.transformFromAst(ast,null,{
    presets: ["@babel/preset-env"]
  })
  // console.log('code', code);
  return {
    filename,
    dependencies,
    code
  }
}

const moduleInfo = moduleAnylaser('./src/index.js')
console.log("moduleInfo", moduleInfo);