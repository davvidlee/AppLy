import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './dashboard/page.tsx'
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  </StrictMode>,
)
