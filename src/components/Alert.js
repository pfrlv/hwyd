import React, { Component } from 'react'
import classes from 'classnames'

import Random from './../helpers/random'

const messages = [
  '¿No hablas Español? Then you can’t have Spanish siesta. Come around after 8pm',
  'Come on now, you are not 80 to go to bed this early!',
  'Horray! Another new day. Let’s hope it won’t rain'
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