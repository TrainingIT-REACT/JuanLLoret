import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import UserContext from '../../context/UserContext';

import './Nav.scss';

const Nav = ({className}) => (
  <UserContext.Consumer>
    {({signedIn, nickname}) => {
      if (!signedIn) {
        return null;
      }

      const menu = [{
        id: 'general',
        items: [{
          name: 'Home',
          to: '/home',
          icon: ''
        }, {
          name: 'Explore',
          to: '/albums',
          icon: ''
        }, {
          name: 'Player',
          to: '/player',
          icon: ''
        }]
      }, {
        id: 'user',
        items: [{
          name: 'User',
          to: '/user',
          icon: ''
        }]
      }];

      return <aside className={`Nav ${className}`}>
        <nav className="Nav__nav">
          {menu.map((section, i) => {
            if (!section.items.length) {
              return null;
            }

            return (
              <ul
                key={i}
                className={`Nav__section Nav__section--${section.id}`}
              >
              {section.items.map((item, y) => (
                <li key={y}>
                  <NavLink
                    className="Nav__link"
                    activeClassName="Nav__link--active"
                    to={item.to}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            )
          })}
        </nav>
      </aside>
    }}
  </UserContext.Consumer>
);

Nav.propTypes = {
  className: PropTypes.string
};

Nav.defaultProps = {
  className: ''
};

export default Nav;
