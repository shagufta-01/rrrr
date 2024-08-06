import React from 'react'
import { UserContext } from '../context/UserProvider'
import { useContext } from 'react'
function Sidebar(props) {
    const user = useContext(UserContext)
    const {fname,Course} =user
  return (
    <div>
      <p>Sidebar</p>
      <h1>{fname}</h1>
      <h1>{Course}</h1>
    </div>
  )
}

export default Sidebar
