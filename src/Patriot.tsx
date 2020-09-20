import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Marquee, MarqueeChild, ItemFeature, ChildProps, VerticalMarquee } from './Main'
import img1 from './assets/FC-T-model1.jpeg'
import img4 from './assets/anti-face1.jpeg'
import img5 from './assets/hoax.jpeg'


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
      <Content>
        <VerticalMarquee direction={-1} className="borderRed">
          <img src={img1} alt="blah"/>
          <img src={img4} alt="blah"/>
          <img src={img5} alt="blah"/>
        </VerticalMarquee>

        <VerticalMarquee direction={1} className="borderWhite">
          <img src={img1} alt="blah"/>
          <img src={img4} alt="blah"/>
          <img src={img5} alt="blah"/>
        </VerticalMarquee>

        <VerticalMarquee direction={-1} className="borderBlue">
          <img src={img1} alt="blah"/>
          <img src={img4} alt="blah"/>
          <img src={img5} alt="blah"/>
        </VerticalMarquee>

        <VerticalMarquee direction={1} className="borderRed">
          <img src={img1} alt="blah"/>
          <img src={img4} alt="blah"/>
          <img src={img5} alt="blah"/>
        </VerticalMarquee>
      </Content>

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

function Content({children}: ChildProps) {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="patriotContent">{children}</div>
    </div>
  )
}



