import 'bootstrap/dist/css/bootstrap.min.css';
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages';
import Dashboard from '././Dashboard';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login} />
        <Route exact  path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
       

      </Switch>
    </Router>
  );
}

export default App;
