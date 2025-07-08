import React from 'react';
import './App.css';
import NavBar from './assets/Navbar';
import Body from './assets/Body';
import Features from './assets/Features.jsx';
import Testimonials from './assets/Testimonials.jsx';
import Contact from './assets/Contact.jsx';
import Footer from './assets/Footer.jsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Body />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
