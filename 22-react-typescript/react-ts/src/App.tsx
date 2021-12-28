import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (text: string) => {
    setTodos((prev) => [...prev, new Todo(text)]);
  };

  return (
    <div>
      <NewTodo onSubmit={onAddTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
