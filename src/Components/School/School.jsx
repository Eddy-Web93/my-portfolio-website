import React from 'react'
import './School.css'

const School = (props) => {
  return (
    <div id='school'>
        <div className="line"><span></span></div>
        <div className="school-details">
          <h1 className="school-name">{props.schoolName}</h1>
          <p className="school-year">{props.years}</p>
          <p className="course">{props.course}</p>
        </div>
    </div>
  )
}

export default School