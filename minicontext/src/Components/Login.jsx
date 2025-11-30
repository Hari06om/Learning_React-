import React, { useContext, useState }  from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const  [userName, setuserName]  = useState('')
    const  [Password, sePassword]  = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({userName,Password})
    } 


  return (
    <div>
       <h2>
        Login
       </h2> 
       <input type="text "
       value={userName}
       onChange={(e) => setuserName(e.target.value)}
       placeholder='userName'  />
       <input type="text "
       
       value={Password}
       onChange={(e) => setuserName(e.target.value)}
       placeholder='Password'  />
       <button   onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login
