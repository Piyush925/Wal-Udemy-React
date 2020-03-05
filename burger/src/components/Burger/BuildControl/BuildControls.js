import React from 'react'
import './BuildControls.css'
import './button.css'
import BuildControl from './BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];
const buildControls = (props) => (
    <div class="BuildControls" >
        <p>Current price:{props.price}</p>
        {controls.map(ctrl=>(
            <BuildControl
             key={ctrl.label} 
             label={ctrl.label}
             added={()=>props.ingredientAdded(ctrl.type)}
             removed={()=>props.ingredientRemoved(ctrl.type)}
             />
       ))}
       <button class='OrderButton' disabled={props.purchasable} >Order Now</button>
    </div>
);

export default buildControls;