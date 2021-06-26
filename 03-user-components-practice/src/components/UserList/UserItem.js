import styles from "./UserItem.module.css";

const UserItem = ({ name, age }) => {
  return (
    <div className={styles["user-item"]}>
      <span>
        {name}, {age} years old.
      </span>
    </div>
  );
};

export default UserItem;
