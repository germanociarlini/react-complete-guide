import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo; onClick: (id: string) => void }> = ({
  todo,
  onClick,
}) => {
  const onClickHandler = () => {
    onClick(todo.id);
  };

  return (
    <li className={classes.item} onClick={onClickHandler}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
