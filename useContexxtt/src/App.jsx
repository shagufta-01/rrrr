import { useState } from 'react'
import Button from './Components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1>Counter: 0</h1>
  <Button />
  <Button />
  <Button />
  <Button />
   </>
  )
}

export default App
