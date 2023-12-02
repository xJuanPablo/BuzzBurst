import React from 'react';
import NavBar from '../../components/NavBar';
import Hero from '../../components/Hero';
import Overview from '../../components/Overview';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div>
    <NavBar/>
    <Hero />
    <Overview/>
    <Footer/>
    </div>
  )
}

export default Home