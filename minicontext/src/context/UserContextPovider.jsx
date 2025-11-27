import React, { Children } from 'react'
import UserContext from './UserContext'

const UserContextPovider = ({children}) => { 
    const [User,setUser] = React.useState(null)

        return(
            <UserContext.Provider
            value={{User,setUser}}
            >
            {children }
            </UserContext.Provider>
        )
}



export default UserContextPovider
