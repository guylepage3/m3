import React, { Component } from 'react';
import logo from './../img/meta-logo-wordmark-white.svg';
import NavbarToggler from '../components/NavbarToggler';

class Navbar extends Component {
  render() {
    return (
      <nav className={`navbar navbar-expand-md ${this.props.colorScheme}`}
        style={this.props.style}
        >
        <div className="container">
          <a 
            href="/home"
            className="navbar-brand">
            <img 
              src={logo} 
              alt="Meta Logo"
              className="navbar-brand-img" 
              />
          </a>
          <NavbarToggler className="ml-auto navbar-toggler-dark"/>
          <div className="collapse navbar-collapse" id="navbarBasic">
            <div 
              className="
                container 
                d-flex 
                align-items-center 
                d-md-none"
              style={{ height: '47px' }}>
              <a 
                href="/home"
                className="navbar-brand">
                <img 
                  src={logo} 
                  alt="Meta Logo"
                  className="navbar-brand-img" 
                  />
              </a>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a 
                  href="/"
                  className="nav-link">
                   Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="/type"
                  className="nav-link">
                   Typography
                </a>
              </li>
              <li className="nav-item mb-4 mb-sm-0">
                <a 
                  href="/type-editorial"
                  className="btn btn-sm btn-outline-black nav-button">
                   Typography Editorial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;