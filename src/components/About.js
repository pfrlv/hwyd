import React, { Component } from 'react'

import Logo from './../assets/Logo.svg'
import Close from './../assets/Close.svg'

export default class extends Component {
  constructor(props) {
    super(props)   
  }

  render() {
    return (
      <section className="about">
        <div className="about__body">
          <img className="about__logo" src={Logo} alt="hwyd." />
          <p className="about__text">
            Ultimately, CDNJS' popularity and core structure led to its biggest pain points. CDNJS' array of libraries is managed via git. Any developer can commit their library's files to the CDNJS repo to have them hosted. While git provided a solid mechanism for tracking changes across its libraries, the repo became unwieldy when containing thousands of projects. Currently the repo is FIVE GIGS. Due to the vast amount of files that have been tracked over the years, the repo is vulnerable to bizarre git errors, like this case sensitive bug across operating systems. Personally, I am unable to actually work on the repo because of these issues of scale.
          </p>
        </div>
        <button className="about__close">
          <img className="about__close-icon" src={Close} />
        </button>
      </section>
    )
  }
}