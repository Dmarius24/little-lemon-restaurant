import React from 'react'
import './CSS/Header.css';
import hero from "../resources/hero.jpg"

const Header = () => {
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
        <button className="yellow">Reserve a Table</button>
        <img className="hero-image" src={hero} alt="restaurant food"/>
      </section>
    </header>
    </>
  );
}

export default Header