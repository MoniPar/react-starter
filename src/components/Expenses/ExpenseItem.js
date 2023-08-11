import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  
  console.log('Expense Item is being re-evaluated!')

  const [name, setName] = useState(props.name);

  const clickHandler = () => {
    setName('Updated!');
    console.log(name);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{name}</h2>
        <div className='expense-item__price'>€{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem; 