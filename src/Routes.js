import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  PureHtml,
  Dompurify
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/raw"
      />
      <RouteWithLayout
        component={PureHtml}
        exact
        layout={MainLayout}
        path="/raw"
      />
      <RouteWithLayout
        component={Dompurify}
        exact
        layout={MainLayout}
        path="/dompurify"
      />
      <Redirect to="/raw" />
    </Switch>
  );
};

export default Routes;
