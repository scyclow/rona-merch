import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Marquee } from './Main'

import './Safety.css'


export default function Safety() {
  const logoRef = useRef(null)
  return (
    <>
      <Background ref_={logoRef}/>
      <div className="header">
        <LogoLink ref_={logoRef}/>

        <Marquee className="safetyBorder">
          <h1 className="rmName safetyH1">SAFETY SWAG</h1>
        </Marquee>
      </div>
    </>
  )
}


function LogoLink({ ref_ }: {ref_: React.Ref<any>}) {
  return (
    <Link ref={ref_} to="/">
      <Logo size={200} />
    </Link>
  )
}

function Background({ ref_ }: {ref_: React.Ref<any>}) {
  return <CanvasBackground ref_={ref_}/>
  // return (
  //   <>
  //     <div className="wave"></div>
  //     <div className="wave" style={{animationDelay: '1s'}}></div>
  //     <div className="wave" style={{animationDelay: '2s'}}></div>
  //     <div className="wave" style={{animationDelay: '3s'}}></div>
  //     <div className="wave" style={{animationDelay: '4s'}}></div>
  //     <div className="wave" style={{animationDelay: '5s'}}></div>
  //   </>
  // )
}


type CanvasState = {
  circles: Array<{
    size: number,
    opacity: number
  }>
}


const canvasConfig = [
  {offset: 0},
  {offset: 1250},
  {offset: 2500},
  {offset: 3750},
  {offset: 5000},
  {offset: 6250},
]

function CanvasBackground({ ref_ }: {ref_: React.Ref<any>}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const init = (ctx: CanvasRenderingContext2D) => {
    ctx.lineWidth = 2
  }
  const frame = (ctx: CanvasRenderingContext2D, elapsed: number) => {
    for (let config of canvasConfig) {
      if (elapsed < config.offset) continue

      const elapsedForShape = elapsed - config.offset
      const distance = window.innerWidth
      const time = 7500

      // @ts-ignore
      const { offsetWidth, offsetLeft, offsetHeight, offsetTop} = ref_?.current || {}
      const x = (offsetWidth / 2) + offsetLeft || 0
      // @ts-ignore
      const y = (offsetHeight / 2) + offsetTop || 0

      console.log(offsetWidth, offsetLeft, offsetHeight, offsetTop)
      const radius = ((elapsedForShape % time) / time) * distance
      ctx.beginPath();
      ctx.globalAlpha = 1 - (radius / window.innerWidth)
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.stroke();

      // ctx.beginPath();
      // ctx.globalAlpha = 1 - (radius / window.innerWidth)
      // ctx.arc(window.innerWidth, window.innerHeight, radius, 0, 2 * Math.PI);
      // ctx.stroke();

    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      withCanvas(canvasRef.current, init, frame)
    }
  })

  return <canvas
    style={{ position: 'absolute', zIndex: -1}}
    ref={canvasRef}
    width={window.innerWidth}
    height={window.innerHeight}
  />
}

type InitFn = (ctx: CanvasRenderingContext2D) => unknown
type RenderFn = (ctx: CanvasRenderingContext2D, elapsed: number) => unknown

function withCanvas(canvasElement: HTMLCanvasElement, init: InitFn, frame: RenderFn) {
  const ctx = canvasElement.getContext('2d')
  if (!ctx) return

  window.addEventListener('resize', () => {
    canvasElement.width = window.innerWidth
    canvasElement.height = window.innerHeight
  })

  const start = Date.now()

  const draw = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    frame(ctx, Date.now() - start)
    window.requestAnimationFrame(draw)
  }

  init(ctx)
  window.requestAnimationFrame(draw)
}



