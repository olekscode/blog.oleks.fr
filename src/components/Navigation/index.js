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
        <Link to={WEBSITE}>About me</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
