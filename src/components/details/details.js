import React, { Component} from 'react';
import "./details.css";
import "../grid.css";
import {
  Link
 } from 'react-router-dom'

export default class Details extends Component {
    render() {
        return (
          <div className="grid wide">
            <div className="row sm-gutter details__container">
              <div className="col l-4 details__container-list">
                <Link to="/moredetail" className="details__container-item">
                  <img src={"img/img4.jpg"} style={{ width: "100%" }}></img>
                  <div className="details__container-title">
                    <div className="details__container-desc">
                      Tận hưởng Hanoi với
                    </div>
                    <a href="#" className="details__container-link">
                      Phuc Huynh
                    </a>
                  </div>
                  <p className="details__container-food">
                    Khám phá ẩm thực đường phố tại Hà Nội
                  </p>
                  <span className="details__container-hour">21$ / 3h</span>
                  <div className="home-product-item__rating">
                    <i className="home-product-item__star-gold fas fa-star"></i>
                    <i className="home-product-item__star-gold fas fa-star"></i>
                    <i className="home-product-item__star-gold fas fa-star"></i>
                    <i className="home-product-item__star-gold fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="home-product-item__match">4 / 5</span>
                  </div>
                </Link>
              </div>
              <div className="col l-4 details__container-list">
                <div className="details__container-item">
                  <img src={"img/img4.jpg"} style={{ width: "100%" }}></img>
                  <div className="details__container-title">
                    <div className="details__container-desc">
                      Tận hưởng Hanoi với
                    </div>
                    <a href="#" className="details__container-link">
                      Phuc Huynh
                    </a>
                  </div>
                  <p className="details__container-food">
                    Khám phá ẩm thực đường phố tại Hà Nội
                  </p>
                  <span className="details__container-hour">21$ / 3h</span>
                  <div className="home-product-item__rating">
                    <i className="home-product-item__star-gold fas fa-star"></i>
                    <i className="home-product-item__star-gold fas fa-star"></i>
                    <i className="home-product-item__star-gold fas fa-star"></i>
                    <i className="home-product-item__star-gold fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="home-product-item__match">4 / 5</span>
                  </div>
                </div>
              </div>
              <div className="col l-4 details__container-list">
                <div className="details__container-item">
                  <img src={"img/img4.jpg"} style={{ width: "100%" }}></img>
                  <div className="details__container-title">
                    <div className="details__container-desc">
                      Tận hưởng Hanoi với
                    </div>
                    <a href="#" className="details__container-link">
                      Phuc Huynh
                    </a>
                  </div>
                  <p className="details__container-food">
                    Khám phá ẩm thực đường phố tại Hà Nội
                  </p>
                  <span className="details__container-hour">21$ / 3h</span>
                  <div className="home-product-item__rating">
                    <i className="home-product-item__star-gold fas fa-star"></i>
                    <i className="home-product-item__star-gold fas fa-star"></i>
                    <i className="home-product-item__star-gold fas fa-star"></i>
                    <i className="home-product-item__star-gold fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="home-product-item__match">4 / 5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}