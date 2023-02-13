import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';

import Navigation from '../Navigation';
import PostListPage from '../PostList';
import PostPage from '../Post';

import * as ROUTES from '../../constants/routes';

const App = () => (
	<Router>
		<div>
      <header>
			  <Navigation />
      </header>
      <article>
        <Routes>
        	<Route exact path={ROUTES.LANDING} element={ <PostListPage/> } />
			    <Route exact path={ROUTES.DRAFT_LIST} element={ <PostListPage drafts="true" /> } />
          <Route exact path={'/:id'} element={ <PostPage/> } />
        </Routes>
      </article>
		</div>
	</Router>
);

export default App;
