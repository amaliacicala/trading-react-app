
import { Routes, Route } from "react-router-dom";
import { Header } from './Components/Header/Header'
import { Homepage } from './Components/Homepage/Homepage';
import NotFound from './Components/NotFound/NotFound'
import Protected from "./services/Protected";
import { Dashboard } from './Components/Dashboard/Dashboard'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/ContactUs/ContactUs'
import Authentication from "./services/Authentication";


function App() {

const {log, user, handleLogin, handleLogout}= Authentication()
  return (
    <>
      <Header handleLogin={handleLogin} handleLogout={handleLogout} log={log}/>
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