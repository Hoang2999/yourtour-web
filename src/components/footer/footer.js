import React, { Component } from "react";
import "./footer.css";
import "../grid.css";

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
                src={"img/hoang.jpg"}
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
                src={"img/phong.jpg"}
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
                src={"img/phuc.jpg"}
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
                src={"img/quang.jpg"}
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
