import React from 'react'
import './herosection.scss'
import { Link } from 'react-router-dom'


function HeroSection() {
  return (
    <div className='hero_section'>
        <h1><span style={{color:'blue'}}>Welcome </span><span style={{color:"red"}}>to ArtSync!</span></h1>
        <p>Discover the perfect harmony with ArtSync: your go-to gallery app for seamlessly synchronizing and showcasing your treasured digital art collection.</p>
        <button><Link id='getstarted' to={'/signup'}>Get Started</Link></button>
    </div>
  )
}

export default HeroSection