import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './js/App';
import Sample from './js/components/Sample';

export default (
  <App>
    <Switch>
      <Route exact path="/" component={Sample} />
      <Route path="/auth/login" component={Sample} />
    </Switch>
  </App>
);
