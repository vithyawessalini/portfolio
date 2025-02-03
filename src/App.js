import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomCursor from './Customcursor';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import './App.css';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio/skills" element={<Skills />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
        <CustomCursor />
      </div>
    </Router>
  );
}

export default App;
