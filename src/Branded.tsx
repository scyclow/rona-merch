import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import Logo from './Logo'
import { MarqueeReverse, ChildProps, ItemFeature } from './Main'
import data from './data'

import './Branded.css'

import img1 from './assets/FC-T-model1.jpeg'
import img2 from './assets/FC-thumbnail1.jpeg'
import img3 from './assets/FCMP-mask-model.jpeg'
import img4 from './assets/anti-face1.jpeg'
import img5 from './assets/hoax.jpeg'


export default function Branded() {
  return (
    <div className="brandedBackground">
      <div className="header">
        <LogoLink />
        <MarqueeReverse className="brandedMarquee flashing headerTitlePadding" duration={3.5}>
          <h1 className="rmName brandedTitle">BRANDED MERCH</h1>
        </MarqueeReverse>
      </div>
      <Content>
        {data.branded.map(item => (
          <ItemFeature key={item.id} item={item} />
        ))}
      </Content>
    </div>
  )
}


function LogoLink() {
      // <img src={logo}  alt="rm-logo" style={{height: 200}}/>
  return (
    <Link to="/" >
      <span className="flashingSvg" style={{position: 'absolute', zIndex: 1 }}><Logo size={200} fill="none" stroke=""/></span>
      <span className="flashingSvgInverse" style={{position: 'relative', left: 3, top: 3 }}><Logo size={200} fill="" stroke=""/></span>
    </Link>
  )
}


function Content({children}: {children: Array<React.ReactNode>}) {

  const images = children.map((child, i) => {
    const animationDelay = (Math.random() * -3) + 's'
    return (
      <div className={`flashing brandedBorder`} style={{ animationDuration: '9s', animationDelay }}>
        <div className={`brandedItemFeature`} style={{ animationDelay }}>
          {child}
        </div>
      </div>
    )
  })
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div className="brandedContent">
        {images}
      </div>
    </div>
  )
}

