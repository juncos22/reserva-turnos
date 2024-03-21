import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TurnoProvider from './context/turnos/TurnoProvider.tsx'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TurnoProvider>
      <App />
    </TurnoProvider>
  </React.StrictMode>
)
