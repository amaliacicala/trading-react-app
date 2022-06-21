
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import {Header} from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/ContactUs/ContactUs'
import {Homepage} from './Components/Homepage/Homepage';
import {Dashboard} from './Components/Dashboard/Dashboard'
import Protected from "./services/Protected";


function App() {
  const [log, setLog] = useState(false)
  const [user, setUser] = useState(null);
  function handleLogin(dataInput, dataPassword){
    console.log('email: ' + dataInput + ', password: ' + dataPassword )

    const database = Object.keys(localStorage)
    const retrievedPerson = JSON.parse(localStorage.getItem(dataInput));
  
    if (database.indexOf(dataInput) >= 0) {
      if (retrievedPerson.password === dataPassword) {
        setLog(true)
      }  
      else {
        alert('Wrong Password!!!')
      } 
    }
  
    setUser(Object.values(localStorage)[database.indexOf(dataInput)])
  }

  function handleLogout() {
    setLog(false)
    window.location.pathname = '/'
  }

  return (
    <>
      <Header handleLogin={handleLogin} handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Homepage handleLogin={handleLogin}/>} >
        </Route>
        <Route element={<Protected log={log}/>}>
        <Route path="/dashboard" element={<Dashboard user={user} />}/>
        </Route>
      </Routes>
      <Footer />
      <ContactUs />
    </>
  );
}

export default App;

