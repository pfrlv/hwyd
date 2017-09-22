import React from 'react'
import classes from 'classnames'

import logo from './../assets/Logo.svg'

export default ({ handleScroll, modalRef, monthesRowRef }) => (
  <div className='header-wrap'>
    <div className={classes({
        'header-container_mobile': true,
        'is_modal_open': modalRef.state
      })}>
      <div className='container_fixed'>
        <div className='header-logo-wrap'>
          <img className='header-logo-img' alt='hwyd.' src={logo} />
        </div>
        <div className="header-info">

          { modalRef.state 
            ? <button className="header-info-button" onClick={modalRef.toggle}>Close</button>
            : <button className="header-info-button" onClick={modalRef.toggle}>About</button>
          }

        </div>
      </div>
      <div className='row_body'>
        <div className='row_scroll'
          ref={monthesRowRef}
          onTouchMove={handleScroll}
          onWheel={handleScroll}
          onScroll={handleScroll}>
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
