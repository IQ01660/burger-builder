//standard imports
import React from 'react';

//hoc imports
import Aux from './../../hoc/Aux';

//component imports
import Modal from './../../components/UI/Modal/Modal';
import Burger from './../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildContols/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.3,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

/**
 * Contains the Burger Builder page
 */
class BurgerBuilder extends React.Component
{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchaseable: false
    };

    updatePurchaseState () {
        this.setState((prevState, props) => {
            let totalIngredients = 0;
            for(const key in prevState.ingredients) {
                totalIngredients += prevState.ingredients[key];
            }
            return totalIngredients ? {purchaseable: true} : {purchaseable: false};
        });
    }

    addIngredientHandler = (type) => {
        this.setState((prevState, props) => {
            const updatedState = {...prevState};
            updatedState.ingredients[type]++;
            updatedState.totalPrice += INGREDIENT_PRICES[type];

            return updatedState;
        });
        this.updatePurchaseState();
    };

    removeIngredientHandler = (type) => {
        this.setState((prevState, props) => {
            const updatedState = {...prevState};

            if(updatedState.ingredients[type])
            {
                updatedState.ingredients[type]--;
                updatedState.totalPrice -= INGREDIENT_PRICES[type];
            }
            
            return updatedState;
        });
        this.updatePurchaseState();
    };

    render() 
    {
        return (
            <Aux>
                <Modal />
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls purchaseable={this.state.purchaseable} price={this.state.totalPrice} ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} ingredients={this.state.ingredients}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;