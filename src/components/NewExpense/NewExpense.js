import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onSaveNewExpense }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={onSaveNewExpense} />
    </div>
  );
};

export default NewExpense;
