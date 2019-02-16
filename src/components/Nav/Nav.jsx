import React from 'react';
import {NavLink} from 'react-router-dom';

import UserContext from '../../context/UserContext';

import './Nav.scss';

const Nav = () => (
  <UserContext.Consumer>
    {({signedIn, nickname}) => (
      <>
        {signedIn && <nav>
            <ul>
              <li>
                <NavLink activeClassName="Nav__active" to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="Nav__active" to="/albums">
                  Albums
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="Nav__active" to="/player">
                  Player
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="Nav__active" to="/user">
                  User
                </NavLink>
              </li>
            </ul>
          </nav>}
      </>
    )}
  </UserContext.Consumer>
);

export default Nav;
