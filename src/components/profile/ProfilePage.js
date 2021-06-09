import React from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../firebase";
import "./Profile.css";
import { auth } from "../../firebase";
const ProfilePage = () => {
  let user = JSON.parse(localStorage.getItem('currentUser'))
  const handleLogout = () => {
    logOut().then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="header__navbar-item header__navbar-user">
      <img src={user.photoURL} alt="" className="header__navbar-user-img" />
      <span className="header__navbar-user-name">{user.displayName}</span>
      <div className="header__navbar-user-menu">
        <Link to="/profile" className="header__navbar-user-item">Edit profile</Link>
        <Link to="/hoster" className="header__navbar-user-item">Become a host</Link>
        <div className="header__navbar-user-item" onClick={handleLogout}>
          Sign out
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
