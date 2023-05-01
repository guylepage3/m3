import React, { Component } from 'react';
import styled from 'styled-components';
import SocialText from '../components/SocialText';
import logo from './../img/m3-logo-wordmark-white.svg';
import NavbarToggler from '../components/NavbarToggler';

const Nav = styled.nav`
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  background-color: transparent;

  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Div = styled.div`
  height: 70px;
`;

class Navbar extends Component {
  state = {
    socialItems: [
      {
        id: 1,
        href: 'https://github.com/guylepage3/m3',
        alt: 'GitHub m3 (m3)',
        icon: 'github',
        text: 'GitHub'
      },
      {
        id: 2,
        href: 'https://twitter.com/guylepage3',
        alt: 'Twitter Guy Lepage',
        icon: 'twitter',
        text: 'Twitter'
      },
      {
        id: 3,
        href: 'https://medium.com/guylepage3',
        alt: 'Guy Lepage – Medium',
        icon: 'medium',
        text: 'Medium'
      }
    ]
  }

  render() {
    return (
      <Nav className={`navbar navbar-expand-md ${this.props.colorScheme}`}
        style={this.props.style}
        >
        <div className="container">
          <a 
            className=" 
              d-flex 
              text-white 
              align-items-center" 
            style={{ 
              fontWeight: '700',
              fontSize: '1.75rem'
            }}
            href="/"
          >
            <span style={{ fontWeight: '400' }}>[</span>
              m3
            <span style={{ fontWeight: '400' }}>]</span>
          </a>
          <NavbarToggler 
            className="d-flex align-items-right navbar-toggler-light"/>
          <div className="collapse navbar-collapse" id="navbarBasic">
            <Div 
              className="
                container 
                d-flex 
                align-items-center 
                justify-content-center 
                d-md-none"
              style={{
                height: '45px'
              }}>
              <a 
                className="
                  navbar-brand 
                  d-flex 
                  align-items-center 
                  justify-content-center" 
                href="/"
                style={{
                marginRight: 0
              }}>
                <img
                  src={logo} 
                  className="navbar-brand-img d-none" 
                  alt="Guy Lepage Logo"/>
              </a>
            </Div>
            <ul className="navbar-nav" style={{ backgroundColor: '#000'}}>
              <li className="nav-item d-md-none">
                <a 
                  href="/"
                  className="nav-link">
                   Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="/type"
                  className="nav-link mt-md-2 ml-md-5">
                   Type
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="/type-editorial"
                  className="nav-link mt-md-2 ml-md-3">
                   Type Editorial
                </a>
              </li>
              <div className="nav-item d-md-none">
                <SocialText 
                  socialItems={this.state.socialItems}
                  listAlign="d-block pt-3 pb-2 ml-0"
                />
              </div>
            </ul>
          </div>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
