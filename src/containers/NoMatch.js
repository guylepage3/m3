import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Page404 from '../components/Page404';

class NoMatch extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto px-4 flex-column">
        <Navbar />
        <div 
          style={{
            paddingTop: '56px'
          }}>
        </div>
        <Page404 />
        <Footer />
      </div>
    );
  }
}

export default NoMatch;
