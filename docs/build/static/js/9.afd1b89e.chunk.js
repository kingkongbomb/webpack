(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[9],{451:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(134),r=a(162),c=a(39),i=a(0),l=a.n(i),o=a(444),s=(a(65),a(98)),d=a(55);function m(){var e=Object(i.useState)([{infected:57784,lastUpdatedAtApify:"2020-10-01T14:45:00.000Z"},{infected:57794,lastUpdatedAtApify:"2020-10-02T14:40:00.000Z"}]),t=Object(c.a)(e,2),a=t[0],m=t[1],u=Object(i.useState)(!0),f=Object(c.a)(u,2),p=f[0],y=f[1],h=Object(i.useState)("infected"),b=Object(c.a)(h,2),v=b[0],g=b[1];Object(i.useEffect)((function(){E(a),fetch("https://api.apify.com/v2/datasets/suHgi59tSfu02VsRO/items?format=json&clean=1&fields=infected,lastUpdatedAtApify").then((function(e){return e.json()})).then((function(e){m(e),E(e),y(!1)}))}),[]);var E=function(e){var t=Object(r.a)(e),a=0;t=(t=t.map((function(e,r){var c=new Date(e.lastUpdatedAtApify.replace(/Z$/,"")),i=c.toLocaleString("en",{day:"2-digit"}),l=c.toLocaleString("en",{month:"2-digit"}),o=c.toLocaleString("en",{month:"short"}),s=c.toLocaleString("en",{year:"numeric"}),d=r>0?e.infected-t[r-1].infected:0;return d<1?d=a:a=d,Object(n.a)(Object(n.a)({},e),{},{day:i,month:l,monthStr:o,year:s,dayMonth:"".concat(i,"-").concat(o),dayNum:parseInt(c.toLocaleString("en",{day:"numeric"})),monthNum:parseInt(c.toLocaleString("en",{month:"numeric"})),newCases:d})}))).filter((function(e){return(e.dayNum<17||e.dayNum>29||5!==e.monthNum)&&e.newCases<=1e4}));var c=[];t=t.filter((function(e){return c.includes(e.dayMonth)||null==e.infected?null:(c.push(e.dayMonth),e)})),m(t)},S=l.a.createElement(o.b,{data:a},l.a.createElement(o.a,{dataKey:v,stroke:"var(--bs-teal)",fill:"var(--bs-teal)"}),l.a.createElement(o.e,{stroke:"var(--bs-gray-dark)",dataKey:"dayMonth"}),l.a.createElement(o.f,{stroke:"var(--bs-gray-dark)"}),l.a.createElement(o.d,{cursor:!0}));return l.a.createElement(s.a,null,l.a.createElement("div",{style:{height:"200px",width:"200px",border:"6px solid var(--bs-teal)",borderRadius:"50%",margin:"50px auto",userSelect:"none"}},l.a.createElement("div",{style:{textAlign:"center",transform:"translateY(5%)",fontWeight:"bold",color:"var(--bs-teal)"}},l.a.createElement("div",{style:{fontSize:"80px"}},a[a.length-1].newCases),l.a.createElement("div",{style:{fontSize:"20px"}},"NEW CASES"))),p&&l.a.createElement("h1",{style:{textAlign:"center"}},l.a.createElement("div",{className:"loader",style:{display:"inline-block",verticalAlign:"middle",height:"calc(1.375rem + 1.5vw)",width:"calc(1.375rem + 1.5vw)",borderColor:"var(--bs-teal)",borderWidth:"4px"}}),l.a.createElement("span",{style:{verticalAlign:"middle",color:"var(--bs-teal)"}}," ","Loading Latest Data"," ")),l.a.createElement("h3",{style:{textAlign:"center",color:"var(--bs-info)",marginTop:"25px"}},"Last Updated: ",a[a.length-1].day," ",a[a.length-1].monthStr," ",a[a.length-1].year),!p&&l.a.createElement("div",{style:{margin:"60px 0"}},l.a.createElement("div",{style:{color:"var(--bs-teal)",textAlign:"center",fontSize:"40px"}},"infected"===v?"Total Cases":"New Daily Cases"),l.a.createElement(o.c,{width:"100%",aspect:2.5},S),l.a.createElement("div",{style:{marginTop:"25px"}}),l.a.createElement(d.a,{active:"infected"===v,variant:"outline-info",onClick:function(e){g("infected"),e.currentTarget.blur(),m(Object(r.a)(a))}},"Total Cases"),l.a.createElement(d.a,{active:"infected"!==v,variant:"outline-info",onClick:function(e){g("newCases"),e.currentTarget.blur(),m(Object(r.a)(a))}},"New Daily Cases")))}}}]);