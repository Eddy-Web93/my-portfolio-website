import React, { useState } from 'react';
import "./Where.css";

const Where = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index, route) => {
    setActiveIndex(index);
    props.change(route);
  };

  return (
    <ul className="navbar">
      <li 
        className={`list ${activeIndex === 0 ? 'active' : ''}`} 
        onClick={() => handleItemClick(0, "about")}
      >
        About
      </li>
      <li 
        className={`list ${activeIndex === 1 ? 'active' : ''}`} 
        onClick={() => handleItemClick(1, "resume")}
      >
        Resume
      </li>
      <li 
        className={`list ${activeIndex === 2 ? 'active' : ''}`} 
        onClick={() => handleItemClick(2, "project")}
      >
        Projects
      </li>
      <li 
        className={`list ${activeIndex === 3 ? 'active' : ''}`} 
        onClick={() => handleItemClick(3, "contact")}
      >
        Contact
      </li>
    </ul>
  );
};

export default Where;
