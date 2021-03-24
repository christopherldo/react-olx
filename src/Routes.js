import React from 'react'
import { Switch, Route } from 'react-router-dom';

import { Home, About, NotFound, SignIn } from './pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/signin">
        <SignIn />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;