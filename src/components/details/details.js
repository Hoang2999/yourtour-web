import React, { Component} from 'react';
import "./details.css";
import "../grid.css";
import StarRatings from 'react-star-ratings';
import {
  Link
 } from 'react-router-dom'

 import { getToursInCity } from "../../firebase";
 export default class Details extends Component {
  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: this.props.match.params.id
    };
  }
  componentDidMount() {
    getToursInCity('tours', this.state.id).then((res) => {
      this.setState({
        data: res,
      });
    });
  }
    render() {
      console.log(this.state.id);
        return (
          <div className="grid wide">
            <div className="row sm-gutter details__container">
              <div
                className="details__container-list"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                {this.state.data.length > 0 &&
                  this.state.data.map((item, index) => (
                    <Link
                      to={
                          { 
                              pathname: `/moredetail/${item.id}`,
                              myCustomProps: item
                          } 
                        }
                      className="details__container-item"
                      style={{ width: "400px" }}
                    >
                      <img
                        src={item.tourguideImageCover}
                        className="home-product-item__img"
                        height="300px"
                        width="100%"
                      />
                      <a href="#" className="details__container-link">
                        Tận hưởng {item.cityID} với {item.tourguideName}
                      </a>
                      <div className="details__container-title">
                        <div className="details__container-desc">
                          {item.description}
                        </div>
                      </div>
                      <a href="#" className="details__container-link">
                        {item.name}
                      </a>
                      <p className="details__container-food">
                        {/* Khám phá ẩm thực đường phố tại Hà Nội */}
                        {item.category}
                      </p>
                      <span className="details__container-hour">
                        {item.price}$ / {item.time} giờ
                      </span>
                      <div className="home-product-item__rating">
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
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        );
    }
}