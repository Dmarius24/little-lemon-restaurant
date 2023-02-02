import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Menu from "./Pages/Menu"
import Reservations from "./Pages/Reservations"
import Order from "./Pages/Order"
import Login from "./Pages/Login"

import "./CSS/Nav.css";
import Logo1 from "../resources/Logo1.svg";

const Nav = () => {
  return (
    <>
    <Router>
      <header className="header">
        <img className="logo" src={Logo1} alt="logo" />
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Pages/About">About</Link></li>
            <li><Link to="/Pages/Menu">Menu</Link></li>
            <li><Link to="/Pages/Reservations">Reservations</Link></li>
            <li><Link to="/Pages/Order">Order Online</Link></li>
            <li><Link to="/Pages/Login">Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Footer" element={<About />}></Route>
          <Route path="/Main" element={<Menu />}></Route>
          <Route path="/Main" element={<Reservations />}></Route>
          <Route path="/Main" element={<Order />}></Route>
          <Route path="/Header" element={<Login />}></Route>
        </Routes>
      </header>
    </Router>
    </>
  )
}

export default Nav