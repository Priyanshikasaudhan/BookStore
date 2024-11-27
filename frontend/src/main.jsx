 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AothProvider from './context/AothProvider.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <AothProvider>
    <div className='dark:bg-slate-900 dark:text-white'>
    <App/>
    </div>
    </AothProvider>
   </BrowserRouter>
)
