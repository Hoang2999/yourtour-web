import React, { Component } from "react";
import "./moredetail.css";
import "../grid.css";
import { Link } from "react-router-dom";
import hoang from "../../img/hoang.jpg";
import StarRatings from 'react-star-ratings';
export default class moreDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.location.myCustomProps,
      rating: 0
    };
  }
  changeRating(newRating, name) {
    this.setState({
      rating: newRating,
    });
  }
  render() {
    const item = this.state.item
    console.log("item",item)
    return (
      <div className="grid wide">
        <div className="row sm-gutter">
          <div className="col l-8">
            {item && (
              <>
                <div className="row sm-gutter moredetail__container">
                  <div className="col l-12">
                    <div>
                      {" "}
                      <img
                        src={item.tourguideImageCover}
                        alt=""
                        style={{ width: "100%" }}
                      ></img>
                      <h1 className="moredetail__title">{item.name}</h1>
                      <p className="moredetail__decs">{item.introduce}</p>
                    </div>
                  </div>
                </div>
                <div className="row sm-gutter moredetail__body">
                  <div className="col l-4">
                    <i
                      className="moredetail__icon far fa-clock"
                      style={{
                        color: "var(--primary-color)",
                        fontSize: "1.2rem",
                      }}
                    ></i>
                    <span className="moredetail__location">
                      {item.time} giờ
                    </span>
                  </div>
                  <div className="col l-4">
                    <i
                      className="moredetail__icon fas fa-user-friends"
                      style={{
                        color: "var(--primary-color)",
                        fontSize: "1.2rem",
                      }}
                    ></i>
                    <span className="moredetail__location">
                      Nhóm có thể lên đến {item.numberPeople} người
                    </span>
                  </div>
                </div>
                <div className="row sm-gutter moredetail__body">
                  <div className="col l-4">
                    <i
                      className="moredetail__icon fas fa-utensils"
                      style={{
                        color: "var(--primary-color)",
                        fontSize: "1.2rem",
                      }}
                    ></i>
                    <span className="moredetail__location">
                      {item.category}
                    </span>
                  </div>
                  <div className="col l-4">
                    <i
                      className="moredetail__icon fas fa-globe"
                      style={{
                        color: "var(--primary-color)",
                        fontSize: "1.2rem",
                      }}
                    ></i>
                    <span className="moredetail__location">
                      {item.languages}
                    </span>
                  </div>
                </div>
                <div className="row sm-gutter moredetail__reasons">
                  <div className="col l-8">
                    <h1 className="moredetail__heading">
                      4 lý do để đặt tour để trải nghiệm
                    </h1>
                    <div className="row sm-gutter">
                      <div className="col l-6 moredetail__body">
                        <i
                          className="fas fa-check moredetail__resons-icons"
                          style={{ color: "var(--primary-color)" }}
                        ></i>
                        <span className="moredetail__reasons-body">
                          Khám phá qua các trò chơi & hoạt động vui nhộn
                        </span>
                      </div>
                      <div className="col l-6 moredetail__body">
                        <i
                          className="fas fa-check moredetail__resons-icons"
                          style={{ color: "var(--primary-color)" }}
                        ></i>
                        <span className="moredetail__reasons-body">
                          Thưởng thức một món kem cho trẻ em
                        </span>
                      </div>
                      <div className="col l-6 moredetail__body">
                        <i
                          className="fas fa-check moredetail__resons-icons"
                          style={{ color: "var(--primary-color)" }}
                        ></i>
                        <span className="moredetail__reasons-body">
                          100% trải nghiệm thân thiện với gia đình
                        </span>
                      </div>
                      <div className="col l-6 moredetail__body">
                        <i
                          className="fas fa-check moredetail__resons-icons"
                          style={{ color: "var(--primary-color)" }}
                        ></i>
                        <span className="moredetail__reasons-body">
                          Các quy định an toàn của địa phương được đưa ra để đảm
                          bảo sự thoải mái của bạn
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row sm-gutter moredetail__container">
                  <div className="col l-12">
                    <h1 className="moredetail__expect-title">
                      Những gì chúng ta sẽ làm
                    </h1>
                    <p className="moredetail__expect-decs">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="moredetail__pick">
                  <h1 className="moredetail__pick-title">
                    Những gì bạn có thể mong đợi
                  </h1>
                  <p className="moredetail__pick-desc">
                    Tất cả người dân địa phương của chúng tôi yêu thành phố của
                    họ và những gì họ làm. Tìm hiểu về câu chuyện cá nhân, niềm
                    đam mê và tính cách của họ, để bạn có thể chọn câu chuyện
                    yêu thích của mình.
                  </p>
                  <div className="row sm-gutter">
                    <div className="col l-6">
                      <Link to="/tourguide" className="details__container-list">
                        <div className="details__container-item">
                          <img
                            src={hoang}
                            style={{
                              width: "100%",
                              backgroundPosition: "center",
                            }}
                          ></img>
                          <div className="moredetails__container-title">
                            <div className="moredetails__container-desc">
                              Xin chào I am
                            </div>
                            <div className="moredetails__container-link">
                              {item.tourguideName}, Food and fun lover {item.tourguideName}
                            </div>
                          </div>
                          <div className="moredetails__container-speak">
                            <span className="moredetails__container-speaker">
                              I speak:
                            </span>
                            <span className="moredetails__container-language">
                              {" "}
                              {item.languages}, Vietnamese
                            </span>
                          </div>
                          <div className="moredetails__container-star">
                            <div className="moredetails__home-product-item__rating">
                            <StarRatings
                            rating={item.avgRating}
                            starRatedColor="var(--primary-color)"
                            numberOfStars={5}
                            name="rating"
                            starDimension="20px"
                            starSpacing="0"
                            isAggregateRating
                          />
                          <span className="rating__name">({item.avgRating.toFixed(1)})</span>
                            </div>
                            <button
                              className="moredetails__home-product-pick-me"
                              style={{
                                backgroundColor: "var(--white-color)",
                                color: "var(--primary-color)",
                              }}
                            >
                              Pick me
                            </button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="moredetail__plan">
                  <h1 className="moredetail__title">Đây là kế hoạch</h1>
                  <p className="moredetail__desc">
                    Kiểm tra kế hoạch bên dưới để biết những gì bạn sẽ làm với hướng dẫn viên địa phương của bạn.
                  </p>
                  <div className="row sm-gutter moredetail__dash">
                    <div className="col l-8">
                      <div className="moredetail__plan-meeting">
                        <h3 className="moredetail__meeting">Meeting point</h3>
                        <p className="moredetail__desc">
                          Lotus Water Puppet Theater - Hanoi
                        </p>
                      </div>
                    </div>
                    <div className="col l-8">
                      <div className="moredetail__plan-meeting">
                        <h3 className="moredetail__meeting">Ancient Temple</h3>
                        <p className="moredetail__desc">
                          After meeting your local host at the entrance of the
                          Lotus Water Puppet Theatre, make your way to this
                          beautiful ancient temple, which is one of the four
                          sacred temples in Hanoi
                        </p>
                      </div>
                    </div>
                    <div className="col l-8">
                      <div className="moredetail__plan-meeting">
                        <h3 className="moredetail__meeting">
                          Street Food Classic
                        </h3>
                        <p className="moredetail__desc">
                          Step into a typical Hanoian eatery, where you can try
                          a popular street food item consisting of steamed rice
                          rolls stuffed with pork, mushrooms, or both. Usually,
                          this dish is served with fried shallot dip, sweet and
                          sour fish sauce, a variety of fresh herbs and
                          lime-based sauce on the side
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="moredetail__comments">
                  <h1 className="moredetail__review">Reviews</h1>
                  <div className="row sm-gutter moredetail__contribute">
                    <div className="col l-8">
                      <div className="moredetails__avatar">
                        <img
                          src={hoang}
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                        />
                        <div className="moredetails__infor">
                          <div className="moredetails__name">Hieu</div>
                          <div className="moredetails__home-product-item__rating">
                          <StarRatings
                            rating={item.avgRating}
                            starRatedColor="var(--primary-color)"
                            numberOfStars={5}
                            name="rating"
                            starDimension="20px"
                            starSpacing="0"
                            isAggregateRating
                          />
                            <span className="moredetails__about">
                              (About local <Link to="/tourguide">{item.tourguideName}</Link>)
                            </span>
                          </div>
                          <span className="moredetails__date">
                            28 March 2020
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col l-8">
                      <p className="moredetail__feedback">
                        Hoang was amazing! The tour was a good pace and took us
                        to lots of local places we would never have found
                        ourselves. There was LOTS of food and we were all
                        stuffed full of delicious local cuisine by the end of
                        the day. As a group we all actually live in Hanoi but
                        wanted a bit more of a sense of the old quarter and Anne
                        provided exactly that. Her English is amazing ! And she
                        was super friendly and made us all feel very welcome and
                        looked after all day. Thank you Hoang ☺️
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="col l-4">
            <div className="booknow">
              <div className="booknow__heading">30$ mỗi người</div>
              <span className="booknow__child">Trẻ em miễn phí</span>
              <div className="booknow__rating">
                <StarRatings
                  starRatedColor="var(--primary-color)"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="0"
                  isAggregateRating
                />
              </div>
              <Link to="/payment" className="booknow__btn">
                Đặt chuyến đi
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
