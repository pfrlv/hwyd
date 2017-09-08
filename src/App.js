import React, { Component } from 'react'
import firebase, { auth, provider } from './helpers/firebase.js'

import Header from './components/Header'
import Calendar from './components/Calendar'
import Footer from './components/Footer'
import Alert from './components/Alert'
import Hero from './components/Hero'
import Info from './components/Info'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      userDB: null,
      isTime: true,
      isModalOpen: false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.toggleModalWin = this.toggleModalWin.bind(this)

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

        firebase.database().ref('users/' + user.uid).once('value', snap => {
          const exists = (snap.val() !== null)
          if (exists) {
            this.getUserData()
          } else {
            this.setNewUser()
          }
        })
      })
  }

  addGoodDay() {
    var newDay = {
      0: {
        day: '31',
        month: '5'
      }
    }

    const updates = {}
    updates['/gooddays/'] = newDay
    firebase.database().ref('users/' + this.state.user.uid).update(updates)
  }

  addBadDay() {
    var newDay = {
      0: {
        day: '1',
        month: '9'
      }
    }

    const updates = {}
    updates['/baddays/'] = newDay
    firebase.database().ref('users/' + this.state.user.uid).update(updates)
  }

  getUserData() {
    firebase.database().ref('users/').child(this.state.user.uid).on('value', snap => {
      this.setState({
        userDB: snap.val()
      })
      console.log(this.state)
    })
  }

  setNewUser() {
    firebase.database().ref('users/' + this.state.user.uid).set({
      username: this.state.user.displayName,
      email: this.state.user.email
    })
  }

  componentDidMount() {
    const isTime = ((new Date()).getHours() >= 20)
    this.setState({ isTime: isTime })

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
        this.getUserData()
      }
    })
  }

  toggleModalWin() {
    const currentState = this.state.isModalOpen
    this.setState({
      isModalOpen: !currentState
    })
  }

  /*
  { this.state.isTime
    ? <Hero handleAnswer={this.handleAnswer} />
    : <Alert />
  }
  */

  render() {
    return (
      <div>
        <Header toggleModalWin={this.toggleModalWin} modalState={this.state.isModalOpen} monthesRowRef={el => this.monthesRowRef = el} />
        <Calendar handleScroll={this.handleScroll} />
        <Info modalState={this.state.isModalOpen} user={this.state.user} login={this.login} logout={this.logout} />
        <Footer toggleModalWin={this.toggleModalWin} user={this.state.user} login={this.login} logout={this.logout} />
      </div>
    )
  }
}
