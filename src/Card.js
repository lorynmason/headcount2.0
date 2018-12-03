import React from 'react'
import './cards.css'

const Card = (props) => {
  const stats = Object.keys(props.cardInfo.stats).map(stat => {
    let classString = 'green';
    if(props.cardInfo.stats[stat] < 0.5) {
      classString = 'red'
    }
  
    return <li key={stat} 
               className={classString}>
      {stat}: {props.cardInfo.stats[stat]}
    </li>
  })

  return (
  <div className={props.className || 'cards clickedcard'} onClick={() => props.displaySelected(props.cardInfo)}>
    <h1>
     { props.cardInfo.location } 
    </h1>
    <p>
      { stats }
    </p>
  </div>
)
}
  
export default Card