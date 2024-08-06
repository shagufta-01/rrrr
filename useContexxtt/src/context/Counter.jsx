import { createContext } from "react";
export const CounterContext = createContext(null)
export const CounterProvider =(props)=>{
return (
    <CounterProvider>
        {props.children}
    </CounterProvider>
)
}
