import './App.css';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home.js';
import About from './pages/about.js';
import Portfolio from './pages/portfolio.js';
import Contact from './pages/contact.js';

function App() {
  return (
    <Router>
      <div className="App font-ssans3">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
