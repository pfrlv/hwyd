import React, { Component } from 'react'

import Header from './components/Header'
import Calendar from './components/Calendar'
import Footer from './components/Footer'
import Alert from './components/Alert'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Calendar />
        <Footer />
        <Alert />
      </div>
    )
  }
}
