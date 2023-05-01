import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto flex-column">
        <Header />
        <div
          style={{
            padding: "12px",
            backgroundColor: "#f00",
            color: "#fff"
          }}
        >
          <h3>Meta is an open source Web3 frontend UI framework.</h3>
          <p>Currently Meta focuses on simplifying and making typography easier for developers to design effective content. It also comes with a broad range color system to take away the pain of choosing colors.</p>
          <a
            className="btn btn-white"
            href="https://www.npmjs.com/package/@universelabs/meta"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: 20 }}
          >
            NPM page
          </a>
          <a
            className="btn btn-white"
            href="https://sketch.cloud/s/Plnvv"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meta UI Design System (located in Sketch Cloud)
          </a>
          <p>
            <small>Version: 1.5.2</small>
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
