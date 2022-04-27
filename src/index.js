// import _ from "lodash"
// import $ from "jquery"
// import { ui } from './jquery.ui'

// ui()
// const dom = $('<div>')
// dom.html(_.join(['hello','world']), "-")
// $('body').append(dom)
console.log("hello world!");

if('serviceWorker' in navigator) {
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log("service-worker registed");
    }).catch(error => {
      console.log("service-worker register error");
    })
  })
}