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

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/BookingPage" element={<BookingForm />} />
      </Routes>
        <Header />
        <Main type="hide" />
        <Testimonials type="hide" />
        <About type="hide" />
      <Footer />
    </>
  );
}

export default App;
