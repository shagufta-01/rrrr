import { useState } from 'react'

import './App.css'
import Dashboard from './Components/Dashboard'
import { UserProvider } from './context/UserProvider'
import About from './Components/About'


function App() {
// const user={
//   fname:"shagufta",
//   lname:"fatima",
//   email:"shaguftafatima444@gmail.com",
//   Course:"B.teech(cse)"
// }

  return (
  <UserProvider>
<h1>App</h1>
<Dashboard />
{/* <About /> */}
  </UserProvider>
  )
}

export default App
