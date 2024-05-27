import React from 'react'
import './Skill.css'

const Skill = (props) => {
  return (
    <div id='skill'>
        <h1 className="skill-name">{props.skill}</h1>
        <div className="jug">
            <span style={{width:`${props.width}%`}}>
                {`${props.width}%`}
            </span>
        </div>
    </div>
  )
}

export default Skill