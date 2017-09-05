import React, { Component } from 'react'
import firebase, { auth, provider } from './helpers/firebase.js'

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

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleScroll (ev) {
    this.monthesRowRef.scrollLeft = ev.currentTarget.scrollLeft
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      })
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      })
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    })
  }

  /* это кнопочка для тестирования
  { this.state.user ?
    <button onClick={this.logout} style={{ position: 'absolute', display: 'block', padding: '0 10px', fontSize: '30px', color: '#fff', zIndex: '100' }} >Logout</button> :
    <button onClick={this.login} style={{ position: 'absolute', display: 'block', padding: '0 10px', fontSize: '30px', color: '#fff', zIndex: '100' }}>Log in</button> }
  */

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
