import React from 'react'
import "./CSS/Main_testimonials.css";
import People1 from "../resources/People-1-html.jpg"
import People2 from "../resources/People-2-html.jpg"
import People3 from "../resources/People-3-html.jpg"
import People4 from "../resources/People-4-html.jpg"

const Testimonials = () => {
  return (
    <>
    <main className="testimonials">
      <article className="reviews">
          <h3 className="sub-title-hero">Testimonials</h3>
          <section className="container">
            <article className="review">
              <h5 className="rating-title">Rating</h5>
              <figure className="person-review">
                <img src={People1} className="rating-image" alt="Sophia Leone" />
                <figcaption className="name">Sophia Leone</figcaption>
              </figure>
              <p className="opinion">Considering the quality, It’s ideal for a romantic night out.</p>
            </article>
            <article className="review">
              <h5 className="rating-title">Rating</h5>
              <figure className="person-review">
                <img src={People2} className="rating-image" alt="Mary Jane" />
                <figcaption className="name">Mary Jane</figcaption>
              </figure>
              <p className="opinion">Do yourself a favor and visit this lovely restaurant in Chicago.</p>
            </article>
            <article className="review">
              <h5 className="rating-title">Rating</h5>
              <figure className="person-review">
                <img src={People3} className="rating-image" alt="Jasmine Jay" />
                <figcaption className="name">Jasmine Jay</figcaption>
              </figure>
              <p className="opinion">This place is great! Atmosphere is chill and cool.</p>
            </article>
            <article className="review">
              <h5 className="rating-title">Rating</h5>
              <figure className="person-review">
                <img src={People4} className="rating-image" alt="Ted Ferris" />
                <figcaption className="name">Ted Ferris</figcaption>
              </figure>
              <p className="opinion">It’s a great experience. The ambiance is very charming.</p>
            </article>
          </section>
        </article>
      </main>
    </>
  )
}

export default Testimonials