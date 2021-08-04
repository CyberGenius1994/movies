import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilmsComponent from '../components/FilmsGrid/FilmsComponent/FilmsComponent';
import FilmPageComponent from '../components/Film/FilmPageComponent/FilmPageComponent';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <FilmsComponent />
      </Route>
      <Route path="/film/:id">
        <FilmPageComponent />
      </Route>
    </Switch>
  );
}

export default Routes;
