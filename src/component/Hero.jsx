import React from 'react';
import cook from '../images/cook.png'; // Example image import

const Hero = () => {
  return (
    <div className='hero-wrapper'>
        <div>
            <h1>Welcome!!! To the most amazing place where you will see all food items list and recipe</h1>
        </div>

        <div>
            <img src={cook} alt="Food Description" /> 
        </div>
    </div>
  );
};

export default Hero;
