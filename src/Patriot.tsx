import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Marquee, MarqueeChild, ItemFeature, ChildProps, VerticalMarquee } from './Main'
import {shuffle} from 'lodash'
import data from './data'



import './Patriot.css'


export default function Patriot() {
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
        <VerticalMarquee direction={-1} duration={48000} className="borderWhite">
          {shuffle(data.patriot.map(item => (
            <ItemFeature key={item.id} item={item}/>
          )))}
        </VerticalMarquee>

        <VerticalMarquee direction={1} duration={48000} className="borderRed">
          {shuffle(data.patriot.map(item => (
            <ItemFeature key={item.id} item={item}/>
          )))}
        </VerticalMarquee>

        <VerticalMarquee direction={-1} duration={48000} className="borderBlue">
          {shuffle(data.patriot.map(item => (
            <ItemFeature key={item.id} item={item}/>
          )))}
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
    <div style={{display: 'flex', justifyContent: 'center', }}>
      <div className="patriotContent">{children}</div>
    </div>
  )
}



