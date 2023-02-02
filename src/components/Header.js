import React from 'react'
import './CSS/Header.css';
const Header = () => {
  return (
    <>
    <header>
      <hgroup>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
      </hgroup>
      <p>We are a family owned Mediterranean restaurant, 
        focused on traditional recipes served with a modern twist.</p>
      <button>Reserve a Table</button>
      <img className="hero" src="F:/FRONT-END-DEVELOPER/META-Front-End/Front-End Dev Capstone/project/little-lemon/src/resources/restaurant-food.jpg" alt="restaurant food"/>
    </header>
    </>
  );
}

export default Header