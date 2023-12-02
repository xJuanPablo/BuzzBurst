import React from 'react';
import Hero from '../../components/Hero';
import Overview from '../../components/Overview';
import Comments from '../../components/Comments';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div>
    <Hero />
    <Overview/>
    <Comments/>
    <Footer/>
    </div>
  )
}

export default Home