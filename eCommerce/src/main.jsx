import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  './components/navBar/NavBar'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import './styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
