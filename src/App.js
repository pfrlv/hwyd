import React, { Component } from 'react'

import Header from './components/Header'
import Calendar from './components/Calendar'
import Footer from './components/Footer'
import Alert from './components/Alert'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      leftScrollPosition: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll (ev) {
    this.monthesRowRef.scrollLeft = ev.currentTarget.scrollLeft
  }

  render() {
    return (
      <div>
        <Header monthesRowRef={el => this.monthesRowRef = el} />
        <Calendar handleScroll={this.handleScroll} />
        <Footer />
        <Alert />
      </div>
    )
  }
}
