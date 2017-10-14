import React from 'react'
import classes from 'classnames'

export default ({ isInit, login, logout, user }) => (
  <div className={classes('info-win', {
    'no-animate': isInit
  })}>
    <div className='info-container'>
      <div className='info-track'>
        <div className='info-body'>
          <div className='info-text'>
            <p>
              <b>How was your day?</b> — simple happy calendar. <nobr><b>HWYD.</b> will</nobr> help you rate your everyday life whether it is happy or could be better. 
              After 8 pm mark your day green or red depending on how it was: happy or not. 
              Try to rate your whole year happy.
            </p>
          </div>
          <div className='info-auth'>
            <button onClick={user ? logout : login}
              className='info-auth__button'>{user ? 'Sign out' : 'Sign in with Facebook'}</button>
          </div>
        </div>
        <div className='info-footer'>
          <div>
            <a href="/privacy" className="info-footer_text info-footer_text_link">Privacy</a>
            <span className='info-footer_text'>2017</span>
          </div>
          <span className='info-footer_text'>HWYD. by Ƨatire</span>
        </div>
      </div>
    </div>
  </div>
)
