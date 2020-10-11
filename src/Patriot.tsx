import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Marquee, MarqueeChild, ItemFeature, ChildProps, VerticalMarquee } from './Main'
import {shuffle} from 'lodash'
import data from './data'



import './Patriot.css'


export default function Patriot() {
  const items = shuffle(data.patriot)

  const firstSection = items.slice(0, Math.floor(items.length / 3))
  const secondSection = items.slice(Math.floor(items.length / 3), Math.floor(items.length * 2 / 3))
  const thirdSection = items.slice(Math.floor(items.length * 2 / 3), items.length)
  return (
    <>
      <Background />
      <div className="header">
        <LogoLink />
        <Marquee className="patriotMarquee headerTitlePadding" duration={7.2}>
          <h1 style={{ backgroundColor: 'white'}} className="rmName">PATRIOT GEAR</h1>
        </Marquee>
      </div>
      <Content>
        <VerticalMarquee style={{ height: 900 }} direction={-1} duration={30000} className="borderWhite">
          {firstSection.map(item => (
            <ItemFeature key={item.id} item={item}/>
          ))}
        </VerticalMarquee>

        <VerticalMarquee style={{ height: 900 }} direction={1} duration={30000} className="borderRed">
          {secondSection.map(item => (
            <ItemFeature key={item.id} item={item}/>
          ))}
        </VerticalMarquee>

        <VerticalMarquee style={{ height: 900 }} direction={-1} duration={30000} className="borderBlue">
          {thirdSection.map(item => (
            <ItemFeature key={item.id} item={item}/>
          ))}
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
    <div className="patriotBackground">
      <div className="patriotContainer">
        <div className="rotate45">
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
    <div style={{display: 'flex', justifyContent: 'center', }}>
      <div className="patriotContent">{children}</div>
    </div>
  )
}



