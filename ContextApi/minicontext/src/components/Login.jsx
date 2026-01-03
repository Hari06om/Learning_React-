import React, {useState,useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const [username,setUsername] =  useState('')
    const [password,setPassword] =  useState('')

    const handleSubmit = () => {
        
    }

  return (
    <div>
      <h2>Login </h2>
      <input type="text" placeholder='Username'  />
      <input type="password" placeholder='Password'  />
      <button> onli   </button>
 </div>
  )
}

export default Login
