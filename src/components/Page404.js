import React, { Component } from 'react';

class Page404 extends Component {
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
                font-italic 
                anima-fadein 
                quote
                mt-0
                mb-2
              ">
              Ooops!
            </h1>
          </div>
          <div 
            className="
            container  
            lead 
            anima-fadein 
            text-white
          ">
            We can't seem to find the page you're looking for.
            <br />
            <p>
              Error code: 404.
            </p>
            <p className="">
              Here are some helpful links instead:
            </p>
            <p>
              <a href="/" alt="Home">Home</a>
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Page404;
