import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// The setTimeout and setInterval functions re-made with requestAnimationFrame
// https://github.com/trusktr/
;(function(window) {
  const _setTimeout = window.setTimeout
  
  window.setTimeout = function setTimeout(fn, timeout) {
    return _setTimeout.call(window, () => requestAnimationFrame(fn), timeout)
  }

  const _setInterval = window.setInterval
  
  window.setInterval = function setInterval(fn, timeout) {
    return _setInterval.call(window, () => requestAnimationFrame(fn), timeout)
  }
})(window);
// ----------------------------------------------------------------------------

// Remove 300ms delay on Tap
// Add helpers classes
;('ontouchstart' in document.documentElement)
  ? document.documentElement.classList.add('Touch')
  : document.documentElement.classList.add('Mouse')

window.addEventListener('touchstart', function () {}, true)
// ----------------------------------------------------------------------------

// Render
ReactDOM.render(<App />, document.getElementById('root'))
// ----------------------------------------------------------------------------

registerServiceWorker()
