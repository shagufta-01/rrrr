import { useContext } from 'react'
import './App.css'
import Counter from './Components/Counter'
import { CounterContext } from './UseeContext/Context'
function App() {
const CounterState = useContext(CounterContext)
console.log(CounterState)

  return (
   <>
    UseContext:
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter />
   </>
  )
}

export default App
