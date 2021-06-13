import React, { Component } from "react";
import "./footer.css";
import "../grid.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__bottom">
          <div className="grid wide footer__text">
            <p>Capstone project</p>
          </div>
        </div>
      </footer>
    );
  }
}
