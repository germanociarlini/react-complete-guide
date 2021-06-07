import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState("2021");

  const onApplyFilterHandler = (filterData) => {
    setFilterYear(filterData);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          value={filterYear}
          onApplyFilter={onApplyFilterHandler}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
