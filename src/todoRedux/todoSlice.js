import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoData",
  initialState: {
    title: "To Do List",
    todos: JSON.parse(localStorage.todos || "[]"),
  },
  reducers: {
    toggleTodo: (state, action) => {
      state.todos[action.payload].done = !state.todos[action.payload].done;
      localStorage.todos = JSON.stringify(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
      localStorage.todos = JSON.stringify(state.todos);
    },
    addTodo: (state, action) => {
      state.todos.push({ todo: action.payload, done: false });
      localStorage.todos = JSON.stringify(state.todos);
    },
  },
});

export default todoSlice.reducer;
export const { toggleTodo, removeTodo, addTodo } = todoSlice.actions;
