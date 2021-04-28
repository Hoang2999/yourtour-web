import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import '../grid.css';

import { auth, signInWithGoogle, generateUserDocument } from '../../firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password,
  ) => {
    event.preventDefault();
    try {
      const user = { email, password, fullName };
      generateUserDocument(user);
    } catch (error) {
      setError('Error Signing up with email and password');
    }

    setEmail('');
    setPassword('');
    setFullName('');
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'fullName') {
      setFullName(value);
    }
  };
  return (
    <div className="modal__body">
      <div>
        {error !== null && <div>{error}</div>}
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
                  name="fullName"
                  type="text"
                  className="auth-form__input"
                  placeholder="Full name"
                  value={fullName}
                  onChange={onChangeHandler}
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
                  defaultValue={email}
                  onChange={onChangeHandler}
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
                  value={password}
                  onChange={onChangeHandler}
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
                  onClick={(event) => {
                    createUserWithEmailAndPasswordHandler(
                      event,
                      email,
                      password,
                    );
                  }}
                >
                  ĐĂNG KÝ
                </button>
              </div>
              <div className="auth-form__controls">
                <button
                  type="submit"
                  id="btn_google"
                  className="btn btn--primary"
                  onClick={() => {
                    try {
                      signInWithGoogle();
                    } catch (error) {
                      console.error('Error signing in with Google', error);
                    }
                  }}
                >
                  Đăng nhập bằng google
                </button>
              </div>
              <div className="auth-form__forgot">
                <span className="auth-form__forgot-title">
                  Tôi đã có tài khoản
                </span>
                <a href="#" className="auth-form_text-login">
                  {' '}
                  <Link to="/login">Đăng nhập</Link>
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
