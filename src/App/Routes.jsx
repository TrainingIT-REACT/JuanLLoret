import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {UserContext} from '../context/User';

export const PrivateRoute = ({component: Component, ...otherProps}) => (
  <UserContext.Consume>
    {user => {
      if (user.signedIn) {
        return <Route component={Component} {...otherProps} />
      }
      return <Redirect to={{
        pathname: '/',
        state: {
          message: 'You must be logged in to enjoy Reactify!'
        }
      }} />
    }}
  </UserContext.Consume>
);

export const PublicRoute = ({component: Component, ...otherProps}) => (
  <UserContext.Consume>
    {user => {
      if (!user.signedIn) {
        return <Route component={Component} {...otherProps} />
      }
      return <Redirect to={'/home'} />
    }}
  </UserContext.Consume>
);

