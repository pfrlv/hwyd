import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

document.addEventListener('touchstart', function () {}, true)
;('ontouchstart' in document.documentElement)
  ? document.documentElement.classList.add('Touch')
  : document.documentElement.classList.add('Mouse')