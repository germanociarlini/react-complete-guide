import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onSaveNewExpense }) => {
  const [isEditingForm, setIsEditingForm] = useState(false);

  const onSaveNewExpenseHandler = (newExpenseData) => {
    onStopEditingHandler();
    onSaveNewExpense(newExpenseData);
  };

  const onStartEditingHandler = () => {
    setIsEditingForm(true);
  };

  const onStopEditingHandler = () => {
    setIsEditingForm(false);
  };

  let formContent = (
    <button onClick={onStartEditingHandler}>Add Expense</button>
  );

  if (isEditingForm) {
    formContent = (
      <ExpenseForm
        onSaveNewExpense={onSaveNewExpenseHandler}
        onStopEditing={onStopEditingHandler}
      />
    );
  }

  return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
