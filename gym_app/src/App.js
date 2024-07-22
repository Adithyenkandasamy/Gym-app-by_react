import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExersiceDetail from './pages/ExersiceDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
  <Box width="400px">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exersice/:id" />
    </Routes> 
  </Box>  
  )
}

export default App