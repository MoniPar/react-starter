import React, { useState } from 'react';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2021");

  const saveExpenseYearHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  // Filter through the updated expenses array, 
  // return the items with a year that matches the one selected in the dropdown
  const filteredByYear = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={enteredYear}
        onSaveExpenseYear={saveExpenseYearHandler}
      />
      <ExpensesChart expenses={filteredByYear} />
      <ExpensesList items={filteredByYear}/>
    </Card>
  );
};

export default Expenses;