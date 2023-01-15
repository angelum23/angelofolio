import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
  
export default function App() {
    return (
        <Router>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
            </Routes>
        </Router>
    );
};