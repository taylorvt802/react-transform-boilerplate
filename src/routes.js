import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Workspace from './Workspace';
import App from './App';
import Home from './Home';

export default (
  <Route path="/" component={Workspace}>
    <IndexRoute path="/" component={Home}/>
    <Route path='/counter' component={App}/>
  </Route>
)
