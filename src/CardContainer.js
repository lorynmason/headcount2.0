import React from 'react';
import Card from './Card.js'

const CardContainer = (props) => {
  const Cards = Object.keys(props.data).map(stat => <Card cardInfo={props.data[stat]}/>)
  
  return(
    <div className="cardContainer">
      { Cards }
    </div>
  )
}

export default CardContainer