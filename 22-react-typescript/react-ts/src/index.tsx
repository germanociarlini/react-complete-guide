import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import TodosProvider from "./store/todosContext";

ReactDOM.render(
  <TodosProvider>
    <App />
  </TodosProvider>,
  document.getElementById("root")
);
