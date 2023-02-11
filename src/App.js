import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Testimonials from './components/Main_testimonials';
import About from './components/Main_about';
import Footer from './components/Footer';
import BookingForm from './components/BookingPage';
import {Route, Routes} from 'react-router-dom';
function App() {

  // Fetch API
  const [infos, setInfos] = useState({});
  const fetchData = async () => {
    const response = await fetch(
      `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`
      ).then((response) => response.json());
      // update the state
      setInfos(response);
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
    <div>
      <Nav />
      <Routes>
        <Route path="/BookingPage" element={<BookingForm />} />
      </Routes>
        <Header />
        <Main />
        <Testimonials />
        <About />
      <Footer />
    </div>
    </>
  );
}

export default App;
