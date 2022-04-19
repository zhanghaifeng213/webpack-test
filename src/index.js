// import test from "./test"
// console.log(test.name);

// import _ from "lodash"
// import jquery from "jquery"

// console.log(_.join(["a","b","c"], "***"));


// console.log(_.join(["a","b","c"], "***"));
// console.log(_.join(["a","b","c"], "***"));

// async function getComponent() {
//     const {default: _} = await import(/*webpackChunkName:"lodash"*/'lodash')
//     var element =document.createElement("div")
//     element.innerHTML = _.join(["hello","world"], "-")
//     return element
// }

document.addEventListener("click",()=>{
    import(/* webpackPrefetch: true */ './click.js').then(({default:func}) => {
        func()
    })
})

