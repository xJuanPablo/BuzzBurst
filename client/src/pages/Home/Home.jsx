import React from 'react';
import Hero from '../../components/Hero';
import Overview from '../../components/Overview';
import Reviews from '../../components/Reviews';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

function Home() {
  return (
    <div>
    <NavBar />
    <Hero />
    <Overview/>
    <Reviews/>
    <Footer/>
    </div>
  )
}

export default Home