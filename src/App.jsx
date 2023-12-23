import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedLayout from './LAYOUTS/ProtectedLayout';
import { LandingPage } from './PAGES/LandingPage';
import { Box } from '@mui/material';
import Courses from './PAGES/COURSES/Courses';

function App() {

  return (
    <Box sx={{width:'100%'}}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<Courses/>}/>
        </Routes>
      </Router>
    </Box>
  )
}

export default App
