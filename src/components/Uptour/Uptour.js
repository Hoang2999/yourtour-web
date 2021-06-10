import React, { useEffect, useState } from "react";

import { firestore } from "../../firebase";

import "./Uptour.css";

function Uptour() {
  return (
    <div className="grid wide">
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Ảnh của chuyến đi</span>
          <input className="form-control1" type="text" />
          <button className="home-profile-btn">Thay đổi</button>
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Tên chuyến du lịch</span>
          <input className="form-control1" type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Giới thiệu về chuyến tham quan</span>
          <input className="form-control1" type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Những gì chúng ta sẽ làm</span>
          <input className="form-control1" type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-3">
          <span className="uptour__img">Thời gian chuyến đi</span>
          <input className="form-control1" type="text" />
        </div>
        <div class="col l-3">
          <span className="uptour__img">Số lượng khách</span>
          <input className="form-control1" type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Thể loại du lịch</span>
          <select
            type="select"
            className="form-control1"
            placeholder="Hãy chọn thể loại du lịch"
          >
            <option value="0">Khám phá ẩm thực</option>
          </select>
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Ngôn ngữ</span>
          <input className="form-control1" type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-3">
          <span className="uptour__img">Giá</span>
          <input className="form-control1" type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Số tài khoản</span>
          <input className="form-control1" type="text" />
        </div>
      </div>
      <div class="row uptour__container">
        <div class="col l-6">
          <span className="uptour__img">Lịch trình cụ thể</span>
          <span className="uptour__img1">1. Điểm dừng chân</span>
          <input className="form-control1" type="text" />
          <span className="uptour__img1">Giải thich</span>
          <input className="form-control1" type="text" />
        </div>
      </div>

      <button className="home-profile-btn" style={{ marginLeft: "0" }}>
        Thêm lịch trình
      </button>
    </div>
  );
}

export default Uptour;
