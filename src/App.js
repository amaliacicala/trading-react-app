
import { Routes, Route } from "react-router-dom";

import {Header} from './Components/Header/Header'
import { Dashboard } from "./Dashboard";
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/ContactUs/ContactUs'
import {Homepage} from './Components/Homepage/Homepage';



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

