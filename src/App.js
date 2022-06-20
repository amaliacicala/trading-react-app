
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import {Header} from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/ContactUs/ContactUs'
import {Homepage} from './Components/Homepage/Homepage';
import {Dashboard} from './Components/Dashboard/Dashboard'
import Protected from "./services/Protected";


function App() {
  const [user, setUser] = useState(null);
  function handleLogin(event){
    setUser(event.target.value)
  }
  return (
    <>
      <Header handleLogin={handleLogin}/>
      <Routes>
        <Route path="/" element={<Homepage/>} >
        </Route>
        <Route element={<Protected user={user}/>}>
        <Route path="/dashboard" element={<Dashboard />}/>
        </Route>
      </Routes>
      <Footer />
      <ContactUs />
    </>
  );
}

export default App;

