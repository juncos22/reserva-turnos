import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TurnoProvider from './context/turnos/TurnoProvider.tsx'
import React from 'react'
import { UsuarioProvider } from './context/usuarios/UsuarioProvider.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Auth from './Auth.tsx'
import Register from './Register.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/auth', element: <Auth /> },
  { path: '/register', element: <Register /> }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UsuarioProvider>
      <TurnoProvider>
        <RouterProvider router={router} />
      </TurnoProvider>
    </UsuarioProvider>
  </React.StrictMode>
)
