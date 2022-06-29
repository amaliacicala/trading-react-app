import { useState } from "react";

function Authentication() {
    const [log, setLog] = useState(false)
    const [user, setUser] = useState(null);
  
    function handleLogin(dataInput, dataPassword, event){
      console.log('email: ' + dataInput + ', password: ' + dataPassword )
  
      const database = Object.keys(localStorage)
      const retrievedPerson = JSON.parse(localStorage.getItem(dataInput));
  
      const value = Object.values(localStorage)[database.indexOf(dataInput)]
      const retrivedValue = JSON.parse(value)
  
      if (database.indexOf(dataInput) >= 0) {
        if (retrievedPerson.password === dataPassword) {
          setLog(true)
        } else {
          alert('The password you entered is incorrect. Please try again.');
          event.preventDefault();
          return false
        } 
      }
  
      setUser(retrivedValue.user.name)
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