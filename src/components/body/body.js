import React, { Component } from "react";
import Home from "../home/home";
import Login from "../login/login";
import Register from "../register/register";
import Details from "../details/details";
import moreDetail from "../moredetail/moredetail";
import tourGuide from "../tourguide-detail/tourguide";
import ProfileUser from "../ProfileUser/ProfileUser";
import payment from "../payment/payment";
import { Redirect, Route } from "react-router-dom";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/details/:id" component={Details} />
        <Route path="/moredetail/:id" component={moreDetail} />
        <Route path="/tourguide" component={tourGuide} />
        <Route path="/profile" component={ProfileUser} />
        <Route path="/payment" component={payment} />
      </div>
    );
  }
}
