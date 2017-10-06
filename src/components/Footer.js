import React from 'react'
import currentDay from './../helpers/getToday'

import logo from './../assets/Logo.svg'

export default ({ modalRef, authRef }) => {
  return (
    <div className='footer-wrap'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='logo-wrap'>
            <img className='logo-img' alt='hwyd.' src={logo} />
          </div>
        </div>
        <div className='footer-bottom'>
          <span className='footer-txt'>{currentDay.yy}</span>
          <span className='footer-txt'>HWYD. by Ƨatire</span>
          <button className='footer-txt footer-txt_link'
            onClick={(authRef.user !== null) ? authRef.logout : authRef.login}>
            {(authRef.user !== null) ? 'Sign out' : 'Sign in with Facebook'}
          </button>
          <button className='footer-txt footer-txt_link' onClick={modalRef.toggle} style={{minWidth: '95px'}}>{modalRef.state ? 'Close' : 'About'}</button>
          <a href="https://docs.google.com/document/d/1GfRB05ail3pJEwkP6mwyqR9sw7D1jdhZMCym9X6g05k/edit?usp=sharing" className='footer-txt footer-txt_link'>Privacy</a>
        </div>
      </div>
    </div>
  )
}
