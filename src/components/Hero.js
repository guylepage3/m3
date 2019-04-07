import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <div 
        className="container-fluid pl-0 pr-0 hero" 
        style={{ 
          marginTop: '-53px' 
        }}>
        <div className="row no-gutters">
          <div 
            className="
              container-fluid 
              p-4 
              fadein"
            style={{
              position: 'relative'
            }}>
            <div className="container"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
