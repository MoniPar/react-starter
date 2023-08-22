import './Card.css'

const Card = (props) => {
    // Anything received as a className from outside is added to this string
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;