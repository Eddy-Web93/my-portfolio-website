import React from 'react'
import "./Skills.css"
import Skill from '../Skill/Skill'

const Skills = () => {
  return (
    <div id='skills'>
        <div className="skills-title">
            <h1 className="sk-title">My Skills</h1>
        </div>
        <div className="sk-container">
            <Skill width={95} skill='HTML'/>
            <Skill width={98} skill='CSS'/>
            <Skill width={80} skill='Tailwind CSS'/>
            <Skill width={90} skill= "Git and Github"/>
            <Skill width={93} skill='JavaScript'/>
            <Skill width={90} skill='React.js'/>
            <Skill width={65} skill='Node.js'/>
            <Skill width={75} skill='R (statistical programming language)'/>
            <Skill width={70} skill='Python (statistical programming language)'/>
        </div>
    </div>
  )
}

export default Skills