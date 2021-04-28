import React from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../../firebase';
import { auth } from '../../firebase';
const ProfilePage = () => {
  const handleLogout = () => {
    logOut().then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="header__navbar-item header__navbar-user">
      <img src="img/img5.jpg" alt="" className="header__navbar-user-img" />
      <span className="header__navbar-user-name">Phúc huỳnh</span>
      <Link to="/profile" className="header__navbar-user-menu">
        <li className="header__navbar-user-item">Edit profile</li>
        <li className="header__navbar-user-item" onClick={handleLogout}>
          Sign out
        </li>
      </Link>
    </div>
  );
};
export default ProfilePage;
