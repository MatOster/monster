import React from 'react';
import './card.styles.css'
export const Card =(props)=>(

    <div className = 'card-container'>
        
        <img alt ='monster' src ={`https://robohash.org/${props.indent}?set=set2&size=180x180`}/>
        <p> {props.monster.name}</p>
        </div>
)