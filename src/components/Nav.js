import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Menu from "./Pages/Menu"
import Reservations from "./Pages/Reservations"
import Order from "./Pages/Order"
import Login from "./Pages/Login"
import "./CSS/Nav.css";

const Nav = () => {
  return (
    <>
    <Router>
      <header className="header">
        <img src="../resources/Logo.svg" alt="logo" />
        <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/Pages/About">About</Link>
            <Link to="/Pages/Menu">Menu</Link>
            <Link to="/Pages/Reservations">Reservations</Link>
            <Link to="/Pages/Order">Order Online</Link>
            <Link to="/Pages/Login">Login</Link>
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