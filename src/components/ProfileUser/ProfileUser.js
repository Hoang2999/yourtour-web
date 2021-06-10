import React, { Component, useEffect, useState } from "react";
import "./ProfileUser.css";
import "../grid.css";
import { firestore } from "../../firebase";

export default function ProfileUser() {
  let { uid } = JSON.parse(localStorage.getItem("currentUser"));
  let [user, setUser] = useState({});
  let [loading, setLoading] = useState(false);
  let inforUser = JSON.parse(localStorage.getItem("currentUser"))
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;
  function handleChangeFile() {
    let file = document.getElementById("upload");
    let image = URL.createObjectURL(file.files[0]);
    document.getElementById("image").src = image;
  }

  useEffect(() => {
    async function getData() {
      await firestore
        .collection("travelers")
        .doc(uid)
        .get()
        .then((item) => {
          setUser(item.data());
          setLoading(true);
        });
    }
    getData();
  }, []);

  function updateProfile() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let gender = document.getElementById("gender").value;
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let file = document.getElementById("upload").files[0];
    let reader = new FileReader();
    try {
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        await firestore
          .collection("travelers")
          .doc(uid)
          .update({
            birthday: `${year}-${month}-${day}`,
            gender,
            name: `${firstName} ${lastName}`,
            picture: reader.result,
          });
        alert("Success");
        window.location.reload();
      };
    } catch (err) {
      alert("Fail");
    }
  }

  if (inforUser) {
    if (loading) {
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
                    id="image"
                    src={user.picture}
                    style={{
                      width: "50%",
                      height: "50%",
                      borderRadius: "50%",
                      border: "3px solid var(--primary-color)",
                    }}
                  ></img>
                </div>
                <input
                  type="file"
                  id="upload"
                  onChange={handleChangeFile}
                  style={{ display: "none" }}
                />
                <button
                  className="home-profile-btn"
                  onClick={() => document.getElementById("upload").click()}
                >
                  Change profile picture
                </button>
                <div className="home-profile-detail">
                  <div className="home-group">
                    <span>First name</span>
                    <input
                      className="form-control"
                      id="firstname"
                      type="text"
                      defaultValue={
                        user
                          ? user.name.substring(
                              0,
                              inforUser.displayName.indexOf(" ")
                            )
                          : ""
                      }
                    ></input>
                  </div>
                  <div className="home-group">
                    <span>Last name</span>
                    <input
                      className="form-control"
                      id="lastname"
                      type="text"
                      defaultValue={
                        user
                          ? user.name.substring(
                              inforUser.displayName.lastIndexOf(" ") + 1
                            )
                          : ""
                      }
                    ></input>
                  </div>
                  <div className="home-group">
                    <span>Gender</span>
                    <select
                      id="gender"
                      defaultValue={user.gender === true ? true : false}
                      className="form-control"
                    >
                      <option value="-" disabled>
                        -
                      </option>
                      <option value={true}>Man</option>
                      <option value={false}>Women</option>
                    </select>
                  </div>
                  <div className="home-profile-date">
                    <select
                      type="select"
                      id="day"
                      defaultValue={user.birthday.split("-")[2]}
                      className="home-profile-birthday"
                    >
                      <option value="0" disabled>
                        Day
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <select
                      type="select"
                      id="month"
                      defaultValue={user.birthday.split("-")[1]}
                      className="home-profile-birthday"
                    >
                      <option value="0" disabled>
                        Month
                      </option>
                      <option value="1">Jan</option>
                      <option value="2">Feb</option>
                      <option value="3">March</option>
                      <option value="4">Apr</option>
                      <option value="5">May</option>
                    </select>
                    <select
                      type="select"
                      id="year"
                      defaultValue={user.birthday.split("-")[0]}
                      className="home-profile-birthday"
                    >
                      <option value="0" disabled>
                        Year
                      </option>
                      <option value="1999">1999</option>
                      <option value="2000">2000</option>
                      <option value="2001">2001</option>
                      <option value="2002">2002</option>
                      <option value="2003">2003</option>
                    </select>
                  </div>
                </div>
                <div className="home-profile-update-detail">
                  <button
                    onClick={updateProfile}
                    className="home-profile-update"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>dang load</h1>;
    }
  } else {
    window.location.href = "/login";
  }
}
