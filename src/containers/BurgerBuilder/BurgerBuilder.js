//standard imports
import React from 'react';

//hoc imports
import Aux from './../../hoc/Aux';

//component imports
import Burger from './../../components/Burger/Burger';

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
    };

    render() 
    {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;