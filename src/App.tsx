import React, {useState, useEffect} from 'react'
import Main, {BlinkLongHeader} from './Main'
import Patriot from './Patriot'
import Safety from './Safety'
import Branded from './Branded'
import Bargain from './Bargain'
import Item from './Item'
import AllItems from './AllItems'
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom'
import './App.css'
import X from './x.svg'

export function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Modal wait={120000} />
      <div style={{ width: '100vw', minHeight: '90vh', paddingBottom: 20, overflow: 'hidden'}}>
        <Switch>
          <Route path="/patriot">
            <Patriot />
          </Route>

          <Route path="/safety">
            <Safety />
          </Route>

          <Route path="/branded">
            <Branded />
          </Route>

          <Route path="/bargain">
            <Bargain />
          </Route>

          <Route path="/items/:itemId">
            <Item />
          </Route>

          <Route exact path="/items">
            <AllItems />
          </Route>

          <Route path="/">
            <Main />
          </Route>

        </Switch>
      </div>
      <footer className="footer">(c) RonaMerch.co</footer>
    </BrowserRouter>
  )
}

function Modal({ wait }: { wait: number }) {
  const [show, setShow] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [fade, setFade] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, wait - 50)

    setTimeout(() => {
      setFade(true)
    }, wait)
  }, [])

  const onClose = () => {
    setFade(false)
    setTimeout(() => {
      setShow(false)
    }, 500)
  }

  const submitEmail = () => {
    if (emailValue?.match(/.+\@.+\..+/)) {
      postEmail(emailValue)
        .then(resp => console.log(resp))
        .catch(e => console.error(e))
    }
    onClose()
  }

  const submitOnCommandEnter = (e: any) => {
    if (e.keyCode === 13 && e.metaKey) {
      submitEmail()
    }
  }
  if (!show) return null
  return (
    <div className={`modal ${fade ? 'displayModal' : ''}`}>
      <div className="modalBackdrop" onClick={onClose} />
      <div className="modalContent">
        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
          <img
            style={{ width: 20, height: 20, padding: 20, paddingRight: 0, cursor: 'pointer' }}
            src={X}
            alt="x"
            onClick={onClose}
          />
        </div>
        <div>
          <BlinkLongHeader>
            <span style={{fontSize: 14, padding: '0.3em 1em'}}>STAY IN TOUCH!</span>
          </BlinkLongHeader>
          <h3 className="modalTitle" style={{ marginTop: 15, marginBottom: 5}}>Sign up for our newsletter to stay up to date on all the hottest deals</h3>
          <div style={{ marginTop: '1.5em', marginBottom: '0.5em' }}>
            <input
              className="modalInput"
              placeholder="your@email.com"
              value={emailValue}
              onChange={e => setEmailValue(e.target.value)}
              onKeyDown={submitOnCommandEnter}
            />
          </div>
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: 15}}>
            <button className="signupButton" onClick={submitEmail}>SIGN UP</button>
          </div>
          <h3 className="modalTitle">Don't see an item you want? <br/> <a className="link">Drop us a line</a></h3>

        </div>
      </div>
    </div>
  )
}

async function postEmail(email: string) {
  const method = 'POST';
  const headers = { 'Content-Type': 'application/json' }
  const body = JSON.stringify({ email, pin: 'no pin'})

  const response = await fetch(
    'https://fastcashmoneyplus.herokuapp.com/api/users',
    {
      headers,
      body,
      method
    }
  )
  return response.json()
}
