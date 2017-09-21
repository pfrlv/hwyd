import React, { Component } from 'react'
import Days from './Days'

export default class extends Component {
  constructor (props) {
    super(props)

    this.updateScrollPosition = this.updateScrollPosition.bind(this)
  }

  componentDidMount () {
    window.addEventListener('load', this.updateScrollPosition)
  }

  updateScrollPosition () {
    const todayBounds = this.todayRef.getBoundingClientRect()
    const todayPosY = (todayBounds.top + todayBounds.height / 2) - window.innerHeight / 2
    const todayPosX = (todayBounds.left + todayBounds.width / 2) - window.innerWidth / 2

    document.querySelector('.clndr-container').scrollTo(todayPosX, todayPosY)
  }

  render () {
    const months = []

    for (let m = 0; m < 12; m++) {
      months.push(<Days todayRef={el => this.todayRef = el} month={m} key={m} />)
    }

    return (
      <div className='clndr-wrap'>
        <div className='clndr-container'
          ref={this.props.calendarRef}
          onScroll={this.props.handleScroll}
          onTouchMove={this.props.handleScroll}
          onWheel={this.props.handleScroll}>
          <div className='clndr-track'>
            {months}
          </div>
        </div>
      </div>
    )
  }
}
