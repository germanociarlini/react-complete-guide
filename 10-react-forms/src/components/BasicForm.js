import useInput from "../hooks/use-input";

const nameValidator = (value) => value.trim() !== "";
const emailValidator = (value) => /\S+@\S+\.\S+/.test(value);

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    onValueChange: onFirstNameChange,
    onBlur: onFirstNameBlur,
    reset: resetFirstName,
  } = useInput(nameValidator);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    onValueChange: onLastNameChange,
    onBlur: onLastNameBlur,
    reset: resetLastName,
  } = useInput();

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    onValueChange: onEmailChange,
    onBlur: onEmailBlur,
    reset: resetEmail,
  } = useInput(emailValidator);

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameIsValid} ? '': 'invalid'`}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={onFirstNameChange}
            onBlur={onFirstNameBlur}
          />
          {firstNameHasError && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className={`form-control ${lastNameIsValid} ? '': 'invalid'`}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={onLastNameChange}
            onBlur={onLastNameBlur}
          />
          {lastNameHasError && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailIsValid} ? '': 'invalid'`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
        />
        {emailHasError && (
          <p className="error-text">E-mail must be of form "xxxx@yyyy.zzzz".</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
