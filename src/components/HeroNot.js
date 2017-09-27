import React, { Component } from 'react'
import classes from 'classnames'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isActive: true
      })
    }, 10)
  }

  render() {
    return (
      <div className={classes({
        'hero': true,
        'hero_is-active': this.state.isActive
      })}>
      <div className="hero__body">
        <p className="hero__text">Oops! It’s your personal<br/>happy calendar, log in first.</p>
        <div className="hero__buttons">
          <button onClick={this.props.login} className="hero__button">Sign in with Facebook</button>
        </div>
      </div>
    </div>
  )
  }
}
