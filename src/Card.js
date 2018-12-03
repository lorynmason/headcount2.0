import React from 'react'
import './cards.css'
import PropTypes from 'prop-types'

const Card = ({cardInfo, className, displaySelected }) => {
  const stats = Object.keys(cardInfo.stats).map(stat => {
    let classString = 'green';
    if(cardInfo.stats[stat] < 0.5) {
      classString = 'red'
    }
  
    return <li key={stat} 
               className={classString}>
      {stat}: {cardInfo.stats[stat]}
    </li>
  })

  return (
  <div className={className || 'cards clickedcard'} onClick={() => displaySelected(cardInfo)}>
    <h1>
     { cardInfo.location } 
    </h1>
    <p>
      { stats }
    </p>
  </div>
)
}

Card.propTypes = {
  cardInfo: PropTypes.object,
  displaySelected: PropTypes.func,
  className: PropTypes.string
}
  
export default Card