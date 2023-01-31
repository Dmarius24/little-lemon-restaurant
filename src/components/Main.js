import React from 'react'
import { MdDeliveryDining } from 'react-icons/md';

const Main = () => {
  return (
    <>
      <main>
      {/* Highlights Section */}
      <article>
        <h2>This weeks Specials !</h2>
        <button>Online Menu</button>
        <section>
          <img 
            src="F:/FRONT-END-DEVELOPER/META-Front-End/Front-End Dev Capstone/project/little-lemon/src/resources/greek-salad.jpg" 
            alt="greek salad"/>
          <h5>Greek salad</h5>
          <h5>$ 12.99</h5>
          <p>The famous greek salad of crispy lettuce, peppers, 
            olives and our Chicago style feta cheese, garnished 
            with crunchy garlic and rosemary croutons.
          </p>
          <button>Order a delivery <MdDeliveryDining /></button>
        </section>
        <section>
          <img 
            src="F:/FRONT-END-DEVELOPER/META-Front-End/Front-End Dev Capstone/project/little-lemon/src/resources/bruchetta.svg" 
            alt="italian bruschetta"/>
          <h5>Bruschetta</h5>
          <h5>$ 5.99</h5>
          <p>Our Bruschetta is made from grilled bread that has been 
            smeared with garlic and seasoned with salt and olive oil.
          </p>
          <button>Order a delivery <MdDeliveryDining /></button>
        </section>
        <section>
          <img 
            src="F:/FRONT-END-DEVELOPER/META-Front-End/Front-End Dev Capstone/project/little-lemon/src/resources/lemon-dessert.jpg" 
            alt="lemon dessert"/>
          <h5>Lemon Dessert</h5>
          <h5>$ 5.00</h5>
          <p>This comes straight from grandma's recipe book, every 
            last ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <button>Order a delivery <MdDeliveryDining /></button>
        </section>
      </article>
      {/* End of Highlights section*/}
      {/* Testimonials section*/}
      <article>
        <h3>Testimonials</h3>
        <article>
          <h5>Rating</h5>
          <img 
              src="F:/FRONT-END-DEVELOPER/META-Front-End/Front-End Dev Capstone/project/little-lemon/src/resources/People-1-html.jpg" 
              alt="Sophia Leone" />
          <p>Sophia Leone</p>
          <p>Considering the quality, It’s ideal for a romantic night out.</p>
        </article>
              <article>
          <h5>Rating</h5>
          <img 
              src="F:/FRONT-END-DEVELOPER/META-Front-End/Front-End Dev Capstone/project/little-lemon/src/resources/People-2-html.jpg" 
              alt="Mary Jane" />
          <p>Mary Jane</p>
          <p>Do yourself a favor and visit this lovely restaurant in Chicago.</p>
        </article>
              <article>
          <h5>Rating</h5>
          <img 
              src="F:/FRONT-END-DEVELOPER/META-Front-End/Front-End Dev Capstone/project/little-lemon/src/resources/People-3-html.jpg" 
              alt="Jasmine Jay" />
          <p>Jasmine Jay</p>
          <p>This place is great! Atmosphere is chill and cool.</p>
        </article>
              <article>
          <h5>Rating</h5>
          <img 
              src="F:/FRONT-END-DEVELOPER/META-Front-End/Front-End Dev Capstone/project/little-lemon/src/resources/People-4-html.jpg" 
              alt="Ted Ferris" />
          <p>Ted Ferris</p>
          <p>It’s a great experience. The ambiance is very charming.</p>
        </article>
      </article>
      {/* End of Testimonials section*/}
      {/* About section*/}
      <article>
        <hgroup>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
        </hgroup>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. 
          </p>
          <img src="F:/FRONT-END-DEVELOPER/META-Front-End/Front-End Dev Capstone/project/little-lemon/src/resources/Mario-and-Adrian-A.jpg" alt="Mario and Adrian cooking for clients" />
          <img src="F:/FRONT-END-DEVELOPER/META-Front-End/Front-End Dev Capstone/project/little-lemon/src/resources/Mario-and-Adrian-b.jpg" alt="Mario and Adrian preparing the dishes" />
      </article>
      {/* End of About section*/}
      </main>
    </>
  );
}

export default Main