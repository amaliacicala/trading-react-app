import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

export function useUserContext() {
  return useContext(UserContext)
}

export function Authentication({children}) {
    const [log, setLog] = useState(false)
    const [user, setUser] = useState(null);
      
    const navigate = useNavigate()

    function handleLogout() {
      setLog(false)
      navigate('/')
    }

    return (
      <UserContext.Provider value={{user, setUser, log, setLog, handleLogout}}>
        {children}
      </UserContext.Provider>
    )
}
