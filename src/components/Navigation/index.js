import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import * as MYSELF from '../../constants/myself';
import * as ROUTES from '../../constants/routes';

import logo from './img/logo.png';

class Navigation extends React.Component {
  render() {
    return (
      <div id='navbar'>
        <div class='container'>
          <div id="navbar-landing">
            <a href={ROUTES.LANDING}>
              <img src={logo} alt='' />
              <div id='navbar-landing-title'><p>Oleksandr's Blog</p></div>
            </a>
          </div>
          <div id='navbar-navigation' class='tc'>
            <ul>
              <li>
                <Link to={ROUTES.LANDING}>About</Link>
              </li>
              <li>
                <Link to={ROUTES.LANDING}>Articles</Link>
              </li>
              <li>
                <Link to={'drafts'}>Categories</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
