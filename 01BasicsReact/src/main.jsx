import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Sample from "./sample.jsx"

createRoot(document.getElementById('root')).render(
 
   <>
    <Sample/>
    <App/>
   </>
    
)
