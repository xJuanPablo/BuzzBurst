import React from 'react';
import HeroImg from '../assets/HeroImg.png'

function Hero() {
  return (
    <>
    <div className='hero-container'>
      <div className='tag-container'>
        <h3>
        Unleash the power of connection with BuzzBurst
        </h3>
        <p>
        Enjoy instant, personalized conversations with a user-friendly interface. Stay connected effortlessly with friends and family for a dynamic and enjoyable texting experience.
        </p>
      </div>
      <img src={HeroImg} alt="Hero" className='hero-img' />
    </div>
    </>
  )
}

export default Hero