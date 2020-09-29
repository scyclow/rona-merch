import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import {shuffle} from 'lodash'
import Logo from './Logo'

import logoNight from './logo-night.svg'
import flashSale from './flashSale.svg'
import './Main.css'
import data, { Item } from './data'

export default function Main() {
  return (
    <div className="app">
      <header className="header">
        <Logo className="logoFull" size={350}/>
        <Title />
      </header>
      <Marquee duration={20}>
        <a href="http://fakebullshit.news" target="_blank">
          <h4 className="rmName">
            "Without a doubt, Rona Merch Co. offers the hottest selection of stylish face masks on the internet -- and at ROCK BOTTOM prices to boot!"
            <span className="link" style={{paddingLeft: 3}}>Patrick Swanson (FB News)</span>
          </h4>
        </a>
      </Marquee>
      <Content>
        <VerticalSection>
          <FeaturedItems />
        </VerticalSection>


        <VerticalSection>
          <Patriot/>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <TopReviews />
            <Safety />
          </div>
        </VerticalSection>
      </Content>

      <MarqueeReverse duration={20}>
        <a href="https://www.economist.com/finance-and-economics/2020/08/22/why-the-economic-value-of-a-face-mask-is-5614?fsrc=scn/tw/te/bl/ed/clothofgoldwhytheeconomicvalueofafacemaskis5614financeeconomics" target="_blank">
          <h4 className="rmName">
            "THE VALUE OF A GOOD FACE MASK IS MORE THAN $56" --
            <span className="link" style={{ paddingLeft: 3}}>The Economist</span>
          </h4>
        </a>
      </MarqueeReverse>

      <Content>
        <VerticalSection>
          <Branded />
          <img className="imageSpin siteImage animationReverse" src={flashSale} />
        </VerticalSection>

        <VerticalSection>
          <GrowShrinkShake text={["WOW!!", "SO CHEAP!"]} />
          <Bargain />
        </VerticalSection>





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

function VerticalSection({ children }: ChildProps) {
  return (
    <div className="verticalSection">
      {children}
    </div>
  )
}

function Title() {
  return (
    <div className="headerTitle headerTitlePadding">
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
        {/*
                <div className="marqueeBorders">
                  <Marquee>
                    <h4 className="rmName">
                      A FACEMASK A DAY KEEPS THE DOCTOR AWAY
                    </h4>
                  </Marquee>
                </div>
        */}
        <div className="marqueeBorders">
          <Marquee>
            <h4 className="rmName">
              RONA MERCH CO. IS DEDICATED TO BRINGING YOU THE FRESHEST RONA DEALS EVERY DAY
            </h4>
          </Marquee>
        </div>
        <div className="marqueeBorders">
          <MarqueeReverse>
            <h4 className="rmName">
              SHOP UNTIL YOU DROP
            </h4>
          </MarqueeReverse>
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

function FeaturedItems() {
  return (
    <div style={{ width: '100%' }}>
      <div style={{marginBottom: 10}}>
        <RotateZ>
          <span style={{fontSize: 30}}>FEATURED ITEMS</span>
        </RotateZ>
      </div>
      <ImageMarquee>
        {shuffle(data.patriot.map(item => (
          <ItemFeature noLink key={item.id} item={item}/>
        )))}
      </ImageMarquee>
    </div>
  )
}

function Patriot() {
  const windowWidth = useResponsive()
  return (
    <Link to="/patriot" className="brandSection brandSectionPatriot">
      <div>
        <PatriotTitle />
        <VerticalMarquee style={{ height: windowWidth > 815 ? 800 : 400, boxSizing: 'content-box' }} duration={48000}>
          {shuffle(data.patriot.map(item => (
            <ItemFeature noLink key={item.id} item={item}/>
          )))}
        </VerticalMarquee>
      </div>
    </Link>
  )
}

function Branded() {
  return (
     <Link to="/branded" className="brandSection">
        <div>
          <BrandedTitle />
          <ImageMarquee jerk duration={20}>
            {shuffle(data.branded.map(item => (
              <ItemFeature noLink key={item.id} item={item}/>
            )))}
          </ImageMarquee>
        </div>
      </Link>
  )
}

function Bargain() {
  const windowWidth = useResponsive()
  return (
    <Link to="/bargain" className="brandSection">
      <div>
        <BargainTitle />
        <div className="bargainImageSection">
          <ImageShrinkRotation ms={3000} delay={0}>
            {shuffle(data.bargain.map(item => (
              <ItemFeature noLink key={item.id} item={item}/>
            )))}
          </ImageShrinkRotation>

          {windowWidth >= 600 && (
            <ImageShrinkRotation ms={3000} delay={500}>
              {shuffle(data.bargain.map(item => (
                <ItemFeature noLink key={item.id} item={item}/>
              )))}
            </ImageShrinkRotation>
          )}
        </div>
      </div>
    </Link>
  )
}

function Safety() {
  return (
    <Link to="/safety" className="brandSection brandSectionSafety">
      <div>
        <SafetyTitle />
        <div className="safetyGridSectionDesktop">
          <ImageRotate ms={3000} delay={0}>
            {shuffle(data.safety.map(item => (
              <ItemFeature noLink className="itemFeatureSm" key={item.id} item={item}/>
            )))}
          </ImageRotate>

          <ImageRotate ms={3000} delay={50}>
            {shuffle(data.safety.map(item => (
              <ItemFeature noLink className="itemFeatureSm" key={item.id} item={item}/>
            )))}
          </ImageRotate>

          <ImageRotate ms={3000} delay={100}>
            {shuffle(data.safety.map(item => (
              <ItemFeature noLink className="itemFeatureSm" key={item.id} item={item}/>
            )))}
          </ImageRotate>

          <ImageRotate ms={3000} delay={150}>
            {shuffle(data.safety.map(item => (
              <ItemFeature noLink className="itemFeatureSm" key={item.id} item={item}/>
            )))}
          </ImageRotate>
        </div>

        <div className="safetyGridSectionMobile">
          <ImageRotate ms={3000} delay={0}>
            {shuffle(data.safety.map(item => (
              <ItemFeature noLink key={item.id} item={item}/>
            )))}
          </ImageRotate>
        </div>
      </div>
    </Link>
  )
}


function TopReviews() {
  return (
    <div style={{ margin: 15, padding: 15, }}>
      <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 250  }}>
        <TiltedMarquee rotate={0}>
          <h4 className="rmName">TOP REVIEWS</h4>
        </TiltedMarquee>

        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
          <TiltedMarquee rotate={90}>
            <h4 className="rmName">TOP REVIEWS</h4>
          </TiltedMarquee>
          <div style={{ width: 250}}>
            <ImageRotate ms={5000}>
              <div className="topReviewTestemonial" >Thes products are great! 10/10, would definitely buy again!" -- Wendy Pilson</div>
              <div className="topReviewTestemonial" >The best face masks on the web. Period." -- Joe Schmoe</div>
            </ImageRotate>
          </div>

          <TiltedMarquee rotate={270}>
            <h4 className="rmName">TOP REVIEWS</h4>
          </TiltedMarquee>
        </div>

        <TiltedMarquee rotate={180}>
          <h4 className="rmName">TOP REVIEWS</h4>
        </TiltedMarquee>
      </div>
    </div>
  )
  // return (
  //   <div style={{ margin: 15, height: fillerHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
  //     <div className="blink" style={{ marginBottom: 20 }}>
  //       GREAT DEALS
  //     </div>
  //     <div className="blink" style={{ marginBottom: 20, animationDirection: 'reverse' }}>
  //       100% PROTECTION
  //     </div>
  //     <div className="blink" style={{ marginBottom: 20 }}>
  //       SATISFACTION GUARANTEED
  //     </div>
  //   </div>
  // )
}


export type StyleProps = { className?: string, style?: React.CSSProperties }
export type ChildProps = { children: React.ReactNode } & StyleProps

export function Content({ children }: ChildProps) {
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


function ImageMarquee({ children, jerk, duration }: { children: Array<React.ReactNode>, jerk?: boolean, duration?: number}) {
  const rand = useRef<number>(Math.random()).current
  duration = duration || children.length * 6
  const animationDuration = duration + 's'
  const animationDelay = (duration * rand * -1) + 's'
  const jerkit = jerk ? 'Jerk' : ''
  return (
    <div className="imageMarquee">
      <div
        className={`imageMarqueeInner${jerkit}`}
        style={{ animationDuration, animationDelay }}
      >
        <div
          className={`imageMarqueeInnerInner${jerkit}`}
          style={{ animationDuration, animationDelay }}
        >
          {children.map((child, i) => (
            <span key={'marquee'+i} className="imageMarqueeChild">
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

function GrowShrinkShake({ text }: {text: string | [string, string]}) {
  const t = typeof text === 'string' ? [text, text] : text
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: 300, marginTop: 20}}>
      <div className="growShrinkShake" style={{ display: "block", textAlign: "center", fontSize: 60, textShadow: '5px 5px 0 #ffffff'}}>
        {t[0]}
      </div>
      <div className="growShrinkShakeDelayed" style={{ display: "block", textAlign: "center", fontSize: 50, left: 120, textShadow: '5px 5px 0 #ffffff'}}>
        {t[1]}
      </div>
    </div>
  )
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



export function Marquee({ children, duration, className, style }: ChildProps & {className?: string, duration?: number}) {
  const animationDuration = duration ? duration + 's' : '5s'
  return (
      <div className={`marquee ${className || ''}`} style={style}>
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


export function Arrows({children, className}: ChildProps) {
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

export function ImageRotate({children, ms, delay}: ChildProps & {ms: number, delay?: number}) {
  const [ix, setIx] = useState<number>(0)

  const images = Array.isArray(children) ? children : [children]
  const activeImage = images[ix % images.length]
  const nextImage = images[(ix + 1) % images.length]

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => setIx(ix + 1), delay || 0)
    }, ms)

    return () => clearInterval(interval)
  })

  return (
    <div className="imageRotateContainer">
      {images.map((child, i) => (
        <span key={'ir-'+i} style={{ zIndex: -10, transition: '300ms', position: 'absolute', opacity: i === ix % images.length ? 1 : 0}}>
          {child}
        </span>
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

function RotateZFull({ children, style }: ChildProps) {
  return (
    <div className="rotateZContainer" style={style}>
      <div className="rotateZFull">
        <span className="rotateZContent">{children}</span>
      </div>
    </div>
  )
}

export function MarqueeChild({ children, className, style }: ChildProps) {
  return (
    <div className={`imageMarqueeChild ${className || ''}`} style={style}>
      {children}
    </div>
  )
}

export function ItemFeature({ item, className, style, noLink }: { item: Item, noLink?: boolean } & StyleProps) {
  return (
    <div className={`itemFeature ${className || ''}`} style={style}>
      {!!noLink
        ? (
        <img src={item.images[0]} alt={item.title} />
      ) : (
        <Link to={`/items/${item.id}`}>
          <img src={item.images[0]} alt={item.title} />
        </Link>
      )}
    </div>
  )
}

function BlinkLongHeader({children}: ChildProps) {
  return (
    <div style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap'}}>
      <h4 className="rmName blink" style={{animationDuration: '1s'}}>{children}</h4>
      <h4 className="rmName blink" style={{animationDuration: '1s'}}>{children}</h4>
      <h4 className="rmName blink" style={{animationDuration: '1s'}}>{children}</h4>
      <h4 className="rmName blink" style={{animationDuration: '1s'}}>{children}</h4>
      <h4 className="rmName blink" style={{animationDuration: '1s'}}>{children}</h4>
      <h4 className="rmName blink" style={{animationDuration: '1s'}}>{children}</h4>
      <h4 className="rmName blink" style={{animationDuration: '1s'}}>{children}</h4>
      <h4 className="rmName blink" style={{animationDuration: '1s'}}>{children}</h4>
      <h4 className="rmName blink" style={{animationDuration: '1s'}}>{children}</h4>
      <h4 className="rmName blink" style={{animationDuration: '1s'}}>{children}</h4>
    </div>
  )
}

export function VerticalMarquee({children, className, direction, duration, style}: ChildProps & {children: Array<React.ReactNode>, direction?: 1 | -1, duration?: number}) {
  duration = duration || 24000

  const images = children.map((child, i) => (
    <div key={'vm'+i} className="itemFeature" style={{ marginTop: 10 }}>
      {child}
    </div>
  ))


  return (
    <div className={`verticalMarquee ${className || ''}`} style={style}>
      <div
        className={direction === -1 ? "verticalMarqueeInnerReverse" : "verticalMarqueeInner"}
        style={{ animationDuration: duration + 'ms' }}
      >
        {images}
        {images}
      </div>
    </div>
  )
}

function useResponsive() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const resize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  })

  return width
}

export function TiltedMarquee({ children, style, rotate }: {rotate?: number} & ChildProps) {
  return (
    <div style={{ transform: `rotate(${-1*(rotate || 0)}deg)`, ...style }}>
      <Marquee style={{ overflow: 'visible', width: 10, position: 'relative', left: -100}}>
        {children}
      </Marquee>
    </div>
  )
}

function ImageShrinkRotation({children, delay, ms, style}: {ms: number, delay?: number} & ChildProps) {
  const ixRef = React.useRef(0)
  const [ix, setIx] = useState<number>(0)
  const [scaleSize, setScaleSize] = useState<number>(1)

  const images = Array.isArray(children) ? children : [children]
  const activeImage = images[ix % images.length]

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setScaleSize(1)
      }, (delay||0) + (ms/10))

      setTimeout(() => {
        setScaleSize(0)
      }, (delay||0) + (ms - (ms/10)))

      setTimeout(() => {
        ixRef.current++
        setIx(ixRef.current)
      }, (delay||0) + ms)
    }, ms)

    return () => clearInterval(interval)
  }, [])
  return (
    <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style}}>
      <div className="imageShrinkRotation" style={{ transform: `scale(${scaleSize})`}}>
        {/*activeImage*/}
      </div>
    </div>
  )
}
