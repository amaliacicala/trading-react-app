
import { Routes, Route } from "react-router-dom";

import {Header} from './components/Header/Header'
import { Dashboard } from "./Dashboard";
import Footer from './components/Footer/Footer'
import ContactUs from './components/ContactUs/ContactUs'
import {Homepage} from './components/Homepage/Homepage';



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

