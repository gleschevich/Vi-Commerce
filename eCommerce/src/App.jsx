import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
    <Router>
      <NavBar/>
    </Router>
    </div>
  )
}

export default App
