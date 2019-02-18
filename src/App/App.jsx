import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from '../components/Nav';
import * as Pages from '../pages';
import {PrivateRoute, PublicRoute} from './Routes';
import UserContext from '../context/UserContext';

import './App.scss';

class App extends Component {
  render() {
    return (
      <UserContext.Provider value={this.props.user}>
        <Router>
          <div className="App">
            <Nav className="App__aside" />
            <main className="App__main">
              <Switch>
                <PublicRoute path="/" exact component={Pages.Login} />
                <PrivateRoute path="/home" component={Pages.Home} />
                <PrivateRoute path="/albums" exact component={Pages.AlbumList} />
                <PrivateRoute path="/albums/:id([0-9]*)" component={Pages.Album} />
                <PrivateRoute path="/player" component={Pages.Player} />
                <PrivateRoute path="/user" component={Pages.User} />
                <Route component={Pages.NotFound} />
              </Switch>
            </main>
          </div>
        </Router>
      </UserContext.Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps)(App);
