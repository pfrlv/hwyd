import React from 'react'

import logo from '../assets/Logo.svg'

export default ({ toggleModalWin, user, login, logout }) => {
  return (
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
          { (user !== null) ? <span className='footer-txt footer-txt_link' onClick={logout}>Want to switch, {user.displayName}?</span> : <span className='footer-txt footer-txt_link' onClick={login}>Enter with Facebook</span> }
          <a className='footer-txt footer-txt_link footer-txt_italic' onClick={toggleModalWin} >i</a>
        </div>
      </div>
    </div>
  )
}
