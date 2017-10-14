import React, { Component } from 'react'
import firebase, { auth, provider } from './helpers/firebase'
import page from 'page'
import currentDay from './helpers/getToday'
import currentTime from './helpers/getTime'

import Header from './components/Header'
import Calendar from './components/Calendar'
import Footer from './components/Footer'

import Alert from './components/Alert'
import Hero from './components/Hero'
import HeroNot from './components/HeroNot'
import About from './components/Info'
import Loader from './components/Loader'
import Privacy from './components/Privacy'

const baseHour = 20
const $root = document.getElementById('root')

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      userDB: null,
      isHeroMode: false,
      isHeroNotMode: false,
      isWarningMode: false,
      isLoading: false,
      page: null,
      route: null
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.onAnswer = this.onAnswer.bind(this)
    this.onHeroClose = this.onHeroClose.bind(this)

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)

    this.setUserData = this.setUserData.bind(this)
    this.removeUserData = this.removeUserData.bind(this)

    this.initRouting = this.initRouting.bind(this)
  }

  handleScroll (ev) {
    this.monthesRowRef.scrollLeft = this.calendarRef.scrollLeft = ev.currentTarget.scrollLeft
  }

  initRouting() {
    page('/', (ctx, next) => {
      this.setState({
        page: null,
        route: null
      })
      next()
    })

    page('/privacy', (ctx, next) => {
      this.setState({
        page: <Privacy isInit={ctx.init} login={this.login} logout={this.logout} user={this.state.user} />,
        route: ctx.path
      })
    })

    page('/about', (ctx, next) => {
      this.setState({
        page: <About isInit={ctx.init} login={this.login} logout={this.logout} user={this.state.user} />,
        route: ctx.path
      })
    })

    page.exit('/:page', (ctx, next) => {
      $root.classList.add('is-exit')

      setTimeout(() => {
        $root.classList.remove('is-exit')
        next()
      }, 300)
    })

    page()
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
        page('/')
      })
  }

  login() {
    this.setState({ isLoading: true })

    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user

        page('/')

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
      .catch((e) => {
        this.setState({ isLoading: false })
      })
  }

  addGoodDay() {
    firebase.database().ref('users/' + this.state.user.uid + '/gooddays/').push({
      day: currentDay.dd,
      month: currentDay.mm
    }, () => {
      this.setState({ isHeroActive: false })
    })
  }

  addBadDay() {
    firebase.database().ref('users/' + this.state.user.uid + '/baddays/').push({
      day: currentDay.dd,
      month: currentDay.mm
    }, () => {
      this.setState({ isHeroActive: false })
    })
  }

  getUserData() {
    firebase.database()
      .ref('users/')
      .child(this.state.user.uid)
      .on('value', snap => {
        this.setState({
          userDB: snap.val()
        }, () => this.setUserData())
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

    if(!badDays && !godDays) {
      this.setState({
        isHeroMode: currentTime.hours > baseHour
      })
    } else {
      if(badDays) {
        for (let days in badDays) {
          if((badDays[days].month !== currentDay.mm) || (badDays[days].day !== currentDay.dd)) {
            this.setState({
              isHeroMode: currentTime.hours > baseHour
            })
          }

          const m = document.querySelector('[data-month="' + badDays[days].month + '"]')
          const d = m.querySelector('[data-day="' + badDays[days].day + '"]')

          d.classList.add('is-bad-day')
        }
      }

      if(godDays) {
        for (let days in godDays) {
          if((godDays[days].month !== currentDay.mm) || (godDays[days].day !== currentDay.dd)) {
            this.setState({
              isHeroMode: currentTime.hours > baseHour
            })
          }

          const m = document.querySelector('[data-month="' + godDays[days].month + '"]')
          const d = m.querySelector('[data-day="' + godDays[days].day + '"]')

          d.classList.add('is-good-day')
        }
      }
    }

    this.setState({ isLoading: false })
  }

  setNewUser() {
    firebase.database()
      .ref('users/' + this.state.user.uid)
      .set({
        username: this.state.user.displayName,
        email: this.state.user.email
      })

      this.setState({ isLoading: false })
  }

  componentWillMount () {
    const baseTitle = document.title
    document.title = `${baseTitle} · ${currentDay.dd} ${currentDay.month} ${currentDay.yy}`

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
          isWarningMode: currentTime.hours < baseHour
        })

        this.getUserData()

        firebase.database()
          .ref('users/')
          .child(this.state.user.uid)
      } else {
        this.setState({
          isHeroMode: currentTime.hours > baseHour,
          isWarningMode: currentTime.hours < baseHour
        })
      }
    })
  }

  componentDidMount() {
    this.initRouting()
  }

  render() {
    return (
      <div>
        <Header
          route={this.state.route}
          handleScroll={this.handleScroll}
          monthesRowRef={el => this.monthesRowRef = el} />

        <Calendar
          calendarRef={el => this.calendarRef = el}
          handleScroll={this.handleScroll} />

        <Footer
          route={this.state.route}
          user={this.state.user}
          login={this.login}
          logout={this.logout} />

        {this.state.isHeroMode
          && <Hero
              handleAnswer={this.onAnswer}
              handleClose={this.onHeroClose} />
        }

        {this.state.isHeroNotMode
          && <HeroNot login={this.login} />
        }

        {this.state.isWarningMode
          &&  <Alert />
        }

        {this.state.isLoading
          && <Loader />
        }

        { this.state.page }
      </div>
    )
  }
}
