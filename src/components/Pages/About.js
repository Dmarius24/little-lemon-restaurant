import React from 'react'
import {Routes, Route, Link } from "react-router-dom";
import Reservations from "./Reservations";
import Order from "./Order";
import Login from "./Login";
import Menu from "./Menu";
import Home from "./Home";

const About = () => {
  return (
    <header>
    <img src="../resources/Logo.svg" alt="logo" style={{width: '100%', height: '100%'}}/>
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/Reservations">Reservations</Link></li>
          <li><Link to="/Order">Order Online</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/" element={<About />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/Reservations" element={<Reservations />}></Route>
        <Route path="/Order" element={<Order />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
  </header>
  )
}

export default About