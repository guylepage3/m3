import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './css/App.css';
import './css/Buttons.css';
import Home from './components/Home';
import Documentation from './components/Documentation';
import NoMatch from './components/NoMatch';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faAngleRight, faExternalLinkAlt, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faAngleUp, faAngleRight, faExternalLinkAlt, faLongArrowAltUp)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/docs" component={Documentation} />
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
