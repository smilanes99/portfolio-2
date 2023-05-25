import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe/AboutMe";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/" element={<HomePage />} />
        </Routes>
        <NavBar /> 
      </div>
    </Router>
  );
}

export default App;