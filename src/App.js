
import { Routes, Route } from "react-router-dom";

import {Header} from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/ContactUs/ContactUs'
import {Homepage} from './Components/Homepage/Homepage';
import {Dashboard} from './Components/Dashboard/Dashboard'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage/>} >
        </Route>
        <Route path="/dashboard" element={<Dashboard />} >
        </Route>
      </Routes>
      <Footer />
      <ContactUs />
    </>
  );
}

export default App;

