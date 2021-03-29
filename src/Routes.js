import React from 'react'
import { Switch } from 'react-router-dom';
import { RouteHandler } from './components';

import { Home, About, NotFound, SignIn, SignUp, AdPage, AddAd } from './pages';

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
        <AddAd />
      </RouteHandler>

      <RouteHandler>
        <NotFound />
      </RouteHandler>
    </Switch>
  );
};

export default Routes;