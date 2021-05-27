import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import "../grid.css";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import { auth } from "../../firebase";
import ProfilePage from "../Profile/ProfilePage";

export default function Header() {
  const wrapperRef = useRef(null);
  const [number, setNumber] = useState(1);
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [value, onChange] = useState(new Date());
  const [profile, setProfile] = useState(null);
  console.log(value);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setToggleCalendar(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    setInterval(() => {
      if (number < 3) {
        setNumber(number + 1);
      } else {
        setNumber(1);
      }
    }, 3000);
  }, []);
  auth.onAuthStateChanged((user) => {
    setProfile(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  });

  return (
    <div className="app">
      <div className="main">
        <img
          src={"img/img" + number + ".jpg"}
          style={{ width: "100%" }}
          alt=""
        />
        <header className="header">
          <nav className="header__navbar">
            <div className="header__logo hide-on-tablet">
              <a href="/home" className="header__logo-link">
                <svg
                  className="header__logo-img"
                  path
                  fill="orange"
                  width="45"
                  height="44"
                  viewBox="0 0 85 45"
                >
                  <defs>
                    <linearGradient
                      x1="-1.11022302e-14%"
                      y1="50%"
                      x2="100%"
                      y2="50%"
                      id="linearGradientLogo-1"
                    >
                      <stop stop-color="#E71575" offset="0%"></stop>
                      <stop stop-color="#A21880" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g fill="white">
                    <path
                      fill="#fff"
                      className="FillTransition-3pscu"
                      d="M55.674,20.3265 C53.9295,20.3265 52.5165,18.912 52.5165,17.1675 C52.5165,15.423 53.9295,14.0085 55.674,14.0085 C57.42,14.0085 58.8345,15.423 58.8345,17.1675 C58.8345,18.912 57.42,20.3265 55.674,20.3265 Z M61.8285,0 C74.181,0 84.195,10.0125 84.195,22.3665 C84.195,34.7175 74.181,44.7315 61.8285,44.7315 C54.4545,44.7315 47.9145,41.163 43.839,35.6595 C45.0165,33.762 45.9435,31.713 46.5825,29.568 C49.284,35.2755 55.095,39.225 61.8285,39.225 C71.139,39.225 78.687,31.677 78.687,22.3665 C78.687,13.0545 71.139,5.5065 61.8285,5.5065 C53.034,5.5065 45.8115,12.2415 45.039,20.8335 C44.997,21.3645 44.9535,21.8745 44.9055,22.3665 C44.718,23.916 44.5125,25.626 44.1075,27.639 C41.7375,37.446 32.9025,44.7315 22.3665,44.7315 C10.014,44.7315 0,34.7175 0,22.3665 C0,10.0125 10.014,0 22.3665,0 C29.7405,0 36.2805,3.5685 40.356,9.072 C39.1785,10.9695 38.2515,13.0185 37.6125,15.1635 C34.911,9.456 29.1,5.5065 22.3665,5.5065 C13.056,5.5065 5.508,13.0545 5.508,22.3665 C5.508,31.677 13.056,39.225 22.3665,39.225 C31.161,39.225 38.382,32.4915 39.156,23.898 C39.198,23.367 39.2415,22.857 39.2895,22.3665 C39.477,20.814 39.6825,19.1055 40.0875,17.0925 C42.4575,7.284 51.2925,0 61.8285,0 Z M52.0155,25.1955 C52.0155,24.7275 52.434,24.345 52.947,24.345 L70.674,24.345 C71.1855,24.345 71.6055,24.7275 71.6055,25.1955 C71.6055,30.606 67.2195,34.992 61.8105,34.992 C56.4,34.992 52.0155,30.606 52.0155,25.1955 Z M70.656,17.1675 C70.656,18.912 69.2415,20.3265 67.497,20.3265 C65.7525,20.3265 64.338,18.912 64.338,17.1675 C64.338,15.423 65.7525,14.0085 67.497,14.0085 C69.2415,14.0085 70.656,15.423 70.656,17.1675 Z M12.5715,25.1955 C12.5715,24.7275 12.99,24.345 13.503,24.345 L31.23,24.345 C31.7415,24.345 32.1615,24.7275 32.1615,25.1955 C32.1615,30.606 27.7755,34.992 22.3665,34.992 C16.9575,34.992 12.5715,30.606 12.5715,25.1955 Z M31.5285,17.1675 C31.5285,18.912 30.114,20.3265 28.3695,20.3265 C26.625,20.3265 25.2105,18.912 25.2105,17.1675 C25.2105,15.423 26.625,14.0085 28.3695,14.0085 C30.114,14.0085 31.5285,15.423 31.5285,17.1675 Z M16.548,20.3265 C14.802,20.3265 13.3875,18.912 13.3875,17.1675 C13.3875,15.423 14.802,14.0085 16.548,14.0085 C18.2925,14.0085 19.7055,15.423 19.7055,17.1675 C19.7055,18.912 18.2925,20.3265 16.548,20.3265 Z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
            {profile ? (
              <ProfilePage />
            ) : (
              <>
                <ul className="header__navbar-list">
                  <li className="header__navbar-item">
                    <a href="" className="header__navbar-link">
                      Become a host
                    </a>
                  </li>
                  <Link
                    to="/login"
                    className="header__navbar-item header__navbar-link"
                  >
                    Log in
                  </Link>

                  <Link
                    to="/register"
                    className="header__navbar-item header__navbar-link"
                  >
                    Sign up
                  </Link>
                </ul>
              </>
            )}
          </nav>
          <div className="header__container">
            <div className="header__text">
              <h1 className="header__title">Avoid the Crowds</h1>
              <h4 className="header__content">
                Book private tours & activities with locals worldwide
              </h4>
            </div>
            <div className="header__search">
              <div className="header__search-input-wrap">
                <i className="header__search-icon fas fa-search"></i>
                <input
                  type="text"
                  className="header__search-input"
                  placeholder="Where are you going?"
                />
              </div>
              <div className="calendar__container">
                <a
                  className="header__search-input-wrap1"
                  onClick={() => setToggleCalendar(!toggleCalendar)}
                >
                  <div className="header__search-input-text">
                    <div className="header__search-icon-text">
                      <i className="header__search-icon fas fa-table"></i>
                      <span
                        className="header__search-input"
                        style={{ color: "grey" }}
                      >
                        Enter date
                      </span>
                    </div>
                    <i className="header__search-icon fas fa-chevron-down"></i>
                  </div>
                </a>
                <div ref={wrapperRef}>
                  {toggleCalendar ? (
                    <Calendar
                      className="header__search-history"
                      onChange={onChange}
                      value={value}
                    />
                  ) : null}
                </div>
              </div>
              <button className="header__search-input-people">
                <div className="header__search-input-text1">
                  <span
                    className="header__search-input1"
                    style={{ color: "grey" }}
                  >
                    4 People
                  </span>
                  <i className="header__search-icon fas fa-chevron-down"></i>
                </div>
                <div className="header__navbar-user-menu">
                  <div className="header__navbar-user-item">
                    <div className="header__navbar-user-menu-people">
                      Adults
                    </div>
                    <div className="header__navbar-user-menu-count">
                      <i className="header__navbar-user-icon fas fa-minus"></i>
                      <span> 4 </span>
                      <i className="header__navbar-user-icon fas fa-plus"></i>
                    </div>
                  </div>
                  <div className="header__navbar-user-item">
                    <div className="header__navbar-user-menu-people">
                      Children
                    </div>
                    <div className="header__navbar-user-menu-count">
                      <i className="header__navbar-user-icon fas fa-minus"></i>
                      <span> 0 </span>
                      <i className="header__navbar-user-icon fas fa-plus"></i>
                    </div>
                  </div>
                </div>
              </button>
              <button className="header__search-btn">
                <span className="header__search-btn-icon">Search</span>
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
