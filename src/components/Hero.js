import React, { Component } from 'react'
import classes from 'classnames'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }

    this.onAnswer = this.onAnswer.bind(this)
  }

  onAnswer (ev) {
    this.setState({isActive: false})

    this.props.handleAnswer(JSON.parse(ev.target.dataset.type))
    
    setTimeout(() => {
      this.props.handleClose()
    }, 400)
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
            <button className="hero__button" data-type={true} onClick={this.onAnswer}>Yes</button>
            <button className="hero__button" data-type={false} onClick={this.onAnswer}>No</button>
          </div>
        </div>
      </div>
    )
  }
}