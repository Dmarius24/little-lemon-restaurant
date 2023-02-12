import React, {useState} from 'react';
import './CSS/BookingPage.css';
import 'react-phone-number-input/style.css';


const BookingForm = () => {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [number, setNumber] = useState("")
  const [occasion, setOccasion] = useState("")
  const [comment, setComment] = useState("")



  const availableTimes = ["Select time", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  const occasionType = ["Select occasion", "Birthday", "Anniversary", "Family Event"]

  const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  }
   


  const isFormValid = () => {
    return (
      name &&
      validateEmail(email) &&
      date &&
      time &&
      time !== "Select time" &&
      number &&
      occasion &&
      occasion !== "Select occasion" &&
      comment
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setName("")
    setEmail("")
    setDate("")
    setTime("")
    setNumber("")
    setOccasion("")
    setComment("")

    console.log("Form Submitted!")
    console.log("Name: " + e.target[0].value)
    console.log("Email: " + e.target[1].value)
    console.log("Date: " + e.target[2].value)
    console.log("Time: " + e.target[3].value)
    console.log("Guests: " + e.target[4].value)
    console.log("Occasion: " + e.target[5].value)
    console.log("Optional comment: " + e.target[6].value)

  }

  return (
    <>
    <form className="form-style" onSubmit={handleSubmit}>
      <h4 className="title-form">Find a table for your occasion</h4>
      {/* Name input */}
      <label for="res-name" className="form-title">First name</label>
      <input 
        type="text" 
        id="res-name" 
        value={name}
        placeholder="Enter your name"
        data-testid="name-input" 
        className="input-design"
        onChange={(e) => setName(e.target.value)} />
        {/* Email input */}
      <label for="res-email" className="form-title">Email</label>
      <input
        className="form-email"
        type="email"
        name="email"
        id="email"
        value={email}
        placeholder="Enter your email address"
        onChange={(e) => setEmail(e.target.value)} />
      
      
      {/* Date input */}
      <label htmlFor="res-date" className="form-title">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        data-testid="date-input" 
        className="input-design" 
        value={date}
        onChange={(e) => setDate(e.target.value)} />
        {/* Time input */}
      <label htmFor="res-time" className="form-title">Choose time</label>
      <select 
        id="res-time" 
        className="input-design"
        value={time}
        onChange={(e) => setTime(e.target.value)} >
          {availableTimes.map((hour, index) => (
            <option key={index}>{hour}</option>
          ))}
        </select>
        {/* Guests input */}
      <label htmlFor="guests" className="form-title">Number of guests</label>
      <input 
        type="number" 
        placeholder="Enter a number" 
        min="1" 
        max="10" 
        id="guests" 
        className="input-design"
        value={number}
        onChange={(e) => setNumber(e.target.value)} />
        {/* Occasion input */}
      <label htmlFor="occasion" className="form-title">Occasion</label>
      <select 
        id="occasion" 
        className="input-design"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}>
          {occasionType.map((type, index) => (
            <option key={index}>{type}</option>
          ))}
        </select>

         {/* Optional comment */}
        <label for="optional" className="form-title">Optional (Add a special request)</label>
        <textarea 
          className="form-comment"
          type="text"
          value={comment}
          placeholder="Optional..."
          onChange={(e) => setComment(e.target.value)} 
          />
            <input
              type="submit"
              disabled={!isFormValid()}
              value="Make Your Reservation"
              className="input-design reserve"
              aria-label="On Click"
              />
    </form>
    </>
    )
}

export default BookingForm;