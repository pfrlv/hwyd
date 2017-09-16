import React from 'react'
import classes from 'classnames'
import current from '../helpers/getToday'

function getDaysInMonth (month) {
  var date = new Date((new Date()).getFullYear(), month, 1)
  var days = 0

  while (date.getMonth() === month) {
     days = days + 1
     date.setDate(date.getDate() + 1)
  }

  return days
}

export default ({ month }) => {
  const days = []

  for (let d = 1; d <= getDaysInMonth(month); d++) {
    const istoday = (month === current.mm && d === current.dd)

    days.push(
      <span className={classes({
        'column-cell': true,
        'column-cell_day': true,
        'is-today': istoday
      })} data-day={d} key={d}>{d}</span>
    )
  }

  return (
    <div className='column' data-month={month}>
      {days}
    </div>
  )
}
