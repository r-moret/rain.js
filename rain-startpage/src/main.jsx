import React from 'react'
import ReactDOM from 'react-dom/client'
import { RainCanvas } from './components/RainCanvas/RainCanvas.jsx'
import { LinksPanel } from './components/LinksPanel/LinksPanel.jsx'
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RainCanvas />
    <LinksPanel />
  </React.StrictMode>
)
