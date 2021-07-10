import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    onValueChange: onNameChange,
    onBlur: onNameBlur,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    onValueChange: onEmailChange,
    onBlur: onEmailBlur,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const formIsValid = nameIsValid && emailIsValid;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          onBlur={onNameBlur}
        />
        {nameHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
        />
        {emailHasError && (
          <p className="error-text">E-mail must contain a '@' symbol.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
