import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = (props) => {

    const [enteredYear, setEnteredYear] = useState('2023');

    const saveExpenseYearHandler = (selectedYear) => {
        setEnteredYear(selectedYear);
        console.log('In Expenses.js')
        console.log(selectedYear);
    };

    return (
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onSaveExpenseYear={saveExpenseYearHandler}
        />
        {props.item.map((expense) => (
          <ExpenseItem
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