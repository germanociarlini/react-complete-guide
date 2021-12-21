import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/authContext";
import classes from "./ProfileForm.module.css";

const NEW_PASSWORD_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDg5yTnqyVSs6EgVCpCkugNe9Jp5g-oUVA";

const ProfileForm = () => {
  const newPasswordRef = useRef();
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const idToken = authContext.token;
    const password = newPasswordRef.current.value;

    // validate :)

    await fetch(NEW_PASSWORD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken, password, returnSecureToken: true }),
    });

    history.replace("/");
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
