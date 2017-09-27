import React from 'react'
import classes from 'classnames'

export default ({ modalRef, authRef }) => (
  <div className={classes('info-win', {
    'info-win_is-open': modalRef.state,
    'info-win_is-close': !modalRef.state
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
            { (authRef.user !== null) ? <button type='log' onClick={authRef.logout} className='info-log'>Signout</button> : <button type='log' onClick={authRef.login} className='info-log'>Signin with Facebook</button> }
          </div>
        </div>
        <div className='info-footer'>
          <span className='info-footer_text'>2017</span>
          <span className='info-footer_text'>hwyd by Ƨatire</span>
        </div>
      </div>
    </div>
  </div>
)
