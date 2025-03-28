import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Appointments from './pages/Appointments';
import Grooming from './pages/Grooming';
import Events from './pages/Events';
import Adoption from './pages/Adoption';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <>
    <p></p>
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/grooming" element={<Grooming />} />
            <Route path="/events" element={<Events />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}


// function App() {
//   return(
//     <p>madarchod</p>
    
//   );
// }
export default App