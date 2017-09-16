import React, { Component } from 'react'
import Days from './Days'

export default class extends Component {
  render() {
    const months = []

    for (let m = 0; m < 12; m++) {
      months.push(<Days month={m} key={m} />)
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
