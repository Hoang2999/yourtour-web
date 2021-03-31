import React, { Component } from "react";
import "./moredetail.css";
import "../grid.css";

export default class Details extends Component {
  render() {
    return (
      <div className="grid wide">
        <div className="row sm-gutter moredetail__container">
          <div className="col l-12">
            <img src="img/img7.jpg" style={{ width: "100%" }}></img>
            <h1 className="moredetail__title">
              Hanoi's Best with Your Family: Highlights & Hidden Gems
            </h1>
            <p className="moredetail__decs">
              Have a blast discovering Hanoi with your family! Join a friendly
              local and see the best of the city while uncovering family
              friendly spots everyone will love. From amazing landmarks to
              unique hidden gems, your new local friend can create a
              personalized experience perfect for your family!
            </p>
          </div>
        </div>
        <div className="row sm-gutter moredetail__body">
          <div className="col l-3">
            <i className="moredetail__icon fas fa-map-marker-alt"></i>
            <span className="moredetail__location">Hanoi</span>
          </div>
          <div className="col l-3">
            <i className="moredetail__icon fas fa-map-marker-alt"></i>
            <span className="moredetail__location">Hanoi</span>
          </div>
        </div>
        <div className="row sm-gutter moredetail__body">
          <div className="col l-3">
            <i className="moredetail__icon fas fa-map-marker-alt"></i>
            <span className="moredetail__location">Hanoi</span>
          </div>
          <div className="col l-3">
            <i className="moredetail__icon fas fa-map-marker-alt"></i>
            <span className="moredetail__location">Hanoi</span>
          </div>
        </div>
        <div className="row sm-gutter moredetail__body">
          <div className="col l-3">
            <i className="moredetail__icon fas fa-map-marker-alt"></i>
            <span className="moredetail__location">Hanoi</span>
          </div>
        </div>
        <div className="row sm-gutter moredetail__reasons">
          <div className="col l-12">
            <h1 className="moredetail__heading">
              7 reasons to book this experience
            </h1>
            <div className="row sm-gutter">
              <div className="col l-6 moredetail__body">
                <i
                  className="fas fa-check moredetail__resons-icons"
                  style={{ color: "var(--primary-color)" }}
                ></i>
                <span className="moredetail__reasons-body">
                  Discover Hanoi through fun games & activities
                </span>
              </div>
              <div className="col l-6 moredetail__body">
                <i
                  className="fas fa-check moredetail__resons-icons"
                  style={{ color: "var(--primary-color)" }}
                ></i>
                <span className="moredetail__reasons-body">
                  Enjoy an ice cream treat for the kids
                </span>
              </div>
              <div className="col l-6 moredetail__body">
                <i
                  className="fas fa-check moredetail__resons-icons"
                  style={{ color: "var(--primary-color)" }}
                ></i>
                <span className="moredetail__reasons-body">
                  100% family friendly experience
                </span>
              </div>
              <div className="col l-6 moredetail__body">
                <i
                  className="fas fa-check moredetail__resons-icons"
                  style={{ color: "var(--primary-color)" }}
                ></i>
                <span className="moredetail__reasons-body">
                  Local safety regulations are put in place to ensure your
                  comfort
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row sm-gutter moredetail__container">
          <div className="col l-12">
            <h1 className="moredetail__expect-title">What you can expect</h1>
            <img src="img/img7.jpg" style={{ width: "100%" }}></img>
            <p className="moredetail__expect-decs">
              Experience Hanoi in the best family friendly way! With the help of
              a friendly local, your loved ones have the unique chance to see
              the true essence and beauty of this amazing city! This private
              tour is filled with fun activities & games to keep your kids
              entertained plus tasty treats along the way. Embrace the local
              vibes since the beginning and stroll through the biggest market in
              the city. Discover local fruits & products and let your kids
              explore through colors, flavors & smells. Walk down the narrow
              alleys and admire cool buildings, visit the oldest temple in the
              city and surprise your kids with some interesting facts about the
              Vietnamese culture. Through fun games & activities your kids will
              know all about Hanoi while you admire this beautiful sight. Enjoy
              a fun ride through the city, take a cyclo ride around Toy street
              and follow your nose to Ta Hien Street, famous for its delicious
              street food. Your new local friend will provide the best food
              recommendations for every member of your family! Peek into temples
              and traditional houses, hear the legend of the Hoàn Kiếm Lake and
              stroll around the French Quarter with its impressive Opera House
              and French colonial villas. When it comes to Trang Tien Street,
              your kids can't miss the oldest ice cream shop in Hanoi. With
              delicious and unique flavors, this place is a trademark among
              local family's and with just a taste you'll find out why! This
              family friendly experience gives you the best of both worlds:
              highlights you cannot miss and hidden gems that were hand-picked
              by your favorite local with interesting stops to make this tour
              truly unique! The locals can’t wait to share their unique insights
              with you. Remember, this tour can be customized to your and your
              kid’s preferences! Take a look at the videos, choose the local you
              like the most and get ready to enjoy the fabulous Hanoi with your
              family!
            </p>
          </div>
        </div>

        <div className="row sm-gutter moredetail__pick">
          <div className="col l-4">
            <h1 className="moredetail__pick-title">What you can expect</h1>
            <p className="moredetail__pick-desc">
              All our locals love their city and what they do. Learn about their
              personal stories, passions and personality, so you can choose your
              favorite one.
            </p>
            <div className="details__container-list">
              <div className="details__container-item">
                <img src={"img/img4.jpg"} style={{ width: "100%", backgroundPosition: "center"}}></img>
                <div className="moredetails__container-title">
                  <div className="moredetails__container-desc">
                    Xin chào I am
                  </div>
                  <div className="moredetails__container-link">
                    Phuc, Food and fun lover Phuc
                  </div>
                </div>
                <div className="moredetails__container-speak">
                  <span className="moredetails__container-speaker">
                    I speak:
                  </span>
                  <span className="moredetails__container-language">
                    {" "}
                    English, Vietnamese
                  </span>
                </div>
                <div className="moredetails__container-star">
                  <div className="moredetails__home-product-item__rating">
                    <i className="moredetails__home-product-item__star-gold fas fa-star"></i>
                    <i className="moredetails__home-product-item__star-gold fas fa-star"></i>
                    <i className="moredetails__home-product-item__star-gold fas fa-star"></i>
                    <i className="moredetails__home-product-item__star-gold fas fa-star"></i>
                    <i className="moredetails__home-product-item__star-gold fas fa-star"></i>
                    <span className="moredetails__home-product-item__match">
                      70 reviews
                    </span>
                  </div>
                  <button className="moredetails__home-product-pick-me" style={{backgroundColor: "var(--white-color)", color: "var(--primary-color)"}}>
                    Pick me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
