import React from 'react'
import './Project.css'
import eye from '../../assets/visibility_24dp_FILL0_wght400_GRAD0_opsz24.png'

const Project = (props) => {
  return (
    <div id='project'>
      <div className="pro-image">
        <img src={props.image} alt="" className="img-pro" />
        <div className="eye">
          <a className='link' href={props.link}><img src={eye} alt="" className='eye-icon' /></a>
        </div>
      </div>
      <div className="pro-details">
        <h2 className="pro-name">{props.name}</h2>
        <div className="pro-type">{props.type}</div>
      </div>
    </div>
  )
}

export default Project