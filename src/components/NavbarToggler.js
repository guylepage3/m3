import React, { Component } from 'react';
import $ from 'jquery';

class NavbarToggler extends Component {

  componentDidMount = () => {
    $("#toggle").click( function() {
      $("#navbarBasic").animate( {
        opacity: "toggle",
        backgroundColor: "#fff"
      }, 300);
    });
  }

  render() {
    return (
      <button 
        className="navbar-toggler collapsed" 
        id="toggle"
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarBasic" 
        aria-controls="navbarBasic" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        style={this.props.style}
        onClick= {this.document}
      >
        <span className={`icon-bar top-bar ${this.props.className}`}></span>
        <span className={`icon-bar bottom-bar ${this.props.className}`}></span>
      </button>
    );
  }
}

export default NavbarToggler;