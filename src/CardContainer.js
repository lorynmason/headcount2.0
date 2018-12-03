import React from 'react';
import Card from './Card.js';
import './cardContainer.css';

const CardContainer = ({appState, displaySelected}) => {
  const Cards = Object.keys(appState.data).map(stat => {
    let className = 'cards'
    if (appState.compared1 && appState.data[stat].location === appState.compared1.location) {
        className = 'cards clickedcard';   
    } 
    if (appState.compared2 && appState.data[stat].location === appState.compared2.location) {
            className = 'cards clickedcard';
    }
    return <Card key={appState.data[stat].location} 
                 cardInfo={appState.data[stat]}
                 displaySelected={displaySelected}
                 className={className}/>})
  
  return(
    <div className="cardContainer">
      { Cards }
    </div>
  )
}

export default CardContainer