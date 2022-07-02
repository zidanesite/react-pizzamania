import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import AboutPizza from './component/AboutPizza';
import PizzaTypes from './component/PizzaTypes';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutPizza/>
      <PizzaTypes/>
      <Footer/>
    </>
  );
}

export default App;
