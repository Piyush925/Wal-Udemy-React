import React from 'react';
import  './burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props)=>{
    let transformedIngredients=Object.keys(props.ingredients)
    .map(igKey=>{
        return[...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredient key={igKey + i} type={igKey}/>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(transformedIngredients.length===0)
    {
        transformedIngredients=<div>Please add</div>
    }
    return (
        <div class="Burger">
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'  />
            
        </div>
    )
}

export default burger;