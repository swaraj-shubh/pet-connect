import { useState } from 'react'


import './App.css'
import React from 'react'
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

    const [cart, setCart] = useState([]);
    //const [profileCompleted, setProfileCompleted] = useState(false);
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@email.com");
    const [pets, setPets] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [orders, setOrders] = useState([]);
    const calling = `cart={cart} setCart={setCart} name={name} setName={setName} email={email} setEmail={setEmail} pets={pets} setPets={setPets} appointments={appointments} setAppointments={setAppointments} orders={orders} setOrders={setOrders}`
  return (
    <>
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container p-4 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/grooming" element={<Grooming />} />
            <Route path="/events" element={<Events />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/profile" element={<Profile cart={cart} setCart={setCart} name={name} setName={setName} email={email} setEmail={setEmail} pets={pets} setPets={setPets} appointments={appointments} setAppointments={setAppointments} orders={orders} setOrders={setOrders}  />} />
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