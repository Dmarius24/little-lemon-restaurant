import React from 'react'
import {Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Menu from "./Pages/Menu"
import Reservations from "./Pages/Reservations"
import Order from "./Pages/Order"
import Login from "./Pages/Login"

const Nav = () => {
  return (
    <header>
      <img src="../resources/Logo.svg" alt="logo" style={{width: '100%', height: '100%'}}/>
      <nav>
        <ul>
          <li><Link to="/Pages/Home">Home</Link></li>
          <li><Link to="/Pages/About">About</Link></li>
          <li><Link to="/Pages/Menu">Menu</Link></li>
          <li><Link to="/Pages/Reservations">Reservations</Link></li>
          <li><Link to="/Pages/Order">Order Online</Link></li>
          <li><Link to="/Pages/Login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Pages/Home" element={<Home />}></Route>
        <Route path="/Pages/About" element={<About />}></Route>
        <Route path="/Pages/Menu" element={<Menu />}></Route>
        <Route path="/Pages/Reservations" element={<Reservations />}></Route>
        <Route path="/Pages/Order" element={<Order />}></Route>
        <Route path="/Pages/Login" element={<Login />}></Route>
      </Routes>
    </header>
  )
}

export default Nav