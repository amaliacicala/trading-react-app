import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Homepage } from "./Components/Homepage/Homepage";
import NotFound from "./Components/NotFound/NotFound";
import Protected from "./services/Protected";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
import {Authentication} from "./services/Authentication";
import React from "react";

function App() {
  return (
    <>
      <Authentication>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="*" element={<NotFound />} />
          <Route element={<Protected/>}>
            <Route path="/dashboard/:id" element={<Dashboard />} />
          </Route>
        </Routes>
        <Footer />
        <ContactUs />
      </Authentication>
    </>
  );
}

export default App;
