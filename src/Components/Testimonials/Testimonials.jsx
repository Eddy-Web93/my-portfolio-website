import React from 'react';
import "./Testimonials.css"
import user from "../../assets/user.png"
import TestCards from '../TestCards/TestCards';

const Testimonials = () => {
  return (
    <div id='test'>
        <div className="test-title">
            <h1>Testimonials</h1>
        </div>
        <div className="test-containers has-scrollbar">
            <TestCards image={user} name="Prospective Client" text="Let's connect and you will be the first"/>
        </div>
    </div>
  )
}

export default Testimonials