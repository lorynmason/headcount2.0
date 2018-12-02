import React from 'react';
import Card from './Card.js';
import './styles/main.scss';
import ComparisonCard from './ComparisonCard.js'


const ComparedContainer = ({appState, resetComparison, displaySelected}) => {
  let card1;
  let card2;
  let card3;
  if(appState.compared1 !== null) {
    card1 = <Card key={appState.compared1.location}
                  cardInfo={appState.compared1} 
                  displaySelected={displaySelected}/> 
  } 
  if(appState.compared2 !== null) {
    card2 = <Card key={appState.compared2.location} 
                  cardInfo={appState.compared2} 
                  displaySelected={displaySelected}/> 
  } 
  if(appState.compared1 !== null && appState.compared2 !== null) {
    card3 = <ComparisonCard appState={appState} resetComparison={resetComparison}/> 
  }
  
  return( 
    <div className="comparedCardContainer">
    <div>{card1}</div>
    <div>{card3}</div>
    <div>{card2}</div>
    </div>
  )
}

export default ComparedContainer