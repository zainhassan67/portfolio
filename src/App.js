import React from 'react'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Teams from './components/Teams/Teams';
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton';

function App() {
  return (
    <>
      <ScrollUpButton />
      <NavBar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Teams />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
