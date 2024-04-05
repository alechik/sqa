import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import emailjs from '@emailjs/browser';


emailjs.init('XnyTm9fLJd1grL1wx');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
