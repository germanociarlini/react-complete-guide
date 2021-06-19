import { useState } from "react";
import styles from "./App.module.css";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const onAddUserHandler = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div className={styles["app"]}>
      <main>
        <UserInput onAddUser={onAddUserHandler} />
        <UserList users={users} />
      </main>
    </div>
  );
};

export default App;
