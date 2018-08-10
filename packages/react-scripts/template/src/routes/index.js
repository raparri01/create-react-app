import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from "./Home";
import Page2 from "./Page2";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/Page2" component = {Page2} />
    </Switch>
  </BrowserRouter>
);
