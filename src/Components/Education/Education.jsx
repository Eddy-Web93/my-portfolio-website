import React from 'react'
import './Education.css'
import School from '../School/School'
import book from "../../assets/menu_book_24dp_FILL0_wght400_GRAD0_opsz24.png"

const Education = () => {
  return (
    <div id='education'>
      <h1 className="where-title">Resume</h1>
        <div className="edu-title">
            <img src={book} alt="" className="logo" />
            <h1 className='edu'>Education</h1>
        </div>
        <div className="edu-container">
            <School schoolName = "Dedan Kimathi University Of Technology" years= "2023 - Present" course="Bachelors Of Science In  Actuarial Science"/>
            <School schoolName = "Maai Mahiu Boy's High School" years= "2019 - 2022" course="Kenya Certificate Of Secondary Education"/>
            <School schoolName = "Rubiri Primary School" years= "2010 - 2018" course="Kenya Certificate Of Primary Education"/>
        </div>
    </div>
  )
}

export default Education