import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, { payload }) {
      state.todos.push({ id: Date.now(), todo: payload, done: false });
    },
    remove(state, { payload }) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    reset: () => initialState,
    toggle(state, { payload }) {
      state.todos.find((todo) => todo.id === payload).done =
        !state.todos.find((todo) => todo.id === payload).done
    },
  },
});

export const { add, remove, reset, toggle } = todoSlice.actions;
export default todoSlice.reducer;
