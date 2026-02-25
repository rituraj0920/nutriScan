import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Tesseract from 'tesseract.js';
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from './frontpage/header';
import EatHealthyLanding from './frontpage/front-page';
import Footer from './frontpage/footer';
import IngredientScanner from './frontpage/ingredientScan';
import { ThemeProvider } from './frontpage/nightmode';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import HOME from './pages/home';
import Dashboard from './pages/dashboard';





function App() {
  return (
   <>
    <ThemeProvider>
      

      <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HOME/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Catch-all: Redirect unknown routes to Login */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  
    <IngredientScanner />
    <Footer />


    </ThemeProvider>
    
    
    </>
    
    
  );
}




export default App;
