import React from 'react'
import logo from './logo.svg'
import './App.css'

import img1 from './assets/FC-T-model1.jpeg'
import img2 from './assets/FC-thumbnail1.jpeg'
import img3 from './assets/FCMP-mask-model.jpeg'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <Logo />
        <Title />
      </header>
      <Content>
        <Section>
          <TiltedMarque>
            <span className="sectionTitle">WOW!!</span>
          </TiltedMarque>
          <img src={img1} alt=""/>
        </Section>
        <Section>
          <RotateZ>
            <span style={{border: '2px solid', color: '#fff', padding: 5, fontSize: 60}}>CLICK HERE</span>
          </RotateZ>
          <img src={img2} alt=""/>
        </Section>
        <Section>
          <TiltedMarque>
            <span className="sectionTitle">WOW!!</span>
          </TiltedMarque>
          <img src={img3} alt=""/>
        </Section>
        <Section>
          <img src={img1} alt=""/>
        </Section>
        <Section>
          <img src={img2} alt=""/>
        </Section>
      </Content>
    </div>
  )
}

function Logo() {
  return <img src={logo} className="logo" alt="rm-logo" />
}

function Title() {
  return (
    <div className="headerTitle">
      <div >
      <div className="marqueeBorders">
          <MarqueeReverse>
            <h1 className="rmName">
              RONA MERCH CO.
            </h1>
          </MarqueeReverse>
        </div>
        <div className="marqueeBorders">
          <Marquee>
            <h2 className="rmName">
              OPEN FOR BUSINESS
            </h2>
          </Marquee>
        </div>
        <div className="marqueeBorders">
          <Marquee>
            <h3 className="rmName">
              OPEN FOR BUSINESS
            </h3>
          </Marquee>
        </div>
      </div>
      <div className="spaceAround">
        <Blink>
          <span className="sale">FLASH SALE</span>
        </Blink>
        <GrowShrink>
          <span className="buyNow">BUY NOW</span>
        </GrowShrink>
      </div>
    </div>
  )
}



type ChildProps = { children: React.ReactNode }

function Content({ children }: ChildProps) {
  return (
    <div className="content">
      {children}
    </div>
  )
}


function Section({ children }: ChildProps) {
  return (
    <div className="section">
      {children}
    </div>
  )
}

function TiltedMarque({ children }: ChildProps) {
  return (
    <div className="tilt">
      <Marquee>
        {children}
      </Marquee>
    </div>
  )
}

function Marquee({ children, speed }: ChildProps & {speed?: number}) {
  return (
      <div className="marquee">
        <div className="marqueeInner">
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
        </div>
      </div>
  )
}

function MarqueeReverse({ children }: ChildProps) {
  return (
      <div className="marquee">
        <div className="marqueeInnerReverse">
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
          <span>{children}</span>
        </div>
      </div>
  )
}

function Blink({ children }: ChildProps) {
  return (
    <div className="blink">
      {children}
    </div>
  )
}

function GrowShrink({ children }: ChildProps) {
  return (
    <div className="growShrink">
      {children}
    </div>
  )
}

function RotateZ({ children }: ChildProps) {
  return (
    <div className="rotateZContainer">
      <div className="rotateZ">
        {children}
      </div>
    </div>
  )
}

