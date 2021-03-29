import React from 'react'
import { Switch } from 'react-router-dom';
import { RouteHandler } from './components';

import { Home, About, NotFound, SignIn, SignUp, AdPage } from './pages';

const Routes = () => {
  return (
    <Switch>
      <RouteHandler exact path="/">
        <Home />
      </RouteHandler>

      <RouteHandler exact path="/about">
        <About />
      </RouteHandler>

      <RouteHandler exact path="/signin">
        <SignIn />
      </RouteHandler>

      <RouteHandler exact path="/signup">
        <SignUp />
      </RouteHandler>

      <RouteHandler exact path="/ad/:id">
        <AdPage />
      </RouteHandler>

      <RouteHandler private exact path="/post-an-add">
        <About />
      </RouteHandler>

      <RouteHandler>
        <NotFound />
      </RouteHandler>
    </Switch>
  );
};

export default Routes;