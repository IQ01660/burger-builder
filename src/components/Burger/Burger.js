// standard imports
import React from 'react';

// css modules imports
import classes from './Burger.module.css';

// component imports
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

/**
 * Contains the whole
 * burger we are building
 * @param {*} props 
 */
const burger = (props) => {

    // taking ingredients object and 
    // building a list of BurgerIngredient's
    let transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => { 
            return [... new Array(props.ingredients[igKey])]
                .map((_, id) => (
                        <BurgerIngredient type={igKey} key={igKey + id} />
                ));
        })
        .reduce((prev, curElt) => {
            return prev.concat(curElt);
        }, []);  

    // checking if there are any ingredients
    if (!transformedIngredients.length) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    // rendering ingredients
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;