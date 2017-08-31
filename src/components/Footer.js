import React from 'react'

import logo from '../assets/Logo.svg'

export default () => (
  <div className='footer-wrap'>
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='logo-wrap'>
          <img className='logo-img' alt='hwyd.' src={logo} />
        </div>
      </div>
      <div className='footer-bottom'>
        <span className='footer-txt'>2017</span>
        <span className='footer-txt'>hwyd by Cartel</span>
        <a className='footer-txt footer-txt_link' target='popup' href='https://facebook.com'>Enter with Facebook</a>
        <a className='footer-txt footer-txt_link footer-txt_italic' target='popup' href='http://github.com/pfrlv/hwyd'>i</a>
      </div>
    </div>
  </div>
)
