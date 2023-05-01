import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid mx-auto text-center mb-4">
        <div className="text-white-50 text-footer font-weight-bold">
          <ul className="list-inline my-2">
            <li className="list-inline-item mx-2">
              <a href="https://github.com/guylepage3/m3" 
                alt="GitHub m3 (m3)"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'github']} /> GitHub
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://twitter.com/guylepage3" 
                alt="Twitter Guy Lepage"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'twitter']} /> Twitter
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://medium.com/guylepage3" 
                alt="Guy Lepage – Medium"
                className="text-white">
                <FontAwesomeIcon className="mr-1" icon={['fab', 'medium']} /> Medium
              </a>
            </li>
          </ul>
        </div>
        <div className="text-white-50 font-weight-normal small">
          Guy Lepage
          <CopyrightUpdate />
        </div>
      </footer>
    );
  }
}

export default Footer;
