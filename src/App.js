import React, { Component } from 'react'
import firebase, { auth, provider } from './helpers/firebase'
import currentDay from './helpers/getToday'
import currentTime from './helpers/getTime'

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
      isHeroMode: false,
      isWarningMode: false,
      isModalOpen: false,
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.toggleModalWin = this.toggleModalWin.bind(this)
    this.onAnswer = this.onAnswer.bind(this)
    this.onHeroClose = this.onHeroClose.bind(this)

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleScroll (ev) {
    this.monthesRowRef.scrollLeft = this.calendarRef.scrollLeft = ev.currentTarget.scrollLeft
  }

  onAnswer (isGodday) {
    isGodday ? this.addGoodDay() : this.addBadDay()
  }

  onHeroClose () {
    this.setState({
      isHeroMode: false
    })
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        })
      })
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user

        this.setState({ user })

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
    firebase.database().ref('users/' + this.state.user.uid + '/gooddays/').push({
      day: currentDay.dd,
      month: currentDay.mm
    }, () => {
      // Show thx msg & close after timeout
      this.setState({
        isHeroActive: false
      })


    })
  }

  addBadDay() {
    firebase.database().ref('users/' + this.state.user.uid + '/baddays/').push({
      day: currentDay.dd,
      month: currentDay.mm
    }, () => {
      // Show thx msg & close after timeout
      this.setState({
        isHeroActive: false
      })
    })
  }

  getUserData() {
    firebase.database()
      .ref('users/')
      .child(this.state.user.uid)
      .on('value', snap => {
        this.setState({
          userDB: snap.val()
        })

        const baddays = snap.val().baddays
        const gooddays = snap.val().gooddays

        if (baddays || gooddays) {
          for (let days in baddays) {
            if((baddays[days].month === currentDay.mm) && (baddays[days].day === currentDay.dd))
              return

            this.setState({
              isHeroMode: (currentTime.hours >= 20),
              isWarningMode: (currentTime.hours < 20)
            })

            const m = document.querySelector('[data-month="' + baddays[days].month + '"]')
            const d = m.querySelector('[data-day="' + baddays[days].day + '"]')
            
            d.classList.add('is-bad-day')
          }

          for (let days in gooddays) {
            if((gooddays[days].month === currentDay.mm) && (gooddays[days].day === currentDay.dd))
              return

            const m = document.querySelector('[data-month="' + gooddays[days].month + '"]')
            const d = m.querySelector('[data-day="' + gooddays[days].day + '"]')
            
            d.classList.add('is-good-day')

            this.setState({
              isHeroMode: (currentTime.hours >= 20),
              isWarningMode: (currentTime.hours < 20)
            })
          }
        } else {
          this.setState({
            isHeroMode: (currentTime.hours >= 20),
            isWarningMode: (currentTime.hours < 20)
          })
        }
    })
  }

  setNewUser() {
    firebase.database()
      .ref('users/' + this.state.user.uid)
      .set({
        username: this.state.user.displayName,
        email: this.state.user.email
      })
  }

  componentWillMount () {
    const baseTitle = document.title
    document.title = `${baseTitle} · ${currentDay.dd} ${currentDay.month} ${currentDay.yy}`

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
        this.getUserData()

        firebase.database()
          .ref('users/')
          .child(this.state.user.uid)
      }
    })
  }

  toggleModalWin() {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }))
  }
  
  render() {
    const authRef = {
      user: this.state.user,
      login: this.login,
      logout: this.logout
    }

    const modalRef = {
      toggle: this.toggleModalWin,
      state: this.state.isModalOpen
    }

    return (
      <div>
        <Header handleScroll={this.handleScroll} modalRef={modalRef} monthesRowRef={el => this.monthesRowRef = el} />
        <Calendar calendarRef={el => this.calendarRef = el} handleScroll={this.handleScroll} />
        <Info modalRef={modalRef} authRef={authRef} />
        <Footer modalRef={modalRef} authRef={authRef} />
        { this.state.isHeroMode && <Hero handleAnswer={this.onAnswer} handleClose={this.onHeroClose} /> }
        { this.state.isWarningMode &&  <Alert /> }
      </div>
    )
  }
}
