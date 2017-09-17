import React, { Component } from 'react'
import Days from './Days'

export default class extends Component {
  componentDidMount() {
    this.todayRef.scrollIntoView(true)
    const aTop = this.todayRef.getBoundingClientRect().height

    /* ???????????????????????????????????? */
    document.querySelector('.clndr-container').scrollBy(window.innerWidth/2, (aTop-window.innerHeight)/2)
  }

  render() {
    const months = []

    for (let m = 0; m < 12; m++) {
      months.push(<Days todayRef={el => this.todayRef = el} month={m} key={m} />)
    }

    return (
      <div className='clndr-wrap'>
        <div className='clndr-container' ref={this.props.calendarRef} onTouchMove={this.props.handleScroll} onWheel={this.props.handleScroll}>
          <div className='clndr-track'>
            {months}
          </div>
        </div>
      </div>
    )
  }
}
