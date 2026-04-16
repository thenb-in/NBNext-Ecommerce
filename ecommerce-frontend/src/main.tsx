/**
 * Application entry point.
 *
 * Mounts the root React component into the DOM element with id "root".
 * Wraps the application in React.StrictMode for development warnings.
 *
 * @module main
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
