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
      })} ref={this.props.hero}>
        <div className="hero__body">
          <p className="hero__text">Hey sexy, did anything positively surprised you today?</p>
          <div className="hero__buttons">
            <button className="hero__button" onClick={this.props.handleAnswer}>Yes</button>
            <button className="hero__button" onClick={this.props.handleAnswer}>No</button>
          </div>
        </div>
      </div>
    )
  }
}