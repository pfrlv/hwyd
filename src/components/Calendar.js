import React, { Component } from 'react'
import Days from './Days'

export default class extends Component {
  componentDidMount() {
    const today = new Date()
    const dd = today.getDate()
    const mm = today.getMonth()
    const mmDOM = document.querySelector(`[data-month='${mm}']`)
    const ddDOM = mmDOM.querySelector(`[data-day='${dd}']`)

    const ystr = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date())
    const ystrDD = ystr.getDate()
    const ystrMM = ystr.getMonth()
    const ystrmmDOM = document.querySelector(`[data-month='${ystrMM}']`)
    const ystrddDOM = ystrmmDOM.querySelector(`[data-day='${ystrDD}']`)

    ystrddDOM.classList.add('is-goodday')
    ddDOM.classList.add('is-today')

    const clndrBox = document.querySelector('.clndr-container_desktop')
    const monthsBox = document.querySelector('.row_scroll')
    let scrollSide = 0

    clndrBox.scrollTop = ddDOM.offsetTop
    monthsBox.scrollLeft = ddDOM.getBoundingClientRect().left
    clndrBox.scrollLeft = ddDOM.getBoundingClientRect().left

    window.addEventListener('wheel', (ev) => {
      scrollSide = clndrBox.scrollLeft
      monthsBox.scrollLeft = scrollSide
    })
  }

  render() {
    const months = []

    for (let m = 0; m < 12; m++) {
      months.push(<Days month={m} key={m} />)
    }

    return (
      <div className='clndr-wrap'>
        <div className='clndr-container_desktop'>
          <div className='clndr-track'>
            {months}
          </div>
        </div>
      </div>
    )
  }
}
