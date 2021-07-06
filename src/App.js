import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './routers/routes';

function App() {
  return (
    <Switch>
      {routes.map((route, indx) => (
        <Route
          exact
          path={route.path}
          component={route.component}
          key={indx}
        />
      ))}
    </Switch>
  );
}

export default App;
