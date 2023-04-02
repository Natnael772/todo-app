const express = require("express");
const dotenv = require("dotenv");
// const colors = require("colors");
const cors = require("cors");
const bodyparser = require("body-parser");
// const { nanoid } = require("nanoid");

// dotenv.config({
//   path: "./config.env",
// });

const app = express();

app.use(cors());
app.use(bodyparser());

let todos = [
  {
    id: 1,
    title: "todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "todo 2",
    completed: false,
  },

  {
    id: 3,
    title: "todo 3",
    completed: false,
  },
  {
    id: 4,
    title: "todo 4",
    completed: false,
  },
  {
    id: 5,
    title: "todo 5",
    completed: false,
  },
];

app.get("/todos", (req, res) => res.send(todos));

app.post("/todos", (req, res) => {
  const todo = {
    title: req.body.title,
    id: Math.random().toString(),
    completed: false,
  };
  console.log(todo);
  todos.push(todo);

  return res.send(todos);
});

app.patch("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  const completed = Boolean(req.body.completed);
  if (index > -1) {
    todos[index].completed = completed;
  }
  return res.send(todos[index]);
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index > -1) {
    todos.splice(index, 1);
  }
  res.send(todos);
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
