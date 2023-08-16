import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = (props) => {

    const [enteredYear, setEnteredYear] = useState('2023');

    const saveExpenseYearHandler = (selectedYear) => {
        setEnteredYear(selectedYear);
        // console.log('In Expenses.js')
        // console.log(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={enteredYear} onSaveExpenseYear={saveExpenseYearHandler} />
            <ExpenseItem
                name={props.item[0].title} 
                amount={props.item[0].amount} 
                date={props.item[0].date} />
            <ExpenseItem
                name={props.item[1].title} 
                amount={props.item[1].amount} 
                date={props.item[1].date} />
            <ExpenseItem
                name={props.item[2].title} 
                amount={props.item[2].amount} 
                date={props.item[2].date} />
            <ExpenseItem
                name={props.item[3].title} 
                amount={props.item[3].amount} 
                date={props.item[3].date} />
        </Card>
    )
};

export default Expenses;