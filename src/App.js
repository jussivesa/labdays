import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import AlbumList from './Components/AlbumList';
import Navigation from './Components/Navigation';
import AlbumPage from './Pages/Albums';
import HomePage from './Pages/Home';

class App extends Component {

  render() {

      const NoMatch = ({ location }) => (
          <Navigation>
              <div className="App">
                  <h3>
                      No match for <code>{location.pathname}</code>
                  </h3>
              </div>
          </Navigation>
      );


      return (
          <Router>
              <Navigation>
                  <div className="App">
                      <Route exact path="/" component={HomePage} />
                      <Route exact path={'/albums'} component={AlbumPage}/>
                      <Route path={`album/:name`} component={AlbumList} />
                      <Route path={'/not-Found'} conponent={NoMatch} />
                  </div>
              </Navigation>
          </Router>
      );

  }
}

export default App;
