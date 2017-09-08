import React from 'react'
import classes from 'classnames'

import logo from '../assets/Logo.svg'

export default ({ modalState, user, login, logout }) => {
  return (
    <div className={classes({
        'info-win': true,
        'is_open': modalState
      })}>
      <div className={classes({
          'info-container': true,
          'is_open_flex': modalState
        })}>
          <div className='info-text'>
            <div className='info-logo_wrap'>
              <img className='info-logo_img' alt='hwyd.' src={logo} />
            </div>
            <p>Ultimately, CDNJS' popularity and core structure led to its biggest pain points. CDNJS' array of libraries is managed via git. Any developer can commit their library's files to the CDNJS repo to have them hosted. While git provided a solid mechanism for tracking changes across its libraries, the repo became unwieldy when containing thousands of projects. Currently the repo is FIVE GIGS. Due to the vast amount of files that have been tracked over the years, the repo is vulnerable to bizarre git errors, like this case sensitive bug across operating systems. Personally, I am unable to actually work on the repo because of these issues of scale.</p>
          </div>
          <div className='info-auth'>
            { (user !== null) ? <button type='log' onClick={logout} className='info-log'>Logout</button> : <button type='log' onClick={login} className='info-log'>Enter with Facebook</button> }
          </div>
          <div className='info-footer'>
            <span className='info-footer_text'>2017</span>
            <span className='info-footer_text'>hwyd by Cartel</span>
          </div>
        </div>
    </div>
  )
}
