import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {shuffle} from 'lodash'
import Logo from './Logo'


import flashSale from './flashSale.svg'
import flashSaleNight from './flashSaleNight.svg'
import './Main.css'
import data, { Item, allData } from './data'

export default function Main() {
  // @ts-ignore
  const [isNightmode, setIsNightmode] = useState(window.nightmode)
  const flashSaleSvg = isNightmode ? flashSaleNight : flashSale

  return (
    <div className="app">
      <Helmet>
        <title>Rona Merch Co.</title>
      </Helmet>

      <header className="header">
        <Logo className="logoFull" size={350}/>
        <Title />
      </header>
      <Marquee duration={20}>
        <a href="http://fakebullshit.news/articles/small-business-thrives" target="_blank">
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
        <a href="https://www.economist.com/finance-and-economics/2020/08/22/why-the-economic-value-of-a-face-mask-is-5614?fsrc=scn/tw/te/bl/ed/clothofgoldwhytheeconomicvalueofafacemaskis5614financeeconomics" target="_blank" rel="noopener">
          <h4 className="rmName">
            "THE VALUE OF A GOOD FACE MASK IS MORE THAN $56" --
            <span className="link" style={{ paddingLeft: 3}}>The Economist</span>
          </h4>
        </a>
      </MarqueeReverse>

      <Content>

        <VerticalSection>
          <Branded />
          <img
            className="imageSpin siteImage animationReverse"
            style={{ cursor: 'pointer'}}
            src={flashSaleSvg}
            onClick={() => {
              document.body.className = isNightmode ? '' : 'nightmode';
              // @ts-ignore
              window.nightmode = !isNightmode
              setIsNightmode(!isNightmode)
            }}
          />
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
  const items = shuffle(allData.filter(i => i.featured))

  return (
    <div style={{ width: '100%' }}>
      <div style={{marginBottom: 15}}>
        <RotateZ>
          <span style={{fontSize: 30}}>FEATURED ITEMS</span>
        </RotateZ>
      </div>
      <div style={{ border: '6px solid'}}>
        <ImageMarquee>
          {items.map(item => (
            <ItemFeature key={item.id} item={item} style={{marginRight: 5}}/>
          ))}
        </ImageMarquee>
      </div>
      <div className="entireCatalog">
        <Link to="/items">{'View Full Product Catalog >'}</Link>
      </div>
    </div>
  )
}

function Patriot() {
  const windowWidth = useResponsive()
  return (
    <Link to="/patriot" className="brandSection brandSectionPatriot">
      <div>
        <PatriotTitle />
        <VerticalMarquee style={{ height: windowWidth > 815 ? 800 : 400, boxSizing: 'content-box', color: '#3C3B6E', borderTop: 0 }} duration={48000}>
          {shuffle(data.patriot.map(item => (
            <ItemFeature noLink key={item.id} item={item} style={{ borderTop: '4px solid #3c3b6e' }}/>
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
          <div style={{ border: '4px solid #ff00ff'}}>
            <ImageMarquee jerk duration={20} childStyle={{marginRight: 0, borderRight: '4px solid #ff00ff'}}>
              {shuffle(data.branded).slice(0, 12).map(item => (
                <ItemFeature noLink key={item.id} item={item}/>
              ))}
            </ImageMarquee>
          </div>
        </div>
      </Link>
  )
}

function Bargain() {
  const windowWidth = useResponsive()
  const bargainItems = shuffle(data.bargain)
  const bargainItems2 = [
    ...bargainItems.slice(Math.floor(bargainItems.length * 0.5), bargainItems.length),
    ...bargainItems.slice(0, Math.floor(bargainItems.length * 0.5)),
  ]
  return (
    <Link to="/bargain" className="bargainSection">
      <div>
        <BargainTitle />
        <div className="bargainImageSection" style={{ marginTop: 20}}>
          <ImageShrinkRotation ms={3000} delay={0}>
            {bargainItems.map(item => (
              <ItemFeature noLink key={item.id} item={item} style={{border: '2px solid'}}/>
            ))}
          </ImageShrinkRotation>

          {windowWidth >= 600 && (
            <ImageShrinkRotation ms={3000} delay={500}>
              {bargainItems2.map(item => (
                <ItemFeature noLink key={item.id} item={item} style={{border: '2px solid'}}/>
              ))}
            </ImageShrinkRotation>
          )}
        </div>
      </div>
    </Link>
  )
}

function Safety() {

  const safetyProducts = shuffle(data.safety)
  const safetyProducts1 = safetyProducts
  const safetyProducts2 = [
    ...safetyProducts.slice(Math.floor(safetyProducts.length * 0.25), safetyProducts.length),
    ...safetyProducts.slice(0, Math.floor(safetyProducts.length * 0.25)),
  ]
  const safetyProducts3 = [
    ...safetyProducts.slice(Math.floor(safetyProducts.length * 0.5), safetyProducts.length),
    ...safetyProducts.slice(0, Math.floor(safetyProducts.length * 0.5)),
  ]
  const safetyProducts4 = [
    ...safetyProducts.slice(Math.floor(safetyProducts.length * 0.75), safetyProducts.length),
    ...safetyProducts.slice(0, Math.floor(safetyProducts.length * 0.75)),
  ]
  return (
    <Link to="/safety" className="brandSection brandSectionSafety">
      <div className="safetySectionBorder">
        <SafetyTitle />
        <div className="safetyGridSectionDesktop">
          <ImageRotate ms={3000} delay={0}>
            {safetyProducts1.map(item => (
              <ItemFeature noLink className="itemFeatureSm" key={item.id} item={item}/>
            ))}
          </ImageRotate>

          <ImageRotate ms={3000} delay={50}>
            {safetyProducts2.map(item => (
              <ItemFeature noLink className="itemFeatureSm" key={item.id} item={item}/>
            ))}
          </ImageRotate>

          <ImageRotate ms={3000} delay={100}>
            {safetyProducts3.map(item => (
              <ItemFeature noLink className="itemFeatureSm" key={item.id} item={item}/>
            ))}
          </ImageRotate>

          <ImageRotate ms={3000} delay={150}>
            {safetyProducts4.map(item => (
              <ItemFeature noLink className="itemFeatureSm" key={item.id} item={item}/>
            ))}
          </ImageRotate>
        </div>

        <div className="safetyGridSectionMobile">
          <ImageRotate ms={3000} delay={0}>
            {safetyProducts.map(item => (
              <ItemFeature noLink key={item.id} item={item}/>
            ))}
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
              <div className="topReviewTestemonial">"These products are great! 10/10, would definitely buy again!" <br/>-- Wendy Pilson</div>
              <div className="topReviewTestemonial">"The best face masks on the web. Period." <br/>-- Joe Schmoe</div>
              <div className="topReviewTestemonial">"Such high quality. Great prices too!" <br/>-- Sarah Johnson</div>
              <div className="topReviewTestemonial">"I love it!" <br/>-- Phil Jackson</div>
              <div className="topReviewTestemonial">"Everything I've ever wanted in a face mask" <br/>-- Barbra Willson</div>
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
    <MarqueeReverse className="brandedTitleMarquee" duration={2.7}>
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


function ImageMarquee({ children, jerk, duration, className, style, childStyle, childClassName }: ChildProps & { children: Array<React.ReactNode>, jerk?: boolean, duration?: number, childStyle?: ChildProps['style'], childClassName?: ChildProps['className']}) {
  const rand = useRef<number>(Math.random()).current
  duration = duration || children.length * 6
  const animationDuration = duration + 's'
  const animationDelay = (duration * rand * -1) + 's'
  const jerkit = jerk ? 'Jerk' : ''
  return (
    <div className={"imageMarquee " + className} style={style}>
      <div
        className={`imageMarqueeInner${jerkit}`}
        style={{ animationDuration, animationDelay }}
      >
        <div
          className={`imageMarqueeInnerInner${jerkit}`}
          style={{ animationDuration, animationDelay }}
        >
          {children.map((child, i) => (
            <span key={'marquee'+i} className={"imageMarqueeChild " + childClassName||''} style={childStyle} >
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
      <div className="growShrinkShake" style={{ display: "block", textAlign: "center", fontSize: 60 }}>
        {t[0]}
      </div>
      <div className="growShrinkShakeDelayed" style={{ display: "block", textAlign: "center", fontSize: 50, left: 120 }}>
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

export function ItemFeature({ item, className, style, noLink, showTitle, border }: { item: Item, noLink?: boolean, showTitle?: boolean, border?: boolean } & StyleProps) {
  const emTextElement = (
    <div className="tilt">
      <Marquee style={{ border: '1px solid', boxShadow: '0px 2px 7px #000' }}>
        <span className="tiltText">{item.emText}</span>
      </Marquee>
    </div>
  )

  const borderStyle = {
    border: border ? '4px solid' : '',
    overflow: 'hidden',
    height: 300
  }

  const imgSrc = item.images[item.primaryIx]

  const imageElem = (
    <>
      <div style={borderStyle}>
        {item.emText && emTextElement}
        <img src={imgSrc} alt={item.title} />
      </div>
      {showTitle && <div className="itemFeatureTitle">{item.title}</div>}
    </>
  )

  return (
    <div className={`itemFeature ${className || ''}`} style={style}>
      <div>
        {!!noLink
          ? imageElem
          : (
          <Link to={`/items/${item.id}`}>
            {imageElem}
          </Link>
        )}
      </div>
    </div>
  )
}

export function BlinkLongHeader({children}: ChildProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden', whiteSpace: 'nowrap'}}>
      <span className="blink" style={{animationDuration: '1.5s'}}>{children}</span>
      <span className="blink" style={{animationDuration: '1.5s'}}>{children}</span>
      <span className="blink" style={{animationDuration: '1.5s'}}>{children}</span>
      <span className="blink" style={{animationDuration: '1.5s'}}>{children}</span>
    </div>
  )
}

export function VerticalMarquee({children, className, direction, duration, style}: ChildProps & {children: Array<React.ReactNode>, direction?: 1 | -1, duration?: number}) {
  duration = duration || 24000

  const images = children.map((child, i) => (
    <div key={'vm'+i}>
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

export function TiltedMarquee({ children, className, style, rotate }: {rotate?: number} & ChildProps) {
  return (
    <div className={className} style={{ transform: `rotate(${-1*(rotate || 0)}deg)`, ...style }}>
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
        {images.map((image, i) =>
          <div key={i} style={{ display: i === ix % images.length ? 'block': 'none'}}>
            {image}
          </div>
        )}
      </div>
    </div>
  )
}
