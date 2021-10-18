import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import FilmIndex from '../pages/Film/index';
import FilmDetails from '../pages/Film/details';
import LocationIndex from '../pages/Location/index';
import LocationDetails from '../pages/Location/details';
import PersonIndex from '../pages/Person/index';
import PersonDetails from '../pages/Person/details';
import SpecieIndex from '../pages/Specie/index';
import SpecieDetails from '../pages/Specie/details';
import VehicleIndex from '../pages/Vehicle/index';
import VehicleDetails from '../pages/Vehicle/details';

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
        exact 
        component={FilmIndex}
      />
      <Route
        path="/films/:filmId"
        exact 
        component={FilmDetails}
      />
      <Route
        path='/locations'
        exact 
        component={LocationIndex}
      />
      <Route
        path='/locations/:locationId'
        exact 
        component={LocationDetails}
      />
      <Route
        path='/people'
        exact 
        component={PersonIndex}
      />
      <Route
        path='/people/:personId'
        exact 
        component={PersonDetails}
      />
      <Route
        path='/species'
        exact 
        component={SpecieIndex}
      />
      <Route
        path='/species/:specieId'
        exact 
        component={SpecieDetails}
      />
      <Route
        path='/vehicles'
        exact 
        component={VehicleIndex}
      />
      <Route
        path='/vehicles/:vehicleId'
        exact 
        component={VehicleDetails}
      />
      <Route 
        component={NoMatchRoute} 
      />
    </Switch>
  )
}

export default Routes
