import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'
import BASE_URL from './Routes/urls'


axios.defaults.withCredentials=true
axios.defaults.baseURL=BASE_URL

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
