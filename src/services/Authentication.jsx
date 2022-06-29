import { useState } from "react";

function Authentication() {
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
  
    function handleLogout() {
      setLog(false)
      window.location.pathname = '/'
    }
    return {
        log : log,
        user : user,
        handleLogin : handleLogin,
        handleLogout : handleLogout

    }
}

export default Authentication