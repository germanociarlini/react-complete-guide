import React, { useContext } from "react";
import { TodosContext } from "../store/todosContext";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todos = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todos.items.map((item) => (
        <TodoItem key={item.id} todo={item} onClick={todos.removeTodo} />
      ))}
    </ul>
  );
};

export default Todos;
