import React, { Component } from 'react';
import HeaderLight from './HeaderLight';
import Typography from './Typography';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto flex-column">
        <HeaderLight />
        <Typography />
        <Footer />
      </div>
    );
  }
}

export default Home;
