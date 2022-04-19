// import test from "./test"
// console.log(test.name);

import _ from "lodash"
import jquery from "jquery"

console.log(_.join(["a","b","c"], "***"));


console.log(_.join(["a","b","c"], "***"));
console.log(_.join(["a","b","c"], "***"));

// function getComponent() {
//     return import(/*webpackChunkName:"lodash"*/'lodash').then(({default: _}) => {
//         var element =document.createElement("div")
//         element.innerHTML = _.join(["hello","world"], "-")
//         return element
//     })
// }

// getComponent().then(element => {
//     document.body.appendChild(element)
// })