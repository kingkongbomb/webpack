(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{248:function(e,t,o){},450:function(e,t,o){"use strict";o.r(t);var n=o(39),a=o(0),c=o.n(a);o(248);function r(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"todo-input-underline"}),c.a.createElement("input",{autoComplete:"off",id:"todo-input",type:"text",placeholder:"Add To-Do!",onKeyDown:e.addTodo}))}function d(e){var t=e.todoList.map((function(t,o){return c.a.createElement(l,{todoItem:t,key:o,id:o,toggleTodos:e.toggleTodos,removeTodo:e.removeTodo})}));return c.a.createElement("section",{id:"todo-list"},t)}function l(e){return c.a.createElement("section",{className:"todo-item"},c.a.createElement("button",{className:"close",onClick:function(){return e.removeTodo(e.id)}},"\xd7"),c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:e.todoItem.done,onChange:function(){return e.toggleTodos(e.id)}}),c.a.createElement("span",{className:"cb"}),c.a.createElement("span",{className:"todo"},e.todoItem.todo)))}t.default=function(){var e=Object(a.useState)(JSON.parse(localStorage.todos||"[]")),t=Object(n.a)(e,2),o=t[0],l=t[1];return Object(a.useEffect)((function(){localStorage.todos=JSON.stringify(o)}),[o]),c.a.createElement("div",{className:"todo-container"},c.a.createElement("h1",{id:"todoTitle"},"To Do List"),c.a.createElement(r,{addTodo:function(e){if("Enter"===e.key){var t=o.slice();t.push({todo:e.target.value,done:!1}),l(t),e.target.value=""}}}),c.a.createElement(d,{todoList:o,toggleTodos:function(e){var t=o.slice();t[e].done=!t[e].done,l(t)},removeTodo:function(e){var t=o.slice();t.splice(e,1),l(t)}}))}}}]);