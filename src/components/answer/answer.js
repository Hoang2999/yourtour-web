import React, { useEffect, useState } from 'react'

import { firestore } from '../../firebase'

import './answer.css'

function Answer() {
    return (
        <div className="modal">
      <div className="modal__overlay1"></div>
      <div className="modal__body">
        <form className="auth-form">
          <div className="auth-form__container">
            <div className="auth-form__header">
              <span className="auth-form__heading">
                Bạn tên gì?
              </span>
            </div>
            <input
                  id="password"
                  className="auth-form__input"
                />
          </div>
        </form>
      </div>
    </div>
    )
}

export default Answer;