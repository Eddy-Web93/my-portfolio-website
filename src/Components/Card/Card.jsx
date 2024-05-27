import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div id='card'>
        <div className="icon-section">
            <img src={props.img} alt="" className='card-icon' />
        </div>
        <div className="card-details">
            <h1 className="card-title">{props.title}</h1>
            <a href={props.direct} className="card-entails">{props.entails}</a>
        </div>
    </div>
  )
}

export default Card