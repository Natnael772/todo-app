import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../app/todoSlice";


const TodoList = () => {
  //extract data from the store
  //below state is my entire redux store
  const todos = useSelector((state) => state.todos);

  //when the component loads first time and dispatch for avoiding side effects
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
