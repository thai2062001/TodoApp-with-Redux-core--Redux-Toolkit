import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    checkedPriority: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});

export default todoSlice;
