import React, { Component } from "react";
import "./footer.css";
import "../grid.css";
import hoang from "../../img/hoang.jpg"
import phong from "../../img/phong.jpg"
import phuc from "../../img/phuc.jpg"
import quang from "../../img/quang.jpg"

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="grid wide footer__content">
          <div className="row">
            <div
              className="col l-3"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={hoang}
                style={{
                  width: "60%",
                  height: "60%",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  padding: "15px"
                }}
              ></img>
              <span className="footer__member">Hoàng</span>
            </div>
            <div
              className="col l-3"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <img
                src={phong}
                style={{
                  width: "60%",
                  height: "60%",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  padding: "15px"
                }}
              ></img>
              <span className="footer__member">Phong</span>
            </div>
            <div
              className="col l-3"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={phuc}
                style={{
                  width: "60%",
                  height: "60%",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  padding: "15px"
                }}
              ></img>
              <span className="footer__member">Phúc</span>
            </div>
            <div
              className="col l-3"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={quang}
                style={{
                  width: "60%",
                  height: "60%",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  padding: "15px"
                }}
              ></img>
              <span className="footer__member">Quang</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="grid wide footer__text">
            <p>Capstone project</p>
          </div>
        </div>
      </footer>
    );
  }
}
