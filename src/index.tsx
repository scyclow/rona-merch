import React from 'react'
import './index.css'
import App from './App'
// @ts-ignore
import {render} from 'react-snapshot'
// import * as serviceWorker from './serviceWorker';

// @ts-ignore
window.nightmode = false
const hours = new Date().getHours();
if (hours < 5 || hours >= 22) {
  document.body.className = 'nightmode'
  // @ts-ignore
  window.nightmode = true
}


render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
