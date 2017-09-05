import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="hero">
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