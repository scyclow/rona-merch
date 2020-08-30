import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Marquee } from './Main'

import './Bargain.css'


export default function Patriot() {
  return (
    <>
      <div className="header">
        <LogoLink />
        <div className="backAndForth">
          <h1 className="rmName">BARGAIN BIN</h1>
        </div>
      </div>
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

function BackAndForth({ children}: {children: React.ReactNode}) {

}
