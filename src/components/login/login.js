import React, { Component } from "react";
import "./login.css";
import "../grid.css";

export default class Login extends Component {
  render() {
    return (
      <div className="modal__body">
        <div>
          <form className="auth-form">
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h3 className="auth-form__heading">
                  Log in with your email address
                </h3>
              </div>
              <div className="auth-form_form">
                <div className="auth-form__group">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="auth-form__input"
                    placeholder="Email"
                  />
                  <span className="form-message"></span>
                </div>
                <div className="auth-form__group">
                  <input
                    id="password"
                    name="password"
                    type="text"
                    className="auth-form__input"
                    placeholder="Password"
                  />
                  <span className="form-message"></span>
                </div>
                <div className="auth-form_aside">
                  <a href="#" className="auth-form_text-link">I forgot my password</a>
                </div>

                <div className="auth-form__controls">
                  <button
                    type="submit"
                    id="btn_register"
                    className="btn btn--primary"
                  >
                    ĐĂNG KÝ
                  </button>
                </div>
                <div className="auth-form__forgot">
                  <span className="auth-form__forgot-title">
                    Tôi chưa có tài khoản
                  </span>
                  <a href="#" className="auth-form_text-login">
                    {" "}
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
