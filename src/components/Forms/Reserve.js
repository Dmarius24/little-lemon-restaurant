import React from 'react'
import '../CSS/Reserve.css';
const Reserve = () => {
  return (
    <>
        <label for="res-date" className="form-title">Choose date</label>
        <input type="date" id="res-date" className="input-design" />
        <label for="res-time" className="form-title">Choose time</label>
        <select id="res-time " className="input-design">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
        <label for="guests" className="form-title">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" className="input-design" />
        <label for="occasion" className="form-title">Occasion</label>
        <select id="occasion" className="input-design">
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Family Event</option>
        </select>
        <h2 for="seating" className="form-title">Seating options</h2>
            <section className="radios">
                <input 
                    type="radio"
                    name="options"
                    value="Standard" 
                    id="seating" />
                <label htmlFor="seating" className="radio" >Standard</label>
                <input 
                type="radio" 
                    name="options"
                    value="Outside" 
                    id="seating" />
        <label htmlFor="seating" className="radio" >Outside</label>
    </section>
    </>
  )
}

export default Reserve