import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ContextProvider } from './context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
)
