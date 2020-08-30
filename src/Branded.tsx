import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import Logo from './Logo'
import { MarqueeReverse } from './Main'

import './Branded.css'


export default function Branded() {
  return (
    <div className="brandedBackground">
      <div className="header">
        <LogoLink />
        <MarqueeReverse className="brandedMarquee flashing" duration={2.5}>
          <h1 className="rmName brandedTitle">BRANDED MERCH</h1>
        </MarqueeReverse>
      </div>
    </div>
  )
}


function LogoLink() {
      // <img src={logo}  alt="rm-logo" style={{height: 200}}/>
  return (
    <Link to="/" >
      <span className="flashingSvgInverse" style={{position: 'relative', left: 3, top: 3 }}><Logo size={200} fill="" stroke=""/></span>
      <span className="flashingSvg" style={{position: 'absolute', left: 0, top: 0 }}><Logo size={200} fill="none" stroke=""/></span>
    </Link>
  )
}


