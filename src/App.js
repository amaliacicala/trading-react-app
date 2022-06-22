
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Header } from './Components/Header/Header'
import { Homepage } from './Components/Homepage/Homepage';
import NotFound from './Components/NotFound/NotFound'
import Protected from "./services/Protected";
import { Dashboard } from './Components/Dashboard/Dashboard'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/ContactUs/ContactUs'


function App() {
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

  return (
    <>
      <Header handleLogin={handleLogin} handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Homepage handleLogin={handleLogin}/>} />
        <Route path="*" element={<NotFound />} />
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

