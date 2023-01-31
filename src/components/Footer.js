import React from 'react';
//import About from './Pages/About';
//import Menu from './Pages/Menu';
//import Reservations from './Pages/Reservations';
//import Order from './Pages/Order';
//import Login from './Pages/Login';

const Footer = () => {
  return (
    <>
    <footer>
    <img src="F:/FRONT-END-DEVELOPER/META-Front-End/Front-End Dev Capstone/project/little-lemon/src/resources/little-lemon-logo-footer.jpg" alt="little lemon logo" />
    <section>
      <p>Doormat Navigation</p>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </section>
    <section>
      <p>Contact</p>
      <ul>
        <li>Address:</li>
        <li>Phone number:</li>
        <li>Email: </li>
      </ul>
    </section>
    <section>
      <p>Social Media Links</p>
      <ul>
        <li>Facebook:</li>
        <li>Instagram:</li>
        <li>TikTok:</li>
      </ul>
    </section>
    </footer>
    </>
  )
}

export default Footer