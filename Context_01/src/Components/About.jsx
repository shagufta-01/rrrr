import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

function About(props) {
    const user=useContext(UserContext)
    const {fname,lname, email,Course} =user
  return (
    <div>
      <div>{fname} {lname} {email} {Course}</div>
    </div>
  )
}

export default About
