(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{226:function(e,t,n){},424:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var c=n(17),o=n(21),r=n(0),a=n.n(r);n(226);function u(){var e=Object(r.useState)("white"),t=Object(o.a)(e,2),n=t[0],u=t[1];function i(){var e;do{e=Math.floor(16777216*Math.random()).toString(16)}while(6!==e.length);return"#"+e.toUpperCase()}var l=Object(r.useState)(0),f=Object(o.a)(l,2),s=f[0],d=f[1];function v(e){"Enter"===e.key?y():"ArrowRight"===e.key?function(){if(h.length===j+1){var e=i();u(e),m((function(t){return[].concat(Object(c.a)(t),[e])})),k((function(e){return e+1}))}else u(h[j+1]),k((function(e){return e+1}))}():"ArrowLeft"===e.key&&j>0&&(u(h[j-1]),k((function(e){return e-1})))}Object(r.useEffect)((function(){var e;d(null===(e=document.querySelector(".color-container"))||void 0===e?void 0:e.offsetTop)}),[]),Object(r.useEffect)((function(){return window.addEventListener("keydown",v),function(){window.removeEventListener("keydown",v)}}),[v]);var p=Object(r.useState)([]),b=Object(o.a)(p,2),h=b[0],m=b[1],w=Object(r.useState)(-1),g=Object(o.a)(w,2),j=g[0],k=g[1];function y(){var e=i();u(e),m((function(t){return[].concat(Object(c.a)(t),[e])})),k(h.length)}return a.a.createElement("div",{className:"color-container",style:{background:n,height:"calc(100vh - ".concat(s,"px)")}},a.a.createElement("input",{placeholder:"Enter color code",value:n,onChange:function(e){return u(e.target.value.toUpperCase())},onFocus:function(e){return e.target.select()},style:{color:n},onClick:function(){navigator.clipboard.writeText(n)}}),a.a.createElement("button",{style:{color:n},onClick:y},"Generate Color!"),a.a.createElement("div",{className:"colSquareCont"},h.map((function(e,t){return a.a.createElement("div",{onClick:function(){u(h[t]),k(t)},className:t===j?"colSquare active":"colSquare",style:{background:e}})}))))}}}]);
//# sourceMappingURL=5.d9c20ace.chunk.js.map