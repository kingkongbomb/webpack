import React from "react";
import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo, addTodo } from "./todoSlice";

function TodoApp() {
  const title = useSelector((state) => state.todo.title);
  return (
    <div className="container">
      <h1>{title}</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
function TodoInput() {
  const dispatch = useDispatch();
  return (
    <>
      <div id="todo-input-underline"></div>
      <input
        autoComplete="off"
        id="todo-input"
        type="text"
        placeholder="Add To-Do!"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(addTodo(e.target.value));
            e.target.value = "";
          }
        }}
      />
    </>
  );
}
function TodoList() {
  const todoList = useSelector((state) => state.todo.todos);
  const todos = todoList.map((todo, index) => (
    <Todo key={index} {...todo} index={index} />
  ));
  return <section id="todo-list">{todos}</section>;
}
function Todo(props) {
  const dispatch = useDispatch();
  return (
    <section className="todo-item">
      <button
        className="close"
        onClick={() => dispatch(removeTodo(props.index))}
      >
        ×
      </button>
      <label>
        <input
          type="checkbox"
          checked={props.done}
          onChange={() => dispatch(toggleTodo(props.index))}
        />
        <span className="cb"></span>
        <span className="todo">{props.todo}</span>
      </label>
    </section>
  );
}

export default TodoApp;
