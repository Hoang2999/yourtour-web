import React, { Component } from 'react';
import Home from "../home/home";
import Login from "../login/login";
import Register from "../register/register";
import Details from "../details/details"

import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'

export default class Body extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/details" component={Details} />
          </Switch>
        </Router>
      </div>
    );
  }
}