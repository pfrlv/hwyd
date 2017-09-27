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
    }, 400)
  }

  render() {
    return (
      <div className={classes({
        'hero': true,
        'hero_is-active': this.state.isActive
      })}>
      <div className="hero__body">
        <p className="hero__text">First,</p>
        <div className="hero__buttons">
          <button type='log' onClick={this.props.login} className="hero__log">Enter with Facebook</button>
        </div>
      </div>
    </div>
  )
  }
}
