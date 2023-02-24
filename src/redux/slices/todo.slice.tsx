import { createSlice } from "@reduxjs/toolkit";

export interface IRootState {
  todo: IRootTodoState;
}

export interface TodoModel {
  id: string;
  value: string;
}

export type TodoState = "idle" | "todo" | "active" | "done";

export interface IRootTodoState {
  todos: TodoModel[];
  status: TodoState;
}

const initialState: IRootTodoState = {
  todos: [],
  status: "idle",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

// export const selectTodo = (state) => state.todo;

export const todoReducer = todoSlice.reducer;
