import React, {useState, useEffect} from 'react';
import './CSS/BookingPage.css';
import Reserve from './Forms/Reserve';
import Customer from './Forms/Customer';
import {useForm} from 'react-hook-form';


const BookingForm = () => {

  const [page, setPage] = useState(0); 

  const FormTitles = ["Find a table for your occasion", "Sign up"];
  const FormButtons = ["Make Your reservation", "Save"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Reserve />;
    } else if (page === 1) {
      return <Customer />;
    } 
  }


  return (
    <>
    <form className="form-style">
      <h4>{FormTitles[page]}</h4>

    <main className="form-content" >
      {PageDisplay()}
    </main>
            <input
              type="submit"
              value={FormButtons[page]}
              className="input-design reserve"
              disabled={page === FormTitles.length - 1}
              onClick={(e) => {e.preventDefault();
                            setPage((currPage) => currPage + 1);
                          }} />
            <input
              type="submit"
              value="Back"
              className="input-design back"
              disabled={page === 0}
              onClick={(e) => {e.preventDefault();
                            setPage((currPage) => currPage - 1);
                          }} />
    </form>
    </>
    )
}

export default BookingForm;