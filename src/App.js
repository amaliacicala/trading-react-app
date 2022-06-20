
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
  function handleLogin(data){
    //setUser(data)

    const database = Object.keys(localStorage)
    if (database.indexOf(data) >= 0) {
      setLog(true)
    }
  
    setUser(Object.values(localStorage)[database.indexOf(data)])
  }

  return (
    <>
      <Header handleLogin={handleLogin}/>
      <Routes>
        <Route path="/" element={<Homepage/>} >
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

