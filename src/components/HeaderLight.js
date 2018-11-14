import React, { Component } from 'react';

class HeaderLight extends Component {
  render() {
    return (
      <nav className="navbar fixed-top" 
        style={{
          height: '56px',
          backgroundColor: '#000'
        }}>
        <a className="navbar-brand font-weight-bold text-white"
          href="/"
          style={{
            lineHeight: '2.5rem',
            fontSize: '1.2rem'
          }}>
          Polypropylene
        </a>
      </nav>
    );
  }
}

export default HeaderLight;
