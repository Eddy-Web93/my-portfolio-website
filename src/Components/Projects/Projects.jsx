import React, { useState } from 'react';
import './Projects.css';
import Project from '../Project/Project';
import weather from '../../assets/Weather.png'
import Havera from '../../assets/Havera2.0.png'

const Projects = () => {
  const [it, setIt] = useState(0);

  return (
    <div id='projects'>
      <h1 className='where-title'>Projects</h1>
      <ul className='navigation'>
        <li className={`${it === 0 ? 'this' : ''}`} onClick={() => setIt(0)}>Websites</li>
        <li className={`${it === 1 ? 'this' : ''}`} onClick={() => setIt(1)}>Application</li>
      </ul>
      <div className='pro-containers'>
        {it === 0 ? (
          <>
            <Project image={weather} name="Weather Site" link="https://weather-site-chi.vercel.app/" type="Real Time Weather Website"/>
            <Project image={Havera} name="Havera" link="https://havera.vercel.app/" type="Landing Page Website"/>
          </>
        ) : (
          <div className='exclamier'>
            <h1 className='ex-title'>There is no project done Yet</h1>
            <p className='ex-text'>At the end of this month I will post a project here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
