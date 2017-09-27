import React, { Component } from 'react'
import firebase, { auth, provider } from './helpers/firebase'
import currentDay from './helpers/getToday'
import currentTime from './helpers/getTime'

import Header from './components/Header'
import Calendar from './components/Calendar'
import Footer from './components/Footer'

import Alert from './components/Alert'
import Hero from './components/Hero'
import HeroNot from './components/HeroNot'
import Info from './components/Info'

const baseHour = 10

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      userDB: null,
      isHeroMode: false,
      isHeroNotMode: false,
      isWarningMode: false,
      isModalOpen: false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.toggleModalWin = this.toggleModalWin.bind(this)
    this.onAnswer = this.onAnswer.bind(this)
    this.onHeroClose = this.onHeroClose.bind(this)

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)

    this.setUserData = this.setUserData.bind(this)
    this.removeUserData = this.removeUserData.bind(this)
  }

  handleScroll (ev) {
    this.monthesRowRef.scrollLeft = this.calendarRef.scrollLeft = ev.currentTarget.scrollLeft
  }

  onAnswer (isGodday) {
    if(this.state.user == null) {
      this.setState({
        isHeroNotMode: true,
        isHeroMode: false
      })
      return
    }
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
        this.setState({user: null})
        this.removeUserData()
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
        this.setState({userDB: snap.val()}, () => this.setUserData())
      })
  }

  removeUserData() {
    const days = document.getElementsByClassName('column-cell_day')

    for (let i = days.length - 1; i >= 0; i--) {
      days[i].classList.remove('is-bad-day', 'is-good-day')
    }
  }

  setUserData() {
    const badDays = this.state.userDB.baddays
    const godDays = this.state.userDB.gooddays

    if(badDays) {
      for (let days in badDays) {
        if((badDays[days].month === currentDay.mm) && (badDays[days].day === currentDay.dd)) {
          this.setState({
            isHeroMode: false
          })
        }

        const m = document.querySelector('[data-month="' + badDays[days].month + '"]')
        const d = m.querySelector('[data-day="' + badDays[days].day + '"]')

        d.classList.add('is-bad-day')
      }
    }

    if(godDays) {
      for (let days in godDays) {
        if((godDays[days].month === currentDay.mm) && (godDays[days].day === currentDay.dd)) {
          this.setState({
            isHeroMode: false
          })
        }

        const m = document.querySelector('[data-month="' + godDays[days].month + '"]')
        const d = m.querySelector('[data-day="' + godDays[days].day + '"]')

        d.classList.add('is-good-day')
      }
    }
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
        this.setState({
          user,
          isHeroNotMode: false,
          isHeroMode: currentTime.hours >= baseHour
        })
        this.getUserData()

        firebase.database()
          .ref('users/')
          .child(this.state.user.uid)
      } else {
        this.setState({
          isHeroMode: currentTime.hours >= baseHour,
          isWarningMode: currentTime.hours < baseHour
        })
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

        <Footer modalRef={modalRef} authRef={authRef} />

        { this.state.isHeroMode && <Hero handleAnswer={this.onAnswer} handleClose={this.onHeroClose} /> }
        { this.state.isHeroNotMode && <HeroNot login={this.login} /> }
        { this.state.isWarningMode &&  <Alert /> }

        <Info modalRef={modalRef} authRef={authRef} />
      </div>
    )
  }
}
