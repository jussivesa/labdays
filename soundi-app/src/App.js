import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import AlbumList from './Components/AlbumList';
import Navigation from './Components/Navigation';
import AlbumPage from './Pages/Albums';
import HomePage from './Pages/Home';
import LoginPage from './Pages/LoginPage';

class App extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        isSignedIn: false,
        userProfile: {},
        firebase: this.props.firebase,
        firebaseConfig: this.props.firebaseConfig,
        firebaseui: this.props.firebaseui
    };

    componentWillMount() {
        // Updating the `isSignedIn` and `userProfile` local state attributes when the Firebase Auth
        // state changes.
        if (!this.state.userProfile) {
            return;
        }
        this.unregisterAuthObserver = this.props.firebase.auth().onAuthStateChanged((user) => {
            this.setState({ isSignedIn: !!user, userProfile: user });
        });
    }

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

      const renderMergedProps = (component, ...rest) => {
          const finalProps = Object.assign({}, ...rest);
          return (
              React.createElement(component, finalProps)
          );
      };

      const PropsRoute = ({ component, ...rest }) => {
          return (
              <Route {...rest} render={routeProps => {
                  return renderMergedProps(component, routeProps, rest);
              }}/>
          );
      };

      /*
      <Route exact path="/login" component={LoginPage}
                             user={this.state.userProfile}
                             firebaseConfig={this.state.firebaseConfig}
                             firebaseui={this.state.firebaseui}
                      />
       */

      return (
          <Router>
              <Navigation user={this.state.userProfile}>
                  <div className="App">
                      <Route exact path="/" component={HomePage} user={this.state.userProfile} />

                      <Route exact path="/login" render={() => <LoginPage user={this.state.userProfile}
                                                                        firebaseConfig={this.state.firebaseConfig}
                                                                        firebaseui={this.state.firebaseui}
                                                                        logout={() => this.state.firebase.auth().signOut()}/>}
                      />
                      <Route path={'/genre/:genreName/albums'} render={(props)=> <AlbumList user={this.state.userProfile} {...props}/>} />
                      <Route path={`/artist/:artistName/albums`}  render={(props)=> <AlbumList user={this.state.userProfile} {...props}/>} />
                      <Route path={'/not-Found'} conponent={NoMatch} />
                  </div>
              </Navigation>
          </Router>
      );

  }
}

export default App;
