import React from 'react'
import { Switch, Route } from 'react-router-dom';

import {Home, About, NotFound} from './pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;