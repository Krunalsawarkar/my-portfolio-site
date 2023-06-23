import React from 'react'
import "./skills.css"
import { Element } from 'react-scroll'
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <Element className='skills section' id='skills'>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technial level</span>
        <div className="skills__container conatiner grid">
          <Frontend/>
          <Backend/>
        </div>
    </Element>
  )
}

export default Skills