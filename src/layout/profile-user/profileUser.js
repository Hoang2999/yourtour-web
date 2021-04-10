import React, { Component } from "react";
import "./profile-user.css";
import "../../components/grid.css";

export default class ProfileUser extends Component {
  render() {
    return (
      <div>
        <div className="grid wide container__profile-user">
          <h1 className="container__profile-header">My Profile</h1>
        </div>
        <div className="row sm-gutter">
          <div className="col l-1">AHIHI</div>
          <div className="col l-5"></div>
        </div>
      </div>
    );
  }
}
