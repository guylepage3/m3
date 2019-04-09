import React, { Component } from 'react';
import styled from 'styled-components';

class Hero extends Component {
  render() {
    return (
      <main 
        role="main" 
        className="container text-center mx-auto my-auto anima-slidein">
        <div className="row">
          <div 
            className="container">
            <h1 
              className="
                text-white 
                font-weight-bold 
                anima-fadein 
                quote
                mt-0
                mb-2
              ">
              Meta. <br />
              A Web3 UI Framework.
            </h1>
          </div>
          <div 
            className="
            container  
            lead 
            anima-fadein 
            text-white
          ">
            Meta is an open source UI framework for both web2 & web3 applications. 
            <br />
            <br />
            <p>
              <a href="/" alt="GitHub (Meta)">GitHub</a>
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Hero;
