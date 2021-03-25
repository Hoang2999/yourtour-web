import React, { Component } from "react";
import "./register.css";
import "../grid.css";

export default class Register extends Component {
  render() {
    return (
      <div className="modal__body">
        <div>
          <form className="auth-form">
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h3 className="auth-form__heading">
                  Sign up with your email address
                </h3>
              </div>
              <div className="auth-form_form">
                <div className="auth-form__group">
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    className="auth-form__input"
                    placeholder="First name"
                  />
                  <span className="form-message"></span>
                </div>
                <div className="auth-form__group">
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    className="auth-form__input"
                    placeholder="Last name"
                  />
                  <span className="form-message"></span>
                </div>
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
                <div className="auth-form__group">
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    className="auth-form__input"
                    placeholder="Confirm password"
                  />
                  <span className="form-message"></span>
                </div>
                <div className="auth-form_aside">
                  <p className="auth-form_policy-text">
                    Bằng việc đăng ký, bạn đã dồng ý với Yourtour về
                    <a href="#" className="auth-form_text-link">
                      Điều khoản dịch vụ
                    </a>
                    &
                    <a href="#" className="auth-form_text-link">
                      Chính sách bảo mật
                    </a>
                  </p>
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
                  <span className="auth-form__forgot-title">Tôi đã có tài khoản</span>
                  <a href="#" className="auth-form_text-login"> Log in</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
