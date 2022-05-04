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

const makeDependenciesGraph = (entry) => {
  const entryModule = moduleAnylaser(entry)
  const graphArray = [entryModule]
  for(let i = 0;i<graphArray.length;i++) {
    const item = graphArray[i]
    const {dependencies} = item
    if(dependencies) {
      for(let j in dependencies) {
        graphArray.push(moduleAnylaser(dependencies[j]))
      }
    }
  }
  const graph = {}
  graphArray.forEach((item)=>{
    graph[item.filename] = {
      dependencies: item.dependencies,
      code: item.code
    }
  })
  
  return graph
}

const graghInfo = makeDependenciesGraph('./src/index.js')
console.log("graghInfo", graghInfo);