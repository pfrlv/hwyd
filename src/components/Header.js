import React from 'react'

import logo from './../assets/Logo.svg'
import contains from './../helpers/contains'

export default ({ route, handleScroll, monthesRowRef }) => (
  <div className='header-wrap'>
    <div className="header-container_mobile">
      <div className='container_fixed'>
        <a href="/" className='header-logo-wrap'>
          <img className='header-logo-img' alt='hwyd.' src={logo} />
        </a>
        <div className="header-info">
          {contains(route, 'about')
            ? <span className="header-info-button header-info-button_current">About</span>
            : <a href="/about" className="header-info-button">About</a>
          }
        </div>
      </div>
      <div className='row_body'>
        <div className='row_scroll'
          id="month-list"
          ref={monthesRowRef}
          onTouchMove={handleScroll}
          onWheel={handleScroll}>
          <div className='row row_mobile'>
            <span className='column-cell column-cell_month'>Jan.</span>
            <span className='column-cell column-cell_month'>Feb.</span>
            <span className='column-cell column-cell_month'>Mar.</span>
            <span className='column-cell column-cell_month'>Apr.</span>
            <span className='column-cell column-cell_month'>May</span>
            <span className='column-cell column-cell_month'>Jun.</span>
            <span className='column-cell column-cell_month'>Jul.</span>
            <span className='column-cell column-cell_month'>Aug.</span>
            <span className='column-cell column-cell_month'>Sep.</span>
            <span className='column-cell column-cell_month'>Oct.</span>
            <span className='column-cell column-cell_month'>Nov.</span>
            <span className='column-cell column-cell_month'>Dec.</span>
          </div>
        </div>
      </div>
    </div>
    <div className='header-container_desktop'>
      <div className='row'>
        <span className='column-cell column-cell_month'>Jan.</span>
        <span className='column-cell column-cell_month'>Feb.</span>
        <span className='column-cell column-cell_month'>Mar.</span>
        <span className='column-cell column-cell_month'>Apr.</span>
        <span className='column-cell column-cell_month'>May</span>
        <span className='column-cell column-cell_month'>Jun.</span>
        <span className='column-cell column-cell_month'>Jul.</span>
        <span className='column-cell column-cell_month'>Aug.</span>
        <span className='column-cell column-cell_month'>Sep.</span>
        <span className='column-cell column-cell_month'>Oct.</span>
        <span className='column-cell column-cell_month'>Nov.</span>
        <span className='column-cell column-cell_month'>Dec.</span>
      </div>
    </div>
  </div>
)
