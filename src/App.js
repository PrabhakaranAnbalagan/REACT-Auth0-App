import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Auth0-Router/Home';
import Profile from "./components/Auth0-Router/Profile";
import Nav from "./components/Auth0-Router/Nav";
import StarMatch from './components/Star-Game/StarMatch'
import GitHubCard from './components/Github-Card-Search/GitHubCard'
import Auth from './components/Auth0-Router/Auth/Auth';
import Callback from './components/Auth0-Router/Callback';
// import About from './components/Auth0-Router/About'
// import Public from "./components/Auth0-Router/Public";
// import Private from "./components/Auth0-Router/Private";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div className="body">
          <Route path="/" exact render={props => <Home auth={this.auth} {...props} />} />
          <Route path="/Callback" exact render={props => <Callback auth={this.auth} {...props} />} />
          <Route path="/Profile" render={props => <Profile auth={this.auth} {...props} />} />
          {/* <Route path="/public" component={Public} /> */}
          <Route path="/GitHubCard" component={GitHubCard}></Route>
          <Route path="/StarMatch" component={StarMatch}></Route>
          {/* <Route path="/About" component={About}></Route> */}
          {/* <Route
            path="/private"
            render={props =>
              this.auth.isAuthenticated() ? (
                <Private auth={this.auth} {...props} />
              ) : (
                  this.auth.login()
                )
            }
          /> */}

        </div>
      </>);
  }
}

export default App;

