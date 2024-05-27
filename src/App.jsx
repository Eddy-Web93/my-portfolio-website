import React, { useState } from 'react';
import Personals from './Components/Personals/Personals';
import About from './Components/About/About';
import "./App.css";
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Where from './Components/Where/Where';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
import Projects from "./Components/Projects/Projects"

const App = () => {
  const [where, setWhere] = useState("about");

  const settings = (route) => {
    setWhere(route);
  };

  return (
    <div className='app'>
      <Personals />
      <div className="container">
        <Where change={settings} />
        {
          (() => {
            if (where === "about") {
              return (
                <>
                  <About />
                  <Services />
                  <Testimonials />
                </>
              );
            } else if (where === "resume") {
              return ( 
              <>
                <Education />
                <Skills/>
              </>);
            } else if (where === "contact") {
              return <Contact />;
            } else {
              return <Projects/>;
            }
          })()
        }
      </div>
    </div>
  );
};

export default App;