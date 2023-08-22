import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Use one state instead of 3 by passing useState an object and grouping together the 3 states
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // Update state by copying in the old value, should not be used if the new state depends on previous state
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // Guarantees that the latest state snapshot is being used
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value}
        // })
    };
    
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value}
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // Combine all entered data into the expenseData object
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        // console.log(expenseData);
        
        // Passes on gathered data up to parent component NewExpense where function is defined
        props.onSaveExpenseData(expenseData);
        
        // Clear the input after form submission
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                        // creates a 2-way binding which feeds the state back into the input
                        value={enteredTitle} 
                        onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                        value={enteredAmount} 
                        min='0.01' step='0.01' 
                        onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' 
                        value={enteredDate}
                        min='2021-01-01' max='2024-12-21' 
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;