import React, {useState} from 'react'
import './CSS/Header.css';
import hero from "../resources/hero.jpg"
import {useNavigate} from 'react-router-dom';


const Header = ({type}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/BookingPage")
  };

  const [hidden, setHidden] = useState(false);


  return (
    <>
    { !hidden ?
    <header className="hero">
      <section className="hero-section">
        <hgroup className="titles">
          <h1 className="title">Little Lemon</h1>
          <h3 className="sub-title-hero">Chicago</h3>
        </hgroup>
        <p className="hero-description">We are a family owned Mediterranean restaurant, 
          focused on traditional recipes served with a modern twist.</p>
          <button
            className="yellow"
            onClick={() => {handleClick();
                            setHidden(s => !s);}}>Reserve a Table</button>
        <img className="hero-image" src={hero} alt="restaurant food"/>
      </section>
    </header>
    : null
  }
  </>
  );
}

export default Header;