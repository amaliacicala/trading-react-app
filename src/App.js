import { Routes, Route } from "react-router-dom";
import {Header} from './Header'
import { Homepage } from "./Homepage";
import { Dashboard } from "./Dashboard";

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
   </>
  );
}

export default App;
