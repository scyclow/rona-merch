import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Marquee } from './Main'

import './Patriot.css'


export default function Patriot() {
  return (
    <>
      <Background />
      <div className="header">
        <LogoLink />
        <Marquee className="patriotMarquee" duration={7.2}>
          <h1 style={{ backgroundColor: 'white'}} className="rmName">PATRIOT GEAR</h1>
        </Marquee>
      </div>
    </>
  )
}


function LogoLink() {
  return (
    <Link to="/">
      <Logo size={200}/>
    </Link>
  )
}

function Background() {
  return (
    <div className="background">
      <div className="container">
        <div className="rotate">
          <div className="flagStripe blue"></div>
          <div className="flagStripe red"></div>
          <div className="flagStripe white"></div>
          <div className="flagStripe blue"></div>
          <div className="flagStripe red"></div>
          <div className="flagStripe white"></div>
          <div className="flagStripe blue"></div>
          <div className="flagStripe red"></div>
          <div className="flagStripe white"></div>
          <div className="flagStripe blue"></div>
          <div className="flagStripe red"></div>
          <div className="flagStripe white"></div>
        </div>
      </div>
    </div>
  )
}


