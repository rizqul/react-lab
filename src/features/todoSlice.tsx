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
    // 2. type payload diganti
    addTodo: (state, action: { payload: Todo }) => {
      const newTodo: Todo = {
        // 3. implement payload
        id: action.payload.id,
        description: action.payload.description,
        isCompleted: action.payload.isCompleted,
      };
      state.todos.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
