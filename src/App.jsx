import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Project from "./components/Project"
import Contact from "./components/Contact"


const App = () => {
  return (
    <div>
      <Navbar/>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
</div>
  );
};

export default App;
