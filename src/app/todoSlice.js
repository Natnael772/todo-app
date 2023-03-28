import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };

      state.push(newTodo);
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id == action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

//For exporting the actions
export const { addTodo, toggleComplete } = todoSlice.actions;

//For adding it to the store
export default todoSlice.reducer;
