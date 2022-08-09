import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import TodoContainer from './components/TodoContainer';
import Navbar from './components/Navbar';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<TodoContainer />}>
      {/* <TodoContainer /> */}
    </Route>
    <Route path="/about" element={<About />}>
      {/* <About /> */}
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
