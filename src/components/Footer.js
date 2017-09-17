import React from 'react'
import current from './../helpers/getToday'

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
          <span className='footer-txt'>{current.yy}</span>
          <span className='footer-txt'>hwyd by Ƨatire</span>
          { (authRef.user !== null) ? <span className='footer-txt footer-txt_link' onClick={authRef.logout}>Logout</span> : <span className='footer-txt footer-txt_link' onClick={authRef.login}>Enter with Facebook</span> }
          <a className='footer-txt footer-txt_link footer-txt_italic' onClick={modalRef.toggle} >i</a>
        </div>
      </div>
    </div>
  )
}
