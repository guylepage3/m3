import React, { Component } from 'react';
import Home from './containers/Home';
import NoMatch from './containers/NoMatch';
import Type from './containers/Type';
import TypeEditorial from './containers/TypeEditorial';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/type" component={Type} />
            <Route path="/type-editorial" component={TypeEditorial} />
            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
