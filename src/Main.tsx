import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

import logoNight from './logo-night.svg'
import './Main.css'

import img1 from './assets/FC-T-model1.jpeg'
import img2 from './assets/FC-thumbnail1.jpeg'
import img3 from './assets/FCMP-mask-model.jpeg'
import img4 from './assets/anti-face1.jpeg'
import img5 from './assets/hoax.jpeg'

export default function Main() {
  return (
    <div className="app">
      <header className="header">
        <Logo size={350}/>
        <Title />
      </header>
      <Content>

        <Link to="/safety">
          <div className="section">
            <SafetyTitle />
            <ImageMarquee>
              <img src={img1} alt="blah"/>
              <img src={img4} alt="blah"/>
              <img src={img4} alt="blah"/>
              <img src={img4} alt="blah"/>
              <img src={img4} alt="blah"/>
              <img src={img4} alt="blah"/>
              <img src={img4} alt="blah"/>
              <img src={img4} alt="blah"/>
              <img src={img4} alt="blah"/>
              <img src={img5} alt="blah"/>
            </ImageMarquee>
          </div>
        </Link>

        <Link to="/branded">
          <div className="section">
            <BrandedTitle />
            <ImageMarquee>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img4} alt="blah"/>
              <img src={img5} alt="blah"/>
            </ImageMarquee>
          </div>
        </Link>


        <Link to="/bargain">
          <div className="section">
            <BargainTitle />
            <ImageMarquee>
              <img src={img1} alt="blah"/>
              <RotateZ>
                <span style={{fontSize: 45}}>GREAT DEALS</span>
              </RotateZ>
              <img src={img3} alt="blah"/>
              <img src={img3} alt="blah"/>
              <img src={img3} alt="blah"/>
              <img src={img3} alt="blah"/>
              <img src={img3} alt="blah"/>
              <img src={img3} alt="blah"/>
              <img src={img3} alt="blah"/>
              <img src={img4} alt="blah"/>
            </ImageMarquee>
          </div>
        </Link>

        <Link to="/patriot">
          <div className="section">
            <PatriotTitle />
            <ImageMarquee>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img1} alt="blah"/>
              <img src={img4} alt="blah"/>
              <img src={img5} alt="blah"/>
            </ImageMarquee>
          </div>
        </Link>
      {/*
        <ImageSection text="BEST SELLER" textType="tiltedMarquee">
          <ImageRotate ms={3000}>
            <img style={{ height: 300, width: 300 }} src={img4} alt=""/>
            <img style={{ height: 300, width: 300 }} src={img5} alt=""/>
          </ImageRotate>
        </ImageSection>
        <ImageSection text="CLICK HERE" textType="rotateZ">
          <img src={img2} alt=""/>
        </ImageSection>

        <ImageSection text={['WOW!!', 'GOOD DEAL!']} textType="growShrinkShake">
          <img src={img1} alt=""/>
        </ImageSection>


        <ImageSection text={"FLASH SALE"} textType="blinkFast">
          <img src={img1} alt=""/>
        </ImageSection>
      */}
      </Content>
    </div>
  )
}
        // <ImageSection>
        //   <img src={img2} alt=""/>
        // </ImageSection>

function Title() {
  return (
    <div className="headerTitle">
      <div>
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
              YOUR ONE-STOP SHOP FOR RONA MERCH
            </h3>
          </Marquee>
        </div>
      </div>

    {/*
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div className="sale" style={{ flexGrow: 1}}>
          FLASH SALE
        </div>
        <div className="buyNow" style={{ flexGrow: 1}}>
          BUY NOW
        </div>
      </div>





      <div style={{ fontSize: 35}}>
        <Arrows>
          HELLO
        </Arrows>
      </div>
      <div className="spaceAround">
        <Blink>
          <span className="sale">GREAT PRICES</span>
        </Blink>

        <GrowShrink>
          <span className="buyNow">HOT DEALS</span>
        </GrowShrink>
      </div>
      <div className="spaceAround">
        <Blink>
          <span className="sale">GREAT PRICES</span>
        </Blink>

        <GrowShrink>
          <span className="buyNow">HOT DEALS</span>
        </GrowShrink>
      </div>
    */}
    </div>
  )
}



type ChildProps = { children: React.ReactNode, className?: string }

function Content({ children }: ChildProps) {
  return (
    <div className="content">
      {children}
    </div>
  )
}

function PatriotTitle() {
  return (
    <div className="patriotTitle">
      <span className="patriotTitleMarquee">
      <MarqueeReverse>
        <span className="patriotTitleMarqueeText">PATRIOT GEAR</span>
      </MarqueeReverse>
      </span>
    </div>
  )
}

function BrandedTitle() {
  return (
    <MarqueeReverse className="flashing brandedTitleMarquee" duration={2.7}>
      <span className="brandedTitleMarqueeText">BRANDED MERCH</span>
    </MarqueeReverse>
  )
}

function SafetyTitle() {
  return (
    <MarqueeReverse className="safetyTitleMarquee">
      <span className="safetyTitleMarqueeText">SAFETY SWAG</span>
    </MarqueeReverse>
  )
}

function BargainTitle() {
  return (
    <Arrows className="bargainTitleMarquee">
      <span className="bargainTitleMarqueeText" style={{ animationDelay: '-1s'}}>BARGAIN BIN</span>
    </Arrows>
  )
}


