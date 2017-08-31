import React, { Component } from 'react'

export default class extends Component {
  render() {
    const days = []
    for (let d = 1; d <= 31; d++) {
      days.push(
        <span className='column-cell column-cell_day' data-day={d} key={d}>{d}</span>
      )
    }

    return (
      <div className='column' data-month={this.props.month}>
        {days}
      </div>
    )
  }
}
