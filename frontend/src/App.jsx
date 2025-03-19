import React from 'react'
import Login from './Pages/Login'
import './App.css'
import Signup from './Pages/Signup'
import Home from './Pages/Home/Home'
const App = () => {
  return (
    <div 
      className="p-4 h-screen flex items-center justify-center"
    >
      <Home/>
     {/* <Login/> */}
     {/* <Signup/> */}
    </div>
  )
}

export default App
