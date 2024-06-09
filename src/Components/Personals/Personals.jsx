import React, { useState } from 'react'
import "./Personals.css";
import Card from '../Card/Card';
import icon from "../../assets/Another-one.jpg";
import mail from "../../assets/mail_40dp_FILL0_wght400_GRAD0_opsz40.png";
import phone from "../../assets/call_40dp_FILL0_wght400_GRAD0_opsz40.png";
import calendar from "../../assets/calendar_month_40dp_FILL0_wght400_GRAD0_opsz40.png";
import location from "../../assets/location_on_40dp_FILL0_wght400_GRAD0_opsz40.png";
import menu from "../../assets/more_vert_24dp_FILL0_wght400_GRAD0_opsz24 (1).png"


const Personals = () => {
    const[activate , setActivate] = useState(false)
    const displayContainer = () => {
        setActivate(!activate)
    }
    const anywhere = () => {
        if(activate){
            setActivate(false)
        }
    }
  return (
    <div id='personals' onClick={anywhere}>
        <div className="head">
            <div className="image-container">
                <img src={icon} alt="" className='personal-image'/>
            </div>
            <div className="personal-details">
                <h1 className="name">Muchiri Mwangi</h1>
                <button className="btn personal-btn">Web Developer</button>
            </div>
        </div>
        <div className={`personal-container ${activate ? "activate" : ""}`}>
            <Card direct="mailto:muchiri.mwangi.100@gmail.com" img={mail} title="Email" entails="muchiri.mwangi.100@gmail.com"/>
            <Card direct="tel:+2547114672193" img={phone} title="Phone" entails="+254114672193"/>
            <Card direct="" img={calendar} title="Birthday" entails="December 25, 2004"/>
            <Card direct="" img={location} title="location" entails="Kenya, Nairobi, Nyeri"/>
        </div>
        <div className="menu" onClick={displayContainer}>
            <img src={menu} alt="" className='menu-icon' />
        </div>
    </div>
  )
}

export default Personals