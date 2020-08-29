import React from "react"
import ReactDOM from "react-dom"
import TodoApp from "./todoHooks.js"
import NavBS from './navbar.js'
ReactDOM.render(
  <>
    <NavBS/>
    <TodoApp/>
  </>,
  document.querySelector("#root")
);
