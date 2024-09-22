import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LoginForm from './Login/LoginForm.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginForm/>
  </StrictMode>,
)
