import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2021");

  const saveExpenseYearHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  // Filter through the updated expenses array, return the items with a year that matches the one selected in the dropdown
  const filteredByYear = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={enteredYear}
        onSaveExpenseYear={saveExpenseYearHandler}
      />
      {/* Creates a new array of JSX elements based on the filtered array */}
      {filteredByYear.map((expense) => (
        <ExpenseItem
          // Add key prop to set a unique value per list item so that React can identify individual items
          key={expense.id}
          name={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;