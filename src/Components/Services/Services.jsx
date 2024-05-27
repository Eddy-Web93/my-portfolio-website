import React from 'react'
import "./Services.css";
import design from "../../assets/design_services_40dp_FILL0_wght400_GRAD0_opsz40.png";
import dev from "../../assets/terminal_40dp_FILL0_wght400_GRAD0_opsz40.png";
import mobile from "../../assets/phone_android_40dp_FILL0_wght400_GRAD0_opsz40.png"
import stats from "../../assets/monitoring_40dp_FILL0_wght400_GRAD0_opsz40.png"
import Init from '../Init/Init';


const Services = () => {
  return (
    <div id='services'>
        <div className="services-title">
            <h1>What I Can Do</h1>
        </div>
        <div className="services-container">
            <Init img={design} title="Web Design" 
            description="I specialize in designing websites with creativity and technical expertise."/>
            <Init img={dev} title="Web Development" 
            description="I am adept at crafting websites with innovation and technical prowess."/>
            <Init img={mobile} title="Mobile Development" 
            description="I excel in mobile dev with ingenuity, delivering innovative solutions exceeding expectations."/>
            <Init img={stats} title="Data Analysis" 
            description="I offer data analysis to uncover insights and drive informed decisions."/>
        </div>
    </div>
  )
}

export default Services