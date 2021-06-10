import React, { Component } from "react";
import { getCitiesInCountry } from "../../firebase";
import "./home.css";
import "../grid.css";
import { Link } from "react-router-dom";
import Spinner from "react-spinner-material";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    getCitiesInCountry("countries/vietnam/cities").then((res) => {
      this.setState({
        data: res,
        loading: false,
      });
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="app__container">
        <div className="grid wide">
          <div className="reason-tour">
            <div className="container__text">
              <h4>Ưu tiên an toàn</h4>
              <h2>
                Những trải nghiệm du lịch của
                <span className="container__text-span"> bạn</span>
              </h2>
            </div>
            <div className="row sm-gutter app__content">
              <div class="col l-4 m-4 c-6">
                <div className="app__content-product">
                  <img src={"img/img4.jpg"} style={{ width: "150px" }}></img>
                  <div className="app__content-text">
                    <h1 className="app__content-text-heading">
                      1 | Luôn riêng tư và cá nhân
                    </h1>
                    <p className="app__content-text-body">
                      Không có người lạ, chỉ có bạn. Hoàn toàn tùy chỉnh chuyến đi của bạn theo nhu cầu của bạn.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col l-4 m-4 c-6">
                <div className="app__content-product">
                  <img src={"img/img5.jpg"} style={{ width: "150px" }}></img>
                  <div className="app__content-text">
                    <h1 className="app__content-text-heading">
                      2 | Được hướng dẫn bởi các chuyên gia trong nước
                    </h1>
                    <p className="app__content-text-body">
                      Từ thực tế lịch sử đến các quy định y tế cập nhật nhất.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col l-4 m-4 c-6">
                <div className="app__content-product">
                  <img src={"img/img6.jpg"} style={{ width: "150px" }}></img>
                  <div className="app__content-text">
                    <h1 className="app__content-text-heading">
                      3 | Không có đám đông
                    </h1>
                    <p className="app__content-text-body">
                      Trải nghiệm được thiết kế để đưa bạn thoát khỏi đám đông để đến các địa điểm địa phương đích thực.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-product">
            <h2>Các điểm đến hàng đầu</h2>
            <div className="row sm-gutter home-product-cover">
              <div className="col l-4 m-4 c-6">
                <div className="home-product-body">
                  <img
                    src={"img/da-lat-tu-tren-cao.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-product-content">
                    <div className="home-product-title">Đà lạt</div>
                    <span className="home-product-status">
                      TÌNH TRẠNG COVID 19:{" "}
                    </span>{" "}
                      Mở cửa cho khách du lịch từ các nước đã tiêm vaccine.
                    <p className="home-product-desc">
                      Chào đón bạn bằng nụ cười thân thiện và tinh thần tốt! Người dân địa phương của Đà Lạt rất háo hức cho bạn thấy những gì tốt nhất mà đất nước của họ mang lại.
                    </p>
                    <a href="#" className="home-product-link">
                      Xem tất cả mọi thử khi đến Đà Lạt
                    </a>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-4 c-6">
                <div className="home-product-body">
                  <img
                    src={"img/Da-nang.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-product-content">
                    <div className="home-product-title">Đà Nẵng</div>
                    <span className="home-product-status">
                      TÌNH TRẠNG COVID 19:{" "}
                    </span>{" "}
                      Mở cửa cho khách du lịch từ các nước đã tiêm vaccine.
                    <p className="home-product-desc">
                      Chào đón bạn bằng nụ cười thân thiện và tinh thần tốt! Người dân địa phương của Đà Nẵng rất háo hức cho bạn thấy những gì tốt nhất mà đất nước của họ mang lại.
                    </p>
                    <a href="#" className="home-product-link">
                      Xem tất cả mọi thử khi đến Đà Nẵng
                    </a>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-4 c-6">
                <div className="home-product-body">
                  <img
                    src={"img/Sapa1.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-product-content">
                    <div className="home-product-title">Sapa</div>
                    <span className="home-product-status">
                      TÌNH TRẠNG COVID 19:{" "}
                    </span>{" "}
                      Mở cửa cho khách du lịch từ các nước đã tiêm vaccine.
                    <p className="home-product-desc">
                      Chào đón bạn bằng nụ cười thân thiện và tinh thần tốt! Người dân địa phương của Sapa rất háo hức cho bạn thấy những gì tốt nhất mà đất nước của họ mang lại.
                    </p>
                    <a href="#" className="home-product-link">
                      Xem tất cả mọi thử khi đến Sapa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid wide">
          <div className="grid wide">
            <div className="container-product3">
              <h2 className="container-product3-h2">Các thành phố hàng đầu</h2>
              <div
                className="home-product3"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {!this.state.loading ? (
                  this.state.data.map((item, index) => (
                    <Link
                      to={`/details/${item.id}`}
                      className="row sm-gutter home-product3-cover"
                      style={{ width: "500px" }}
                    >
                      <div className="row sm-gutter home-product3-cover">
                        <div className="home-product3-body">
                          <div className="home-product3-content">
                            <div className="home-product3-title">{`${index + 1
                              } | ${item.name}`}</div>
                            <p className="home-product3-desc">
                              {item.description}
                            </p>
                            <a href="#" className="home-product3-link">
                              {`Khám phá ${item.name} với bạn bè`}
                            </a>
                          </div>
                          <img
                            src={item.image}
                            style={{
                              width: "190px",
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              borderRadius: "5px",
                            }}
                          ></img>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <Spinner
                    size={120}
                    spinnerColor={"#333"}
                    spinnerWidth={2}
                    visible={true}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
