import UserItem from "./UserItem";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <div className={styles["user-list"]}>
      {users.map((user) => {
        return <UserItem key={user.id} name={user.name} age={user.age} />;
      })}
    </div>
  );
};

export default UserList;
