import React from 'react'

const Card = (props) => {
  const stats = Object.keys(props.cardInfo.stats).map(stat => {
    return <li>
      {stat}: {props.cardInfo.stats[stat]}
    </li>
  })

  return (
  <div>
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