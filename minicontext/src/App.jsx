import React from 'react'
import UserContextPovider from './context/USerContextPovider'

import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'


function App() {
  return (
    <UserContextPovider>
      <h1>React with chai ad share and please comment </h1>      
      <Login />
      <Profile/>

    </UserContextPovider>
  )
}

export default App
