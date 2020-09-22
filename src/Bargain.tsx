import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Marquee, ItemFeature, TiltedMarquee } from './Main'
import img3 from './assets/FCMP-mask-model.jpeg'

import './Bargain.css'


export default function Bargain() {
  return (
    <>
      <div className="header" style={{overflow: 'visible'}}>
        <LogoLink />
        <div className="spin">
          <h1 className="rmName">BARGAIN BIN</h1>
        </div>
      </div>


      <TiltedMarquee rotate={30}>
        <h3 className="rmName">CATCH THE DEALS WHILE YOU CAN!!</h3>
      </TiltedMarquee>

      <TiltedMarquee rotate={35} style={{marginLeft: 5}}>
        <h3 className="rmName">CATCH THE DEALS WHILE YOU CAN!!</h3>
      </TiltedMarquee>

      <TiltedMarquee rotate={25} style={{marginLeft: 10}}>
        <h3 className="rmName">CATCH THE DEALS WHILE YOU CAN!!</h3>
      </TiltedMarquee>

      <TiltedMarquee rotate={-23} style={{marginLeft: -20}}>
        <h3 className="rmName">CATCH THE DEALS WHILE YOU CAN!!</h3>
      </TiltedMarquee>

      <Content>
        <img src={img3} alt="blah"/>
        <img src={img3} alt="blah"/>
        <img src={img3} alt="blah"/>
        <img src={img3} alt="blah"/>
        <img src={img3} alt="blah"/>
        <img src={img3} alt="blah"/>
        <img src={img3} alt="blah"/>
        <img src={img3} alt="blah"/>
        <img src={img3} alt="blah"/>
      </Content>
    </>
  )
}


function LogoLink() {
  return (
    <Link to="/" className="growShrink">
      <Logo size={200}/>
    </Link>
  )
}

function Content({children}: {children: Array<React.ReactNode>}) {
  const duration = 10

  const images = children.map((child, i) => {
    const animationDelay = (Math.random() * -1 * duration) + 's'
    const animationDuration = (Math.random() * duration * 0.2) + (duration * 0.8) + 's'
    return (
      <div className="bargainGrowShrink" style={{ animationDuration, animationDelay }}>
        <ItemFeature>
          {child}
        </ItemFeature>
      </div>
    )
  })

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div className="bargainContent">
        {images}
      </div>
    </div>
  )
}
