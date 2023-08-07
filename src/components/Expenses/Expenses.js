import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = (props) => {
    return (
        <Card className="expenses">
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