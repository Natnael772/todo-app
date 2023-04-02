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
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
