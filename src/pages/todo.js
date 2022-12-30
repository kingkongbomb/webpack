import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, remove, toggle, reset } from "../redux/todos";
import "../styles/todo.css";

function TodoApp() {
  const dispatch = useDispatch();
  function toggleTodo(id) {
    dispatch(toggle(id));
  }

  function addTodo(e) {
    dispatch(add(e.target.value));
    e.target.value = "";
  }

  function removeTodo(id) {
    dispatch(remove(id));
  }

  function resetTodo() {
    dispatch(reset());
  }

  return (
    <div className="todo-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 id="todoTitle">To Do List</h1>
        <button className="reset" onClick={resetTodo}>
          Reset
        </button>
      </div>

      <TodoInput addTodo={addTodo} />
      <TodoList
        todoList={useSelector(({ todo }) => todo.todos)}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

function TodoInput({ addTodo }) {
  return (
    <>
      <div id="todo-input-underline" />
      <input
        autoComplete="off"
        id="todo-input"
        type="text"
        placeholder="Add To-Do!"
        onKeyDown={(e) => e.key === "Enter" && addTodo(e)}
      />
    </>
  );
}

function TodoList({ todoList, toggleTodo, removeTodo }) {
  const renderedList = todoList.map((todo, index) => (
    <Todo
      key={todo.id}
      todoItem={todo}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
    />
  ));
  return <section id="todo-list">{renderedList}</section>;
}

function Todo({ todoItem, toggleTodo, removeTodo }) {
  return (
    <section className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todoItem.done}
          onChange={() => toggleTodo(todoItem.id)}
        />
        <span className="cb"></span>
        <span className="todo">{todoItem.todo}</span>
      </label>
      <button className="close" onClick={() => removeTodo(todoItem.id)}>
        &times;
      </button>
    </section>
  );
}

export default TodoApp;
