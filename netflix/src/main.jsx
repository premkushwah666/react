import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import {Footer} from './componets/Cart.jsx'
import Cart from './componets/Cart.jsx'
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <Footer/> */}
  </StrictMode>
  ,
)
