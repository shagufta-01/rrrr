import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../UseeContext/Context'
function Counter() {
    const CounterContx = useContext(CounterContext)
    
  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  )
}

export default Counter
