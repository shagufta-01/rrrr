import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

function NavBar(props) {
const user = useContext(UserContext)
const {fname,lname, email,Course} =user
  return (
    <div>
      <p>Navigation</p>
      <h2>{fname} {lname}</h2>
     
      <p>{email}</p>
      <p>{Course}</p>
    </div>
  )
}

export default NavBar
