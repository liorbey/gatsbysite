import React from "react";
import {Route, Router, Switch} from "react-router-dom";

import Index from './index.jsx'

export default () => (
    <Router>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  );