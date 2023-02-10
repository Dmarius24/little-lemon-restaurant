import React, {useState} from 'react'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import '../CSS/Customer.css';
import icon from '../../resources/icon-eye.svg';
import {useForm} from 'react-hook-form';
const Customer = () => {
  // useState for phone number
  const [value, setValue] = useState()

// useState for Password to allow it to be shown
  const [isShown, setIsSHown] = useState(false);
// This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  // react-hook-form 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);



  return (
    <>
    <form className="form-customer" onSubmit={handleSubmit()}>
      <label for="res-name" className="form-title">First name</label>
      <input type="name" id="res-name" data-testid="name-input" className="input-design"
            {...register("firstName", { required: true, maxLength: 20 })} />
      <label for="res-name" className="form-title">Last name</label>
      <input type="name" id="res-name" className="input-design"
            {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <label for="res-name" className="form-title">Phone number</label>
      <PhoneInput
        international
        defaultCountry="US"
        placeholder="Enter phone number"
        value={value}
        onChange={setValue} 
        className="form-phone"/>
      <label for="res-email" className="form-title">Email</label>
      <input
        className="form-email"
        type="email"
        name="email"
        id="email"
          {...register("email", {
          required: "required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"
          }
        })} />
        {errors.email && <span role="alert">{errors.email.message}</span>}

        <label for="password" className="form-title">Password</label>

        <input 
          type={isShown ? "text" : "password"} placeholder="Password"
          name="password" id="password" className="input-design"
          {...register("password", {
          required: "required",
          minLength: {
            value: 5,
            message: "min length is 5"
          }
        })} />
        <label className="check-pass" htmlFor="check-image">
          <img src={icon} alt="check password" id="check-image" onClick={togglePassword}/>
        </label>
        <label for="optional" className="form-title">Optional (Add a special request)</label>
        <textarea className="form-comment">
          Optional...
        </textarea>
      </form>
    </>
  )
}



export default Customer