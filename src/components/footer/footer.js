import React, { Component } from "react";
import "./footer.css";
import "../grid.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="grid wide footer__content">
          <div className="row">
            <div className="col l-3">
              <h3 className="footer__heading">Contact us</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Phone: 0969876343
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Mail : yourtour@gmail.com
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-3">
              <h3 className="footer__heading">Support</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    COVID19 info for travelers
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Help Center for hosts
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Help Center for travelers
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Cancelation policy for guests
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-3">
              <h3 className="footer__heading">How to partner</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Become a host
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Become a partner
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Become an ambassador
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-3">
              <h3 className="footer__heading">About Withlocals</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Our story
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Press
                  </a>
                </li>
                <li className="footer-item">
                  <a href="" className="footer-item__link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="grid wide footer__text">
            <p>© 2021 | Withlocals | Privacy</p>
          </div>
        </div>
      </footer>
    );
  }
}
