import { createContext, useState } from "react";
export const CounterContext = createContext(null)
export const CounterProvider = (props)=>{
    const [count, setCount] = useState(0)
    return(
        <CounterProvider value={{count, setCount, name:"Shagufta"}}>
            {props.children}
        </CounterProvider>
    )
} 