import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoContainer from './components/TodoContainer';
import Navbar from './components/Navbar';
import About from './pages/about';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
