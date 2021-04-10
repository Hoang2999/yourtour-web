import React, { Component } from "react";
import Home from "../home/home";
import Login from "../login/login";
import Register from "../register/register";
import Details from "../details/details";
import moreDetail from "../moredetail/moredetail";
import tourGuide from "../tourguide-detail/tourguide";
import { Redirect, Route } from "react-router-dom";

export default class Body extends Component {
  render() {
    return (
      <div>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/details" component={Details} />
          <Route path="/moredetail" component={moreDetail} />
          <Route path="/tourguide" component={tourGuide} />
      </div>
    );
  }
}
