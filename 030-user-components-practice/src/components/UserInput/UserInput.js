import { useState } from "react";
import Button from "../UI/Button/Button";
import Alert from "../UI/Alert/Alert";
import style from "./UserInput.module.css";

const UserInput = ({ onAddUser }) => {
  const [inputtedName, setInputtedName] = useState("");
  const [inputtedAge, setInputtedAge] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const onInputtedNameChangeHandler = (event) => {
    setInputtedName(event.target.value);
  };

  const onInputtedAgeChangeHandler = (event) => {
    setInputtedAge(+event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      id: performance.now(),
      name: inputtedName,
      age: inputtedAge,
    };

    const validationErrors = validateUser(newUser);
    if (validationErrors.length === 0) {
      onAddUser(newUser);
      setInputtedName("");
      setInputtedAge(0);
    } else {
      setAlertMessage(validationErrors.join("/n"));
      setShowAlert(true);
      //alert(validationErrors.join("/n")); // display string array in separate lines
    }
  };

  const onCloseAlertHandler = () => {
    setShowAlert(false);
    setAlertMessage("");
  };

  const validateUser = (user) => {
    const errors = [];
    if (user.name.length === 0) {
      errors.push("Name must contain at least 1 letter.");
    }
    if (user.age < 0) {
      errors.push("Age must be greater than 0.");
    }
    if (user.name.length > 200) {
      errors.push("Age must be less than 200.");
    }

    return errors;
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={style["container"]}>
        <div className={style["input-element"]}>
          <span>Username</span>
          <input
            type="text"
            value={inputtedName}
            onChange={onInputtedNameChangeHandler}
            placeholder="Your name here..."
          />
        </div>
        <div className={style["input-element"]}>
          <span>Age</span>
          <input
            type="number"
            min="0"
            max="200"
            step="1"
            value={inputtedAge}
            onChange={onInputtedAgeChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </div>
      {showAlert && (
        <Alert message={alertMessage} onCloseEmit={onCloseAlertHandler} />
      )}
    </form>
  );
};

export default UserInput;
