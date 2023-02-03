import React from 'react';
import './CSS/Footer.css';
import little_lemon from "../resources/little-lemon-logo-footer.jpg"

const Footer = () => {
  return (
    <>
    <footer className="footer">
    <article className="details">
      <img src={little_lemon} className="logo-footer" alt="little lemon logo" />
      <section className="navs num1">
        <p className="nav-titles">Doormat Navigation</p>
        <nav className="nav-footer">
          <ul className="options-footer">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
      </section>
      <section className="navs num2">
        <p className="nav-titles">Contact</p>
        <nav className="nav-footer">
          <ul className="options-footer">
            <li>Address:</li>
            <li>Phone number:</li>
            <li>Email: </li>
          </ul>
        </nav>
      </section>
      <section className="navs num3">
        <p className="nav-titles">Social Media Links</p>
        <nav className="nav-footer">
          <ul className="options-footer">
            <li>Facebook:</li>
            <li>Instagram:</li>
            <li>TikTok:</li>
          </ul>
        </nav>
      </section>
    </article>
    </footer>
    </>
  )
}

export default Footer