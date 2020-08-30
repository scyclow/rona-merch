import React from 'react'
import Main from './Main'
import Patriot from './Patriot'
import Safety from './Safety'
import Branded from './Branded'
import Bargain from './Bargain'
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom'

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
      <div style={{ width: '100vw', overflow: 'hidden'}}>
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

          <Route path="/">
            <Main />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  )
}
