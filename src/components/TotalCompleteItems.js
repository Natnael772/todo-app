import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  //extract data from the store
  //below state is my entire redux store

  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed == true)
  );
  return <h4 className="mt-3">Total Complete Items: 5</h4>;
};
export default TotalCompleteItems;
