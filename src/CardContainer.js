import React from 'react';
import Card from './Card.js';
import './styles/main.scss';

const CardContainer = (props) => {
  const Cards = Object.keys(props.data).map(stat => <Card key={props.data[stat].location} 
        cardInfo={props.data[stat]}
        displaySelected={props.displaySelected}/>)
  
  return(
    <div className="cardContainer">
      { Cards }
    </div>
  )
}

export default CardContainer