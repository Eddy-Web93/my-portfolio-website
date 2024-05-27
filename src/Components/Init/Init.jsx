import React from 'react'
import "./Init.css"

const Init = (props) => {
  return (
    <div id='init'>
        <div className="icon-init">
            <img src={props.img} alt="" className='init-icon' />
        </div>
        <div className="init-details">
            <h1 className="init-title">{props.title}</h1>
            <p className="init-description">{props.description}</p>
        </div>
    </div>
  )
}

export default Init