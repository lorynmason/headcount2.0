import React from 'react'
import './comparedCard.css'

const ComparisonCard = ({appState, resetComparison}) => {
  const comparedAvg = Object.keys(appState.compareCard)
  const firstAvg = comparedAvg[0]+ ': ' + appState.compareCard[comparedAvg[0]]
  const secondAvg = comparedAvg[1]+ ': ' + appState.compareCard[comparedAvg[1]]
  const arrowLeft = '<---- '
  const arrowRight = ' ---->'
  
  return (
  <div className="cards comparedCard clickedcard">
    <button className="tooltip" onClick={()=>resetComparison()}><span className="tooltiptext">click to reset comparison</span>X</button>
    <h3>
      {firstAvg} 
    </h3>
    <h3>
       {arrowLeft} {appState.compareCard.compared} {arrowRight}
    </h3>
    <h3>
      {secondAvg}
    </h3>
  </div>
)
}
  
export default ComparisonCard