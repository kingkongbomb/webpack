import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, { payload: { val } }) {
      state.todos.push({ id: Date.now(), todo: val, done: false });
    },
    remove(state, { payload: { id } }) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    reset: () => initialState,
    toggle(state, { payload: { id, val } }) {
      state.todos.find((todo) => todo.id === id).done = val;
    },
  },
});

export const { add, remove, reset, toggle } = todoSlice.actions;
export default todoSlice.reducer;
