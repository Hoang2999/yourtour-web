import React, { Component } from "react";
import Home from "../home/home";
import Login from "../login/login";
import Register from "../register/register";
import Details from "../details/details";
import moreDetail from "../moredetail/moredetail";
import tourGuide from "../tourguide-detail/tourguide";
import ProfileUser from "../ProfileUser/ProfileUser";
import payment from "../payment/payment";
import hoster from "../hoster/hoster";
import answer from "../answer/answer";
import { Redirect, Route } from "react-router-dom";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/details/:id" component={Details} />
        <Route path="/moredetail/:id" component={moreDetail} />
        <Route path="/tourguide" exact component={tourGuide} />
        <Route path="/profile" exact component={ProfileUser} />
        <Route path="/payment" exact component={payment} />
        <Route path="/hoster" exact component={hoster} />
        <Route path="/answer" exact component={answer} />
      </div>
    );
  }
}