function ImageMarquee({ children }: { children: Array<React.ReactNode>}) {
  const n = children.length
  return (
    <div className="imageMarquee">
      <div
        className="imageMarqueeInner"
        style={{ animationDuration: `${n*3}s` }}
      >
        <div
          className="imageMarqueeInnerInner"
          style={{ animationDuration: `${n*3}s` }}
        >
          {children.map((child, i) => (
            <span className="imageMarqueeChild">
              {child}
            </span>
          )
          )}
        </div>
      </div>
    </div>
  )
}

type TextTypes = 'tiltedMarquee' | 'growShrinkShake' | 'blinkFast' | 'rotateZ'
type ImageSectionProps = ChildProps & {
  textType: TextTypes,
  text: string | Array<string>
  // img: string,
  // alt: string
}

function ImageSectionText({ textType, text }: {textType: TextTypes, text: string | Array<string> }) {
  let t

  switch (textType) {
    case 'tiltedMarquee':
      return (
        <div className="tilt">
          <Marquee>
            <span className="sectionTitle">{text}</span>
          </Marquee>
        </div>
      )

    case 'growShrinkShake':
      t = typeof text === 'string' ? [text, text] : text
      return (
        <div style={{ position: 'absolute', paddingTop: 20}}>
          <div className="growShrinkShake" style={{ position: 'relative', fontSize: 60, textShadow: '5px 5px 0 #ffffff'}}>
            {t[0]}
          </div>
          <div className="growShrinkShakeDelayed" style={{ position: 'relative', fontSize: 50, left: 120, textShadow: '5px 5px 0 #ffffff'}}>
            {t[1]}
          </div>
        </div>
      )

    case 'blinkFast':
      t = typeof text === 'string' ? [text, text] : text

      return (
        <div style={{ position: 'absolute', paddingTop: 20}}>
          <div style={{position: 'relative', padding: 30, textShadow: '3px 3px 3px'}}>
            <div className="blink" style={{animationDuration: '1s', transform: 'rotate(-10deg)'}}>
              <span className="sale">{t[0]}</span>
            </div>
          </div>
          <div style={{position: 'relative', left: 30, marginTop: '-50%',padding: 30, textShadow: '3px 3px 3px'}}>
            <div className="blink" style={{animationDuration: '1.2s'}}>
              <span className="sale">{t[1]}</span>
            </div>
          </div>

          <div style={{position: 'relative', left: 120, padding: 30, textShadow: '3px 3px 3px'}}>
            <div className="blink" style={{animationDuration: '1.5s', transform: 'rotate(30deg)'}}>
              <span className="sale">{t[0]}</span>
            </div>
          </div>
        </div>
      )

    case 'rotateZ':
      return (
        <div className="rotateZContainer">
          <div className="rotateZ">
            <span className="sectionTitleLarge" style={{border: '2px solid', color: '#fff', padding: 5}}>CLICK HERE</span>
          </div>
        </div>
      )


  }
}


function ImageSection({ children, textType, text }: ImageSectionProps) {
  return (
    <div className="imageSection">
      <span style={{ zIndex: 5 }}>
        <ImageSectionText textType={textType} text={text}/>
      </span>
      <span style={{zIndex: -1}}>
        {children}
      </span>
    </div>
  )
}



export function Marquee({ children, duration, className }: ChildProps & {className?: string, duration?: number}) {
  const animationDuration = duration ? duration + 's' : '5s'
  return (
      <div className={`marquee ${className || ''}`}>
        <div className="marqueeInner" style={{ animationDuration }}>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
          <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
        </div>
      </div>
  )
}

export function MarqueeReverse({ children, duration, className }: ChildProps & {className?: string, duration?: number}) {
  const animationDuration = duration ? duration + 's' : '5s'
  return (
      <div className={`marquee ${className || ''}`}>
        <div className="marqueeInnerReverse" style={{ animationDuration }}>
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


function Arrows({children, className}: ChildProps) {
  return (
    <div className={className} style={{ display: 'flex', }}>
      <span className="arrowContainer">
        <span className="arrowsInner">
          <span className="arrowsInnerInner">
            {'>>>'}
          </span>
        </span>
      </span>

      <span className="arrowsContent">{children}</span>

      <span className="arrowContainer">
        <span
          className="arrowsInner"
          style={{ animationDelay: '-1s'}}
        >
          <span
            className="arrowsInnerInner"
            style={{ animationDelay: '-1s'}}
          >
            {'<<<'}
          </span>
        </span>
      </span>

    </div>
  )
}

type ImageRotateState = {
  ix: number,
  opacity: number
}

function ImageRotate({children, ms}: ChildProps & {ms: number}) {
  const [ix, setIx] = useState<number>(0)

  const images = Array.isArray(children) ? children : [children]
  const activeImage = images[ix % images.length]
  const nextImage = images[(ix + 1) % images.length]

  useEffect(() => {
    const interval = setInterval(() => {
      setIx(ix + 1)
    }, ms)

    return () => clearInterval(interval)
  })

  return (
    <div className="imageRotateContainer">
      {images.map((child, i) => (
        <span style={{ zIndex: -10, transition: '300ms', position: 'absolute', opacity: i === ix % images.length ? 1 : 0}}>{child}</span>
      ))}
    </div>
  )
}


function RotateZ({ children }: ChildProps) {
  return (
      <div className="rotateZContainer">
        <div className="rotateZ">
          <span className="rotateZContent">{children}</span>
        </div>
    </div>
  )
}
