import React, { createContext, useContext, useState, useEffect } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

function Authprovider({children}) {

    const [userdata, setUserData] = useState(null)

    useEffect(()=>{
        const {employeeData, adminData} = getLocalStorage()
    setUserData({employeeData,adminData})
    },[])

  return (
    <div>
        <AuthContext.Provider value={userdata}>
        {children}
        </AuthContext.Provider>
        </div>
  )
}

export default Authprovider