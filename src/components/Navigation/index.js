import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { WEBSITE } from '../../constants/myself';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>All Posts</Link>
      </li>
      <li>
        <a href={WEBSITE}>About me</a>
      </li>
    </ul>
  </div>
);

export default Navigation;
