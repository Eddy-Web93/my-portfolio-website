import React from 'react'
import "./TestCards.css"

const TestCards = (props) => {
  return (
    <div id='testcard'>
        <div className="test-icon">
            <img src={props.image} alt="" className='test-image' />
        </div>
        <div className="test-details">
            <h1 className="test-name">{props.name}</h1>
            <p className="test-text">{props.text}</p>
        </div>
    </div>
  )
}

export default TestCards