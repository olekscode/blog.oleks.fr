import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import * as MYSELF from '../../constants/myself';
import * as ROUTES from '../../constants/routes';

import profilePicture from './img/profile.jpg';

class Navigation extends React.Component {
  render() {
    return (
      <div id='navbar'>
        <div id="navbar-landing">
          <a href={ROUTES.LANDING}>
            <img src={profilePicture} alt='' />
            <div id='navbar-landing-title'><p>Oleksandr's Blog</p></div>
            <div id='navbar-landing-asciimoji'><p>ʕ·͡ᴥ·ʔ</p></div>
          </a>
        </div>
        <div id='navbar-navigation'>
          <ul>
            <li>
              <Link to={ROUTES.LANDING}>Other Posts</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
