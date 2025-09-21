import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import {AppS} from './AppS.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppS/>
    </StrictMode>,
)