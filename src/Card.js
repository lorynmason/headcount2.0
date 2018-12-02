import React from 'react'

const Card = (props) => {
  let classBorder = 'cards'
  const stats = Object.keys(props.cardInfo.stats).map(stat => {
    let classString = 'green';
    if(props.cardInfo.stats[stat] < 0.5) {
      classString = 'red'
    }
    if(props.cardInfo.selected === true) {
      classBorder = 'cards clickedcard'
    }
    if(props.cardInfo.selected === false) {
      classBorder = 'cards'
    }
  
    return <li key={stat} 
               className={classString}>
      {stat}: {props.cardInfo.stats[stat]}
    </li>
  })

  return (
  <div className={classBorder} onClick={() => props.displaySelected(props.cardInfo)}>
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