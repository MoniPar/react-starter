import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,  // this is expected to be the object generated in the submit handler in ExpenseForm
            id: Math.random().toString() 
        };
        // console.log(expenseData);

        // Passes on gathered data up to parent component App where function is defined
        props.onAddExpense(expenseData);
    };
    
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;