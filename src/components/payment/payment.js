import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout'
import "./payment.css";
import "../grid.css";
import { Link, useLocation } from "react-router-dom";
import meo from "../../img/meobeo.jpg";

export default function Payment() {
  const query = new URLSearchParams(useLocation().search)
  const total = query.get('total')
  const dateTime = query.get('time')
  function onToken(price) {
    return (token) => {
      let data = { price: parseInt(price) * 100, stripeTokenId: token.id }
      console.log(token.id);
      fetch('http://localhost:4000/payment', {
        method: 'POST', headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => alert(data.message))
    }
  }

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
                <span className="payment__time">{ dateTime.substring(dateTime.lastIndexOf('/') + 1)}-{dateTime.substring(0 ,dateTime.lastIndexOf('/'))}</span>
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
                  <span className="payment__price">${total}</span>
                </div>
                <div className="payment__group">
                  <span className="payment__item">Phí dịch vụ</span>
                  <span className="payment__price">$0</span>
                </div>
                <div className="payment__group">
                  <span className="payment__item1">Tổng</span>
                  <span className="payment__price1">${total}</span>
                </div>
              </div>
            </div>
            <div className="payment__now">
              <span className="payment__item2">Thanh toán ngay bây giờ</span>
              <span className="payment__price2">${total}</span>
            </div>
            <div className="payment__choose">
              <h1 className="payment__choose-heading">Chọn thanh toán</h1>
              <span className="payment__desc">
                Thanh toán này được mã hóa và thông tin của của luôn được bảo
                mật
              </span>
            </div>

            <StripeCheckout
              token={onToken(total)}
              stripeKey='pk_test_51IEuuFE5tUNZ5fWU8JPgPbxIFWtzNjdXXAPJIYo5v0FLBdYjtJEXk0xyOoNP21qr5K5wSPsXQIpWp0AXzKk6cYmD00LrYN5j6R'
              amount={parseInt(total) * 100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

