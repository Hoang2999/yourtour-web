import React, { Component } from "react";
import "./ProfileUser.css";
import "../grid.css";

export default class ProfileUser extends Component {
  render() {
    return (
      <div className="app__container">
        <div className="grid wide container__profile-user">
          <h1 className="container__profile-header">My Profile</h1>
        </div>
        <div className="row sm-gutter">
          <div className="col l-3 profile__user-category">
            <nav className="category">
              <ul className="category-list">
                <li className="category-item category-item--active">
                  <a href="#" className="category-item__link">
                    Step 1
                  </a>
                </li>
                <li className="category-item">
                  <a href="#" className="category-item__link">
                    Step 2
                  </a>
                </li>
                <li className="category-item">
                  <a href="#" className="category-item__link">
                    Step 3
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col l-5">
            <div className="home-profile">
              <span className="home-profile-heading">Introduce yourself</span>
              <div className="home-profile-avatar">
                <img
                  src={"img/img4.jpg"}
                  style={{
                    width: "50%",
                    height: "50%",
                    borderRadius: "50%",
                    border: "3px solid var(--primary-color)"
                  }}
                ></img>
              </div>
              <button className="home-profile-btn">Change profile picture</button>
              <div className="home-profile-detail">
                <div className="home-group">
                  <span>First name</span>
                  <input className="form-control" type="text" value="Phúc"></input>
                </div>
                <div className="home-group">
                  <span>Last name</span>
                  <input className="form-control" type="text" value="Huỳnh"></input>
                </div>
                <div className="home-group">
                  <span>Gender</span>
                  <select className="form-control">
                    <option value>-</option>
                    <option value="man">Man</option>
                    <option value="women">Women</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="home-profile-date">
                  <select type="select" className="home-profile-birthday">
                    <option value="0" disabled>Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <select type="select" className="home-profile-birthday">
                    <option value="0" disabled>Month</option>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">March</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                  </select>
                  <select type="select" className="home-profile-birthday">
                    <option value="0" disabled>Year</option>
                    <option value="1">1999</option>
                    <option value="2">2000</option>
                    <option value="3">2001</option>
                    <option value="4">2002</option>
                    <option value="5">2003</option>
                  </select>
                </div>
              </div>
              <div className="home-profile-update-detail">
                <button className="home-profile-update">Update</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
