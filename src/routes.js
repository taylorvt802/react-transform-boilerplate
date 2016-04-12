import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Workspace from './Workspace';
import App from './App';
import Home from './Home';
import CommentApp from './CommentApp';

export default (
  <Route path="/" component={Workspace}>
    <IndexRoute path="/" component={Home}/>
    <Route path='/counter' component={App}/>
    <Route path='/comment' component={CommentApp}/>
  </Route>
)
