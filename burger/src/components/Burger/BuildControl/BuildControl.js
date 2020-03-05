import React from 'react';
import  './BuildControl.css';

const BuildControl=(props)=>(
    <div class="BuildControl" > 
        <div class="Label">{props.label}</div>
        <button class="Less"onClick={props.removed}  >-1</button>
        <button class="More" onClick={props.added}>+1</button>
    </div>
);
export default BuildControl;