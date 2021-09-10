import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router, Switch, Route, Link,
  // @ts-ignore
} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipes from './components/Recipies/Recipes';

const App = ():JSX.Element => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={
              () => <Recipes />
}
        />
      </Switch>
    </div>
  </Router>
);

export default App;
