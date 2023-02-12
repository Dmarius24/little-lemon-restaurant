import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Menu from './Pages/Menu';
import Reservations from './Pages/Reservations';
import Order from './Pages/Order';
import Login from './Pages/Login';
import Home from './Pages/Home';
const Main = () => {
  return ( 
    <main>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Main" element={<Main />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Menu" element={<Menu />}></Route>
            <Route path="/Reservations" element={<Reservations />}></Route>
            <Route path="/Order" element={<Order />}></Route>
            <Route path="/Login" element={<Login />}></Route>
        </Routes>
    </main>
  )
}

export default Main
