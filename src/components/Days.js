import React from 'react'

function getDaysInMonth(month) {
  var date = new Date((new Date()).getFullYear(), month, 1)
  var days = []

  while (date.getMonth() === month) {
     days.push(new Date(date))
     date.setDate(date.getDate() + 1)
  }
  return days.length
 }

export default ({ month }) => {
  const days = []
  for (let d = 1; d <= getDaysInMonth(month); d++) {
    days.push(
      <span className='column-cell column-cell_day' data-day={d} key={d}>{d}</span>
    )
  }


  return (
    <div className='column' data-month={month}>
      {days}
    </div>
  )
}
