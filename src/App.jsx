import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Layout from "./components/Layout";


const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
