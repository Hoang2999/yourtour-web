import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import './login.css';
import '../grid.css';
import { signInWithGoogle, signInUserByEmail } from '../../firebase';
import { auth } from '../../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const signInWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (e) {
      alert(e.message);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__body">
        {error !== null && <div>{error}</div>}
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
                  value={email}
                  onChange={onChangeHandler}
                />
                <span className="form-message"></span>
              </div>
              <div className="auth-form__group">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="auth-form__input"
                  placeholder="Password"
                  value={password}
                  onChange={onChangeHandler}
                />
                <span className="form-message"></span>
              </div>
              <div className="auth-form_aside">
                <a href="#" className="auth-form_text-link">
                  I forgot my password
                </a>
              </div>

              <div className="auth-form__controls">
                <button
                  type="submit"
                  id="btn_register"
                  className="btn btn--primary"
                  onClick={(event) => {
                    signInWithEmailAndPasswordHandler(event, email, password);
                  }}
                >
                  Đăng nhập
                </button>
              </div>
              <div className="auth-form__controls">
                <button
                  type="submit"
                  id="btn_register"
                  className="btn btn--danger"
                  onClick={() => signInWithGoogle()}
                >
                  Đăng nhập bằng google
                </button>
              </div>
              <div className="auth-form__forgot">
                <span className="auth-form__forgot-title">
                  Tôi chưa có tài khoản
                </span>
                <a href="/register" className="auth-form_text-login">
                  {' '}
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
