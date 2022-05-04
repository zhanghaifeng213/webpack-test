const fs = require("fs")
const parser = require("@babel/parser")

const  moduleAnylaser = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = parser.parse(content, {
    sourceType: 'module'
  })
  console.log(ast.program.body);
  console.log(content);
}

moduleAnylaser('./src/index.js')