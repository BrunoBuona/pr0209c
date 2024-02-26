// React Basics
import React from 'react'
import ReactDOM from 'react-dom/client'

// Global Styles
import 'victormono'
import './global.css'

// Router
import { HashRouter as HR } from 'react-router-dom'
import Rutas from './Rutas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HR>
    <React.StrictMode>
      <Rutas />
    </React.StrictMode>
  </HR>
)
