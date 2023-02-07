import React from 'react'
import {Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Menu from "./Pages/Menu"
import Reservations from "./Pages/Reservations"
import Order from "./Pages/Order"
import Login from "./Pages/Login"
import "./CSS/Nav.css";
import Logo1 from "../resources/Logo1.svg";
import hamburger from "../resources/hamburger-menu.svg";
import basket from "../resources/Basket.svg"
const Nav = () => {
  return (
    <>

      <header className="nav-menu">
      <img className="logo-main" src={Logo1} alt="logo" />
        <section className="mobile-nav">
          <img className="hamburger" src={hamburger} alt="menu" />
          <img className="logo" src={Logo1} alt="logo" />
          <img className="basket" src={basket} alt="basket" />
        </section>
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
          <Route path="/Footer" element={<About />} />
          <Route path="/Main" element={<Menu />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/Main" element={<Order />} />
          <Route path="/Header" element={<Login />} />
        </Routes>
      </header>

    </>
  )
}

export default Nav