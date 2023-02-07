import React from 'react'
import { MdDeliveryDining } from 'react-icons/md';
import salad from "../resources/greek-salad-1.jpg"
import bruchetta from "../resources/bruchetta-1.jpg"
import lemon from "../resources/lemon-dessert-1.jpg"
import "./CSS/Main.css";

const Main = () => {
  return (
    <>
      <main className="highlights">
        <article className="cards">
          <h2 className="sub-title">This weeks Specials !</h2>
          <button className="yellow-menu">Online Menu</button>
          <section className="order-delivery">
            <h3 className="order-title">Order for delivery!</h3>
            <nav className="order-menu">
              <ul>
                <li>Lunch</li>
                <li>Mains</li>
                <li>Desserts</li>
                <li>A La Carte</li>
                <li>Specials</li>
              </ul>
            </nav>
          </section>
            <section className="card nr1">
              <img className="image" src={salad} alt="greek salad"/>
              <hgroup className="money">
                <h5 className="card-title">Greek salad</h5>
                <h5 className="price">$ 12.99</h5>
              </hgroup>
              <p className="card-description">The famous greek salad of crispy lettuce, peppers, 
                olives and our Chicago style feta cheese, garnished 
                with crunchy garlic and rosemary croutons.
              </p>
              <button className="order-button">Order a delivery <MdDeliveryDining className="icon" /></button>
            </section>
            <section className="card nr2">
              <img className="image" src={bruchetta} alt="italian bruchetta"/>
              <hgroup className="money">
                <h5 className="card-title">Bruchetta</h5>
                <h5 className="price">$ 5.99</h5>
              </hgroup>
              <p className="card-description">Our Bruchetta is made from grilled bread that has been 
                smeared with garlic and seasoned with salt and olive oil.
              </p>
              <button className="order-button">Order a delivery <MdDeliveryDining className="icon" /></button>
            </section>
            <section className="card nr3">
              <img className="image" src={lemon} alt="lemon dessert"/>
              <hgroup className="money">
                <h5 className="card-title">Lemon Dessert</h5>
                <h5 className="price">$ 5.00</h5>
              </hgroup>
              <p className="card-description">This comes straight from grandma's recipe book, every 
                last ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <button className="order-button">Order a delivery <MdDeliveryDining className="icon" /></button>
            </section>
        </article>
      </main>
    </>
  );
}

export default Main