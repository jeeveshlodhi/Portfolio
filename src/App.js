import './App.css';
import Home from './pages/Home/Home';
import Project from './pages/Projects/Project';
import React from 'react';
import Resume from './pages/Resume/Resume'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<Home/>} exact />
            <Route path='/about' element={<About/>} exact />
            <Route path='/project' element={<Project/>} exact />
            <Route path='/resume' element={<Resume/>} exact />
            <Route path='/contact' element={<Contact/>} exact />
        </Routes>
    </div>
  );
}

export default App;
