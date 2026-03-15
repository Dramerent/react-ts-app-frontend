import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContextProvider } from './useContext/useContext.tsx'
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
)
