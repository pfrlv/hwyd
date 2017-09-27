import React, { Component } from 'react'
import classes from 'classnames'

import Random from './../helpers/random'

const messages = [
  '¿No hablas Español? Then you can’t have Spanish siesta. Come around after 8pm.',
  'It’s too early, dude! Go party or something!',
  'HWYD. is not morning sex, it’s too early for it!',
  'Shhh... Hear that? It’s others living their day instead of marking it on HWYD.',
  'It’s early for HWYD. not wine.',
  'If you think couple of hours can’t change everything, just wait.',
  'Aren’t you supposed to work? HWYD. is not for procrastinators!',
  'Roses are red, grass is green. If you’re here for HWYD., later you must be.',
  'Have you seen BBC news at 8pm? Come back after.',
]

export default class extends Component {
  constructor(props) {
    super(props)   

    this.state = {
      message: messages[Random(0, (messages.length - 1))],
      isHidden: true
    }

    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isHidden: false
      })
    }, 40)
  }

  toggle() {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden
    }))
  }

  render() {
    return (
      <div className={classes('alert', {'alert__hidden': this.state.isHidden})}>
        <button className="alert__hide" title="Hide Message" onClick={this.toggle} />
        <p className="alert__msg">{this.state.message}</p>
      </div>
    )
  }
}