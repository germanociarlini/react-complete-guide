import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const onAddUserHandler = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
