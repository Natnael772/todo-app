import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const response = await fetch("http://localhost:7000/todos");
    if (response.ok) {
      console.log(response);
      const todos = await response.json();

      return { todos };
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const response = await fetch("http://localhost:7000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: payload.title,
      }),
    });
    if (response.ok) {
      const todo = await response.json();

      return { todo };
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
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
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id != action.payload.id);
    },
  },
  extraReducers: {
    [getTodosAsync.pending]: (state, action) => {
      console.log("fetching data...");
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      console.log("Fetched successfully");
      // console.log(action.payload);
      // console.log(state);
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
  },
});

//For exporting the actions
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

//For adding it to the store
export default todoSlice.reducer;

// extraReducers: (builder) => {
//   builder
//     .addCase(getTodosAsync.pending, (state) => {
//       state.loading = true;
//     })
//     .addCase(getTodosAsync.fulfilled, (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//     })
//     .addCase(getTodosAsync.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     });
