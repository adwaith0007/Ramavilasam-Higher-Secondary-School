import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Facilities from "./Pages/Facilities";
import Admission from "./Pages/Admission";
import Administration from "./Pages/Administration";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes using <Route> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/administration" element={<Administration />} />


      </Routes>
    </Router>
  );
}

export default App;

