import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';
export const CardList = (props) => (
<div className = 'card-list'>
             {props.monster.map(mo =><Card key ={mo.id} monster ={mo} indent ={mo.id}/>)}  

    </div>

)