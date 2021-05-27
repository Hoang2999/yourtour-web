import React, { Component } from "react";
import "./payment.css";
import "../grid.css";
import { Link, useLocation } from "react-router-dom";
import meo from "../../img/meobeo.jpg";

export default function Payment(){
    const query = new URLSearchParams(useLocation().search)
    const total = query.get('total')
    console.log(total)

    return (
      <div>
        <div className="grid wide">
          <div className="row sm-gutter">
            <div className="col l-6 payment">
              <div className="payment__heading">
                <div className="payment__container">
                  <h1 className="payment">Khám phá ẩm thực đường phố Hà Nội</h1>
                  <span className="payment__tourguide">
                    <span className="payment__with">Với hướng dẫn viên</span>
                    <Link to="/tourguide" className="payment__nametourguide">
                      Hoang Phan
                    </Link>
                  </span>
                  <span className="payment__time">10:00 - 12 June</span>
                </div>
                <div className="payment__cat">
                  <img src={meo} style={{ width: "56%" }} />
                </div>
              </div>
              <div className="payment__money">
                <h4 className="payment__free">Miễn phí dành cho trẻ em</h4>
                <div className="payment__details">
                  <div className="payment__group">
                    <span className="payment__item">Tổng phụ</span>
                    <span className="payment__price">$105</span>
                  </div>
                  <div className="payment__group">
                    <span className="payment__item">Phí dịch vụ</span>
                    <span className="payment__price">$4.5</span>
                  </div>
                  <div className="payment__group">
                    <span className="payment__item1">Tổng</span>
                    <span className="payment__price1">$109.5</span>
                  </div>
                </div>
              </div>
              <div className="payment__now">
                <span className="payment__item2">Thanh toán ngay bây giờ</span>
                <span className="payment__price2">$109.5</span>
              </div>
              <div className="payment__choose">
                <h1 className="payment__choose-heading">Chọn thanh toán</h1>
                <span className="payment__desc">
                  Thanh toán này được mã hóa và thông tin của của luôn được bảo
                  mật
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
