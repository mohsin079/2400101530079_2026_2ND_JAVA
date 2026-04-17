import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Arrow from './Arrowfun/Arrow.jsx'
import Toggle from './Toggle/Toggle.jsx'
import CharacterCount from './charactercount/charactecount.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Toggle />
    <CharacterCount />
  </StrictMode>,
)
