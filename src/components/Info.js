import React from 'react'
import classes from 'classnames'

export default ({ modalRef, authRef }) => (
  <div className={classes('info-win', {
    'info-win_is-open': modalRef.state,
    'info-win_is-close': !modalRef.state
  })}>
    <div className='info-container'>
      <div className='info-track'>
        <div className='info-text'>
          <p><b>HWYD.</b> <i>(How was your day?)</i> — simple happy calendar.</p>
        </div>
        <div className='info-auth'>
          { (authRef.user !== null) ? <button type='log' onClick={authRef.logout} className='info-log'>Logout</button> : <button type='log' onClick={authRef.login} className='info-log'>Enter with Facebook</button> }
        </div>
        <div className='info-footer'>
          <span className='info-footer_text'>2017</span>
          <span className='info-footer_text'>hwyd by Ƨatire</span>
        </div>
      </div>
    </div>
  </div>
)
