import React from 'react'
import './CSS/Main_about.css';
import Mario1 from '../resources/Mario-Adrian1.jpg';
import Mario2 from '../resources/Mario-Adrian-2.jpg';

const Main_about = () => {
  return (
    <>
    <main className="about-section">
      <article className="container2">
          <hgroup className="titles-us">
            <h1 className="title">Little Lemon</h1>
            <h3 className="sub-title-location">Chicago</h3>
          </hgroup>
          <p className="description-us">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. 
            </p>
            <section className="our-images">
              <figure className="us1">
                <img src={Mario1} className="about-us-image" alt="Mario and Adrian cooking for clients" />
              </figure>
              <figure className="us2">
                <img src={Mario2} className="about-us-image" alt="Mario and Adrian preparing the dishes" />
              </figure>
            </section>
      </article>
    </main>
    </>
  )
}

export default Main_about