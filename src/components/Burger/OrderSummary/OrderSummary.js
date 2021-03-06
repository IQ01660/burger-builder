import React from 'react';
import Button from './../../UI/Button/Button';

const orderSummary = (props) => {
	const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{textTransform: 'capitalize'}}>{igKey} </span>
                {props.ingredients[igKey]}
			</li>
		);
	});

	return (
		<React.Fragment>
			<h3>Your Order</h3>
			<p>Your Ingredients</p>
			<ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancelHandler}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinueHandler}>CONTINUE</Button>
		</React.Fragment>
	);
};

export default orderSummary;
