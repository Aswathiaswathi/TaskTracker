import React from 'react'
import './Home.css'
import backgroundvideo from '../../assets/videos/backgroundvideo.mp4'
import About from '../About/About'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
    <div id='home'>
     <div className="video-container">
        <video autoPlay loop muted playsInline>
            <source src={backgroundvideo} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
            <h1 className="animate-text">Organize Your Day, Simplify Your Life </h1>
            <h4>Plan Today for a Better Tomorrow</h4>
            <a href="#" className="cta-button animate-text" id="get-started-button">Get Started</a>    
        </div>
    </div>
    </div>
    <About/>
    <Footer/>
    </div>
  )
}

export default Home
