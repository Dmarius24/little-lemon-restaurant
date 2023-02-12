import React from 'react'
import './CSS/Header.css';
import hero from "../resources/hero.jpg"
import {useNavigate, Link} from 'react-router-dom';


const Header = ({type}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/BookingPage")
  };



  return (
    <>
    <header className="hero">
      <section className="hero-section">
        <hgroup className="titles">
          <h1 className="title">Little Lemon</h1>
          <h3 className="sub-title-hero">Chicago</h3>
        </hgroup>
        <p className="hero-description">We are a family owned Mediterranean restaurant, 
          focused on traditional recipes served with a modern twist.</p>
        <Link to="/Reservations">
          <button
            className="yellow"
            onClick={() => {handleClick()}}>Reserve a Table</button>
        </Link>
        <img className="hero-image" src={hero} alt="restaurant food"/>
      </section>
    </header>
  </>
  );
}

export default Header;