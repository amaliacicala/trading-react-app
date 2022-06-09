
import { Routes, Route } from "react-router-dom";
import {Header} from './Header'
import { Dashboard } from "./Dashboard";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Content from "./Features";
import { Pricing } from "./Pricing";
import { Hero } from "./Hero";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content/>} >
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

