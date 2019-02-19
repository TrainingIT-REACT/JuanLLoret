import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import UserContext from '../../context/UserContext';
import {logout} from '../../state/actions/UserActions';
import Button from '../../components/Form/Button';
import Burger from '../../components/Burger';

import './Nav.scss';

class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.onLogout = this.onLogout.bind(this);
    this.onClickBurgerBtn = this.onClickBurgerBtn.bind(this);
  }

  render() {
    return <UserContext.Consumer>
      {({signedIn, nickname}) => {
        if (!signedIn) {
          return null;
        }

        const menu = [{
          id: 'general',
          items: [{
            name: 'Home',
            to: '/home',
            icon: 'fas fa-home'
          }, {
            name: 'Explore',
            to: '/albums',
            icon: 'fas fa-compact-disc'
          }, {
            name: 'Player',
            to: '/player',
            icon: 'fas fa-headphones'
          }]
        }, {
          id: 'user',
          items: [{
            name: `@${nickname}`,
            to: '/user',
            icon: 'fas fa-user-astronaut'
          }]
        }];

        return <aside className={`Nav ${this.state.open ? 'Nav--open': ''} ${this.props.className}`}>
          <Burger
            className="Nav__burger-btn"
            open={this.state.open}
            onClick={this.onClickBurgerBtn}
          >
            {this.state.open ? 'Close': 'Open'} menu
          </Burger>
          <nav className={`Nav__nav`}>
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
                    <li
                      key={y}
                      className={`Nav__section-item`}
                    >
                      <NavLink
                        className="Nav__link"
                        activeClassName="Nav__link--active"
                        to={item.to}
                        onClick={this.onClickBurgerBtn}
                      >
                        <i className={item.icon}></i> {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )
            })}
            <ul className={`Nav__section`}>
              <li className={`Nav__section-item`}>
                <Button
                  type="button"
                  color="secondary"
                  className={`Nav__logout`}
                  onClick={this.onLogout}
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </Button>
              </li>
            </ul>
          </nav>
        </aside>
      }}
    </UserContext.Consumer>
  }

  onClickBurgerBtn() {
    const open = !this.state.open;
    this.setState({open});
  }

  onLogout() {
    this.props.logout();
  }
}

Nav.propTypes = {
  className: PropTypes.string
};

Nav.defaultProps = {
  className: ''
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => (dispatch) => ({
  logout: () => {dispatch(logout())}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
