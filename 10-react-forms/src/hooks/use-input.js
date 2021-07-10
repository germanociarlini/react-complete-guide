import { useReducer } from "react";

const initialInputState = {
  value: "",
  touched: false,
};

const inputStateReducer = (prevState, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...prevState, value: action.value };
    case "BLUR":
      return { ...prevState, touched: true };
    case "RESET":
      return initialInputState;
    default:
      throw new Error("Invalid action type for input reducer");
  }
};

const useInput = (validator) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValid = validator ? validator(inputState.value) : true;
  const hasError = !isValid && inputState.touched;

  const onValueChange = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const onBlur = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    onValueChange,
    onBlur,
    reset,
  };
};

export default useInput;
