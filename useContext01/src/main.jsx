import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterContext } from './UseeContext/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CounterContext.Provider>
  <App />
  </CounterContext.Provider>
  </React.StrictMode>,
)
