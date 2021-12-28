import { useContext, useRef } from "react";
import { TodosContext } from "../store/todosContext";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const todos = useContext(TodosContext);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const text = textRef.current!.value;

    if (text.trim().length > 0) {
      todos.addTodo(text);
    }
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <label htmlFor="text">Text</label>
      <input type="text" id="text" ref={textRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
