import React, { Component } from 'react';

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
              m3 <br />
              CSS Framework
            </h1>
          </div>
          <div 
            className="
            container  
            lead 
            anima-fadein 
            text-white
          ">
            m3 is an Web3 front-end framework with advanced typography tooling. (Formerly Meta). 
            <br />
            <br />
            <p>
              <a href="https://github.com/guylepage3/m3" alt="GitHub (m3)">GitHub</a>
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Hero;
