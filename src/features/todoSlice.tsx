import { createSlice } from "@reduxjs/toolkit";
import { todoList } from "../data/todos";
import type { Todo } from "../types/todo.type";

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: todoList,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: { payload: string }) => {
      const newTodo: Todo = {
        id: Date.now(),
        description: action.payload,
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
