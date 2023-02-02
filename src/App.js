import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Testimonials from './components/Main_testimonials';
import About from './components/Main_about';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Nav />
    <Header />
    <Main />
    <Testimonials />
    <About />
    <Footer />
    </>
  );
}

export default App;
