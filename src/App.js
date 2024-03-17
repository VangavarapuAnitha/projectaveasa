import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Course from "./components/pages/Course";
import Testimonilas from "./components/pages/Testimonilas";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Enroll from "./components/pages/Enroll";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Testimonilas" element={<Testimonilas />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Enroll" element={<Enroll />} />
      </Routes>
    </div>
  );
}

export default App;
