import styles from "./Alert.module.css";
import Button from "../Button/Button";

const Alert = ({ message, onCloseEmit }) => {
  const onCloseHandler = () => {
    document.removeEventListener("keydown", onKeyDownHandler);
    onCloseEmit();
  };

  const onKeyDownHandler = (key) => {
    if (key.code === "Escape") {
      onCloseHandler();
    }
  };

  document.addEventListener("keydown", onKeyDownHandler);

  return (
    <div className={styles["background"]} onClick={onCloseHandler}>
      <div className={styles["alert"]}>
        <header>
          <span>Notification</span>
          <span className={styles["close-button"]} onClick={onCloseHandler}>
            x
          </span>
        </header>
        <main>{message}</main>
        <footer>
          <Button type="button" onClick={onCloseHandler}>
            Close
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default Alert;
