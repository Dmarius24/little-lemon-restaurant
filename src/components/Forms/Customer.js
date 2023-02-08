import React, {useState} from 'react'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { useFormik } from 'formik';
import '../CSS/Customer.css';
import icon from '../../resources/icon-eye.svg';

const Customer = () => {
  // useState for phone number
  const [value, setValue] = useState()


// Formik code for email
  const validate = (values) => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
// End code for Formik email

// useState for Password to allow it to be shown
  const [isShown, setIsSHown] = useState(false);
// This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };


  return (
    <>
    <form className="form-customer" onSubmit={formik.handleSubmit}>
      <label for="res-name" className="form-title">First name</label>
      <input type="name" id="res-name" className="input-design" />
      <label for="res-name" className="form-title">Last name</label>
      <input type="name" id="res-name" className="input-design" />
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
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email} />
          {formik.touched.email && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
        <label for="password" className="form-title">Password</label>

        <input 
          type={isShown ? "text" : "password"}
          placeholder="Password"
          name="password"
          id="password"
          className="input-design" />
        <label className="check-pass" htmlFor="check-image">
          <img src={icon} alt="check password" id="check-image" onClick={togglePassword}/>
        </label>
        <label for="optional" className="form-title">Optional (Add a special request)</label>



      
      </form>
    </>
  )
}



export default Customer