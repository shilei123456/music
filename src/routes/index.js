import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MiddleMusic from '../Musiccomponent/Middle/MiddleMusic/MiddleMusic';
import SeachMusic from '../Musiccomponent/SeachMusic/SeachMusic';
import UpMusic from '../Musiccomponent/UpMusic/UpMusic';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="middlemusic" component={MiddleMusic} />
    <Route path="seachmusic" component={SeachMusic} />
    <Route path="upmusic" component={UpMusic} />
  </Router>
);

export default Routes;
