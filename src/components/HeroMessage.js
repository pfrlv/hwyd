import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)   
  }

  render() {
    return (
      <div className="hero-message">
        <div className="hero-message__body">
          <p className="hero-message__text">Hey sexy, did anything positively surprised you today?</p>
          <div className="hero-message__buttons"></div>
          <button className="hero-message__button">Yes</button>
          <button className="hero-message__button">No</button>
        </div>
      </div>
    )
  }
}