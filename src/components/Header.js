import React from 'react'
import logo from '../assets/Logo.svg'

export default () => (
  <div className='header-wrap'>
    <div className='header-container_mobile'>
      <div className='header-logo-wrap'>
        <img className='header-logo-img' alt='hwyd.' src={logo} />
      </div>
      <div className='header-info'>
        <a className='header-link header-link_italic' target='popup' href='http://github.com/pfrlv/hwyd'>i</a>
      </div>
    </div>
    <div className='header-container_desktop'>
      <div className='row'>
        <span className='column_month'>Jan.</span>
        <span className='column_month'>Feb.</span>
        <span className='column_month'>Mar.</span>
        <span className='column_month'>Apr.</span>
        <span className='column_month'>May</span>
        <span className='column_month'>Jun.</span>
        <span className='column_month'>Jul.</span>
        <span className='column_month'>Aug.</span>
        <span className='column_month'>Sep.</span>
        <span className='column_month'>Oct.</span>
        <span className='column_month'>Nov.</span>
        <span className='column_month'>Dec.</span>
      </div>
    </div>
  </div>
)
