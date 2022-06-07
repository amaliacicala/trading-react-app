import { Routes, Route } from "react-router-dom";
import {Header} from './Header'
import { Homepage } from "./Homepage";
import { Dashboard } from "./Dashboard";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} >
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