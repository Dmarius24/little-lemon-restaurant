import React from 'react'
import { Link } from "react-router-dom";
import "./CSS/Nav.css";
import Logo1 from "../resources/Logo1.svg";
import hamburger from "../resources/hamburger-menu.svg";
import basket from "../resources/Basket.svg"
const Nav = () => {
  return (
    <>
    <header className="nav-menu">
    <Link to="/" className="logo-main">
      <img src={Logo1} alt="logo" />
    </Link>
        <section className="mobile-nav">
          <img className="hamburger" src={hamburger} alt="menu" />
          <img className="logo" src={Logo1} alt="logo" />
          <img className="basket" src={basket} alt="basket" />
        </section>
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/Reservations">Reservations</Link></li>
            <li><Link to="/Order">Order Online</Link></li>
            <li><Link to="/Login">Login</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Nav