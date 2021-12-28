import { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onSubmit: (text: string) => void }> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const text = textRef.current!.value;

    if (text.trim().length > 0) {
      props.onSubmit(text);
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
