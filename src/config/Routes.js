import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import FilmIndex from '../pages/Film/index';
import FilmDetails from '../pages/Film/details';
import Specie from '../pages/Specie';
import Location from '../pages/Location';
import Person from '../pages/Person';
import Vehicle from '../pages/Vehicle';

const NoMatchRoute = () => <div>404 Page</div>;

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
        component={FilmIndex}
      />
      <Route
        path="/film/:filmId"
        exact 
        component={FilmDetails}
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
      <Route 
        component={NoMatchRoute} 
      />
    </Switch>
  )
}

export default Routes
