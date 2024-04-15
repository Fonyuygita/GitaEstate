import { DarkModeContext, DarkModeContextProvider } from './context/DarkModeContext.jsx'

import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.scss"
// import {DarkModeContextProvider} from './'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <DarkModeContextProvider>
  <App />
  </DarkModeContextProvider>

  </React.StrictMode>,
)
