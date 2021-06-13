import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore, logOut } from "../../firebase";
import "./Profile.css";
import { auth } from "../../firebase";
const ProfilePage = () => {
  let {uid} = JSON.parse(localStorage.getItem('currentUser'))
  const [userinFo , setUserInfor] = useState({})
  const handleLogout = () => {
    logOut().then((res) => {
      window.location.href = '/home'
    });
  };


  useEffect(() => {
    let dataRoot = []
    firestore
     .collection("travelers")
     .get()
     .then((doc) => {
        doc.forEach((i)=>{
          let data = i.data();
          if(data.uID === uid){
            dataRoot.push(data)
          }
        })
       localStorage.setItem('userInfor' , JSON.stringify(dataRoot[0]))
       setUserInfor(dataRoot[0])
     
     });
}, []);



    return (
      <div className="header__navbar-item header__navbar-user">
        <img src={userinFo.picture} alt="" className="header__navbar-user-img" />
        <span className="header__navbar-user-name">{userinFo.name}</span>
        <div className="header__navbar-user-menu">
          <Link to="/profile" className="header__navbar-user-item">Edit profile</Link>
          <Link to="/hoster" className="header__navbar-user-item">Become a host</Link>
          <Link to="/listchat" className="header__navbar-user-item">List chat</Link>
          <div className="header__navbar-user-item" onClick={handleLogout}>
            Sign out
          </div>
        </div>
      </div>
    );



};
export default ProfilePage;
