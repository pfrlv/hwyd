import React from 'react'
import currentDay from './../helpers/getToday'
import contains from './../helpers/contains'

import logo from './../assets/Logo.svg'

export default ({ route, user, login, logout }) => {
  return (
    <div className="footer-wrap">
      <div className="footer-container">
        <div className="footer-content">
          <a href="/" className="logo-wrap">
            <img className="logo-img" alt="hwyd." src={logo} />
          </a>
        </div>
        <div className="footer-bottom">
          <span className="footer-txt">{currentDay.yy}</span>
          <span className="footer-txt">HWYD. by Ƨatire</span>
          <button className="footer-txt footer-txt_link"
            onClick={user ? logout : login}>
            {user ? 'Sign out' : 'Sign in with Facebook'}
          </button>
          {contains(route, 'about')
            ? <span className="footer-txt footer-txt_link footer-txt_link_current">About</span>
            : <a href="/about" className="footer-txt footer-txt_link">About</a>
          }
          {contains(route, 'privacy')
            ? <span className="footer-txt footer-txt_link footer-txt_link_current">Privacy</span>
            : <a href="/privacy" className="footer-txt footer-txt_link">Privacy</a>
          }
        </div>
      </div>
    </div>
  )
}
