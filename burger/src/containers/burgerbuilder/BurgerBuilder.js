import React from 'react';
import Aux from '../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControl/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 1.5,
    meat: 1.5,
}

class BurgerBuilder extends React.Component{
    state={
        ingredients:{
            salad :1,
            bacon:2,
            cheese :2,
            meat:2
        },
        totalPrice:4,
        purchasable:false
    }

    updatePurchaseState(ingredients){
         
        const sum=Object.keys(ingredients).
        map(igKey=>{
            return ingredients[igKey]
        })
        .reduce((sum,ele)=>{
            return sum+ele
        },0)
        this.setState({purchasable:sum>0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        console.log(updatedCount)
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients)
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        console.log(updatedCount);
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients)
    }
   
    render(){
        return(
            <Aux>
                
                <div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                />
                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder;