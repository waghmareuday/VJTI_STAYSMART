import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/loginSignup/Login";
import Signup from "./components/loginSignup/Signup";
import LostnFound from "./components/LostnFound/LostFoundForm";
import MessSchedule from "./components/MessSchedule/messschedule";
import Complaint from "./components/Complaint/complaint";
import Event from "./components/Event/event";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/LostnFound" element={<LostnFound />}></Route>
          <Route path="/MessSchedule" element={<MessSchedule />}></Route>
          <Route path="/Complaint" element={<Complaint />}></Route>
          <Route path="/Event" element={<Event />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
