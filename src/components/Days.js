import React, { Component } from 'react'
import classes from 'classnames'
import current from './../helpers/getToday'

function getDaysInMonth (month) {
  var date = new Date((new Date()).getFullYear(), month, 1)
  var days = 0

  while (date.getMonth() === month) {
     days = days + 1
     date.setDate(date.getDate() + 1)
  }

  return days
}

export default class extends Component {
  render() {
    const days = []
    const { month } = this.props

    for (let d = 1; d <= getDaysInMonth(month); d++) {
      const isToday = (month === current.mm && d === current.dd)

      days.push(
        <span className={classes(
          'column-cell',
          'column-cell_day',
          {'is-today': isToday}
        )} 
        data-day={d}
        ref={isToday && this.props.todayRef}
        key={d}>
          {d}
          <span className="mark"></span>
        </span>
      )
    }

    return (
      <div className='column' data-month={month}>
        {days}
      </div>
    )
  }
}
