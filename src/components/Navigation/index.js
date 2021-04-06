import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import * as MYSELF from '../../constants/myself';
import * as ROUTES from '../../constants/routes';

import logo from './img/logo.png';

class Navigation extends React.Component {
  render() {
    return (
      <div id='navbar' class='container'>
        <ul>
          <li id='navbar-title' style={{'float': 'left'}}>
            <a href={ROUTES.LANDING}>
              <img src={logo} alt='' />
              <p>Oleksandr's Blog</p>
            </a>
          </li>
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
    );
  }
}

export default Navigation;
