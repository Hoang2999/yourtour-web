import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './register.css';
import '../grid.css';

import { auth, signInWithGoogle, generateUserDocument } from '../../firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password,
  ) => {
    event.preventDefault();
    try {
      const user = { email, password, fullName };
      generateUserDocument(user);
      history.push('/');
    } catch (e) {
      alert(e.message);
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
    <div className="modal">
      <div className="modal__overlay"></div>
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
                    type="password"
                    className="auth-form__input"
                    placeholder="Password"
                    value={password}
                    onChange={onChangeHandler}
                  />
                  <span className="form-message"></span>
                </div>
                <div className="auth-form_aside">
                  <p className="auth-form_policy-text">
                    B???ng vi???c ????ng k??, b???n ???? d???ng ?? v???i Yourtour v???
                    <a href="#" className="auth-form_text-link">
                      ??i???u kho???n d???ch v???
                    </a>
                    &
                    <a href="#" className="auth-form_text-link">
                      Ch??nh s??ch b???o m???t
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
                    ????NG K??
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
                    ????ng nh???p b???ng google
                  </button>
                </div>
                <div className="auth-form__forgot">
                  <span className="auth-form__forgot-title">
                    T??i ???? c?? t??i kho???n
                  </span>
                  <a href="#" className="auth-form_text-login">
                    {' '}
                    <Link to="/login">????ng nh???p</Link>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
