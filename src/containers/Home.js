import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

class Home extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto px-4 flex-column">
        <Navbar colorScheme="bg-black"/>
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default Home;
