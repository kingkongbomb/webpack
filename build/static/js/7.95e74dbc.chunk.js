(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{247:function(e,t,n){},449:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var o=n(39),r=n(0),c=n.n(r);n(247);function a(){var e=Object(r.useState)("white"),t=Object(o.a)(e,2),n=t[0],a=t[1];function i(){var e;do{e=Math.floor(16777216*Math.random()).toString(16)}while(6!==e.length);return"#"+e.toUpperCase()}var u=Object(r.useState)(0),l=Object(o.a)(u,2),s=l[0],d=l[1];function f(e){console.log(e.key),"Enter"!==e.key&&"ArrowRight"!==e.key||a(i())}return Object(r.useEffect)((function(){var e;return d(null===(e=document.querySelector(".color-container"))||void 0===e?void 0:e.offsetTop),window.addEventListener("keydown",f),function(){window.removeEventListener("keydown",f)}}),[]),c.a.createElement("div",{className:"color-container",style:{background:n,height:"calc(100vh - ".concat(s,"px)")}},c.a.createElement("input",{placeholder:"Enter color code",value:n,onChange:function(e){return a(e.target.value.toUpperCase())},onFocus:function(e){return e.target.select()},style:{color:n},onClick:function(){navigator.clipboard.writeText(n)}}),c.a.createElement("button",{style:{color:n},onClick:function(){return a(i())}},"Generate Color!"))}}}]);