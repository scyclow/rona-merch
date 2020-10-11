import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Marquee, ItemFeature, TiltedMarquee } from './Main'
import data from './data'

import './Bargain.css'


export default function Bargain() {
  return (
    <>
      <div className="header" style={{overflow: 'visible'}}>
        <LogoLink />
        <div className="spin headerTitlePadding">
          <h1 className="rmName bargainTitle">BARGAIN BIN</h1>
        </div>
      </div>
      <Background />

      <Content>
        {data.bargain.map(item => (
          <ItemFeature key={item.id} item={item} />
        ))}
      </Content>
    </>
  )
}

function Background() {
  return (
    <div className="bargainBackground">
      <TiltedMarquee className="rotatingTilt">
        <h3 className="rmName">CATCH THE DEALS WHILE YOU CAN!!</h3>
      </TiltedMarquee>

      <TiltedMarquee className="rotatingTilt" style={{animationDelay: '-2s', marginTop: 20, marginLeft: 5}}>
        <h3 className="rmName">CATCH THE DEALS WHILE YOU CAN!!</h3>
      </TiltedMarquee>

      <TiltedMarquee className="rotatingTilt" style={{animationDelay: '-5s', marginTop: 25, marginLeft: 10}}>
        <h3 className="rmName">CATCH THE DEALS WHILE YOU CAN!!</h3>
      </TiltedMarquee>

      <TiltedMarquee className="rotatingTilt" style={{animationDelay: '-12.5s', marginTop: 30, marginLeft: -20}}>
        <h3 className="rmName">CATCH THE DEALS WHILE YOU CAN!!</h3>
      </TiltedMarquee>

      <TiltedMarquee className="rotatingTilt" style={{animationDelay: '-7.5s', marginTop: 35, marginLeft: -20}}>
        <h3 className="rmName">CATCH THE DEALS WHILE YOU CAN!!</h3>
      </TiltedMarquee>

      <TiltedMarquee className="rotatingTilt" style={{animationDelay: '-14.5s', marginTop: 50, marginLeft: -20}}>
        <h3 className="rmName">CATCH THE DEALS WHILE YOU CAN!!</h3>
      </TiltedMarquee>

      <TiltedMarquee className="rotatingTilt" style={{animationDelay: '-1.5s', marginTop: 60, marginLeft: -20}}>
        <h3 className="rmName">CATCH THE DEALS WHILE YOU CAN!!</h3>
      </TiltedMarquee>
    </div>
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
        {child}
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
