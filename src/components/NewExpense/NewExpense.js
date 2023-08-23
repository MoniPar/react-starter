import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [toggleForm, setToggleForm] = useState(0);

    const showFormHandler = () => {
        setToggleForm(1);
    }

    const hideFormHandler = () => {
        setToggleForm(0);
    }
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,  // this is expected to be the object generated in the submit handler in ExpenseForm
            id: Math.random().toString() 
        };
        // Passes on gathered data up to parent component App where function is defined
        props.onAddExpense(expenseData);

        // Hides form upon submission
        setToggleForm(0);
    };
    
    return (
        <div className='new-expense'>
            {toggleForm === 0 ? 
                <button onClick={showFormHandler}>Add New Expense</button> 
                :
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler}/>
            }
        </div>
    )
}

export default NewExpense;