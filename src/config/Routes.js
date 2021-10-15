import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Film from '../pages/Film';
import Specie from '../pages/Specie';
import Location from '../pages/Location';
import Person from '../pages/Person';
import Vehicle from '../pages/Vehicle';

function Routes() {
  return (
    <Switch>
      <Route
        path='/'
        exact
        component={Home}
      />
      <Route
        path='/films'
        component={Film}
      />
      <Route
        path='/locations'
        component={Location}
      />
      <Route
        path='/people'
        component={Person}
      />
      <Route
        path='/species'
        component={Specie}
      />
      <Route
        path='/vehicles'
        component={Vehicle}
      />
    </Switch>
  )
}

export default Routes
