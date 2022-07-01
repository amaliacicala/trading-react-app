import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

export function useUserContext() {
  return useContext(UserContext)
}

export function Authentication({children}) {
    const [log, setLog] = useState(false)
    const [user, setUser] = useState(null);
  
    function handleLogin(dataInput, dataPassword, event){
  
      const database = Object.keys(localStorage)

      if (database.indexOf(dataInput) >= 0) {
        const retrievedPerson = JSON.parse(localStorage.getItem(dataInput));
        if (retrievedPerson.password === dataPassword) {
          const value = Object.values(localStorage)[database.indexOf(dataInput)]
          const retrivedValue = JSON.parse(value)
          setLog(true)
          setUser(retrivedValue.user.name)
        } else {
          alert('The password you entered is incorrect. Please try again.');
          event.preventDefault();
          return false
        } 
      } else {
        alert('The email you entered is incorrect. Please try again.')
      }   
    }
    
    const navigate = useNavigate()

    function handleLogout() {
      setLog(false)
      navigate('/')
    }

    return (
      <UserContext.Provider value={{user, setUser, log, setLog, handleLogin, handleLogout}}>
        {children}
      </UserContext.Provider>
    )
}
