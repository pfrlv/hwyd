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
          { (authRef.user !== null)
            ? <span className='footer-txt footer-txt_link' onClick={authRef.logout}>Sign out</span>
            : <span className='footer-txt footer-txt_link' onClick={authRef.login}>Sign in with Facebook</span>
          }
          { modalRef.state
            ? <a className='footer-txt footer-txt_link' onClick={modalRef.toggle} >Close</a>
            : <a className='footer-txt footer-txt_link' onClick={modalRef.toggle} >About</a>
          }
          
        </div>
      </div>
    </div>
  )
}
