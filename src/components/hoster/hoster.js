import React, { Component } from "react";
import "../grid.css";
import "./hoster.css";
import a from "../../img/a.jpg";
import b from "../../img/b.jpg";

export default class hoster extends Component {
    render() {
        return (
          <div className="hoster__container">
            <div className="hoster__heading">
              <img src={a} alt="" className="hoster__heading-img" />
              <div className="hoster__makemoney">
                <h1 className="hoster__makemoney-title">
                  Kiếm tiền bằng những gì bạn yêu thích
                </h1>
                <h2 className="hoster__makemoney-title1">
                  Chia sẻ niềm đam mê và tình yêu của bạn đối với trải nghiệm
                  chuyến đi của bạn
                </h2>
              </div>
            </div>
            <div className="hoster__what">
              <h2 className="hoster__what-title">Your tour là gì ?</h2>
              <div className="hoster__what-text">
                <p className="hoster__what-desc">
                  Đó là một nền tảng miễn phí cho phép người dân địa phương, như
                  bạn, kiếm tiền bằng cách tổ chức chuyến tham quan hoặc trải
                  nghiệm riêng tại thành phố của họ.
                </p>
              </div>
            </div>
            <div className="hoster__pr">
              <img src={b} alt="" className="hoster__heading-img" />
            </div>

            <div class="Block-3bTS9 Container-qudrE">
              <div>
                <div className="Container-1Lm4s">
                  <h2 className="Title-2EW9m">
                    Lợi ích của việc trở thành người dẫn viên du lịch Yourtour
                  </h2>
                  <div className="ContentContainer-1w9zx">
                    <div className="ContentItem-1Zh9W">
                      <div className="IconContainer-2MqjG">
                        <svg width="56" height="48" viewBox="0 0 85 45">
                          <defs>
                            <linearGradient
                              x1="-1.11022302e-14%"
                              y1="50%"
                              x2="100%"
                              y2="50%"
                              id="linearGradientLogo-1"
                            >
                              <stop stop-color="#E71575" offset="0%"></stop>
                              <stop stop-color="#A21880" offset="100%"></stop>
                            </linearGradient>
                          </defs>
                          <g fill="#4A4A4A">
                            <path
                              className="FillTransition-3pscu"
                              d="M55.674,20.3265 C53.9295,20.3265 52.5165,18.912 52.5165,17.1675 C52.5165,15.423 53.9295,14.0085 55.674,14.0085 C57.42,14.0085 58.8345,15.423 58.8345,17.1675 C58.8345,18.912 57.42,20.3265 55.674,20.3265 Z M61.8285,0 C74.181,0 84.195,10.0125 84.195,22.3665 C84.195,34.7175 74.181,44.7315 61.8285,44.7315 C54.4545,44.7315 47.9145,41.163 43.839,35.6595 C45.0165,33.762 45.9435,31.713 46.5825,29.568 C49.284,35.2755 55.095,39.225 61.8285,39.225 C71.139,39.225 78.687,31.677 78.687,22.3665 C78.687,13.0545 71.139,5.5065 61.8285,5.5065 C53.034,5.5065 45.8115,12.2415 45.039,20.8335 C44.997,21.3645 44.9535,21.8745 44.9055,22.3665 C44.718,23.916 44.5125,25.626 44.1075,27.639 C41.7375,37.446 32.9025,44.7315 22.3665,44.7315 C10.014,44.7315 0,34.7175 0,22.3665 C0,10.0125 10.014,0 22.3665,0 C29.7405,0 36.2805,3.5685 40.356,9.072 C39.1785,10.9695 38.2515,13.0185 37.6125,15.1635 C34.911,9.456 29.1,5.5065 22.3665,5.5065 C13.056,5.5065 5.508,13.0545 5.508,22.3665 C5.508,31.677 13.056,39.225 22.3665,39.225 C31.161,39.225 38.382,32.4915 39.156,23.898 C39.198,23.367 39.2415,22.857 39.2895,22.3665 C39.477,20.814 39.6825,19.1055 40.0875,17.0925 C42.4575,7.284 51.2925,0 61.8285,0 Z M52.0155,25.1955 C52.0155,24.7275 52.434,24.345 52.947,24.345 L70.674,24.345 C71.1855,24.345 71.6055,24.7275 71.6055,25.1955 C71.6055,30.606 67.2195,34.992 61.8105,34.992 C56.4,34.992 52.0155,30.606 52.0155,25.1955 Z M70.656,17.1675 C70.656,18.912 69.2415,20.3265 67.497,20.3265 C65.7525,20.3265 64.338,18.912 64.338,17.1675 C64.338,15.423 65.7525,14.0085 67.497,14.0085 C69.2415,14.0085 70.656,15.423 70.656,17.1675 Z M12.5715,25.1955 C12.5715,24.7275 12.99,24.345 13.503,24.345 L31.23,24.345 C31.7415,24.345 32.1615,24.7275 32.1615,25.1955 C32.1615,30.606 27.7755,34.992 22.3665,34.992 C16.9575,34.992 12.5715,30.606 12.5715,25.1955 Z M31.5285,17.1675 C31.5285,18.912 30.114,20.3265 28.3695,20.3265 C26.625,20.3265 25.2105,18.912 25.2105,17.1675 C25.2105,15.423 26.625,14.0085 28.3695,14.0085 C30.114,14.0085 31.5285,15.423 31.5285,17.1675 Z M16.548,20.3265 C14.802,20.3265 13.3875,18.912 13.3875,17.1675 C13.3875,15.423 14.802,14.0085 16.548,14.0085 C18.2925,14.0085 19.7055,15.423 19.7055,17.1675 C19.7055,18.912 18.2925,20.3265 16.548,20.3265 Z"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <h3 className="ContentTitle-38Adf">
                        Kiếm tiền khi làm những gì bạn yêu thích
                      </h3>
                      <p className="ContentText-22lIP">
                        Nếu bạn yêu thành phố của mình tại sao không chia sẻ nó
                        với phần còn lại của thế giới? Thậm chí tốt hơn, tại sao
                        không kiếm một số tiền trong khi làm như vậy. Ở đây, bạn
                        thiết lập giá của riêng bạn.
                      </p>
                    </div>
                    <div className="ContentItem-1Zh9W">
                      <div className="IconContainer-2MqjG">
                        <svg
                          fill="#4A4A4A"
                          width="40"
                          height="40"
                          viewBox="0 0 20 20"
                        >
                          <g>
                            <path d="M16.529,15.021 L16.742,14.628 C16.267,14.371 15.751,14.148 15.208,13.953 C15.47,12.965 15.642,11.891 15.701,10.752 L18.258,10.752 C18.088,12.351 17.466,13.813 16.529,15.021 Z M13.676,17.382 C14.102,16.777 14.474,16.07 14.78,15.281 C15.17,15.423 15.531,15.593 15.88,15.772 C15.241,16.422 14.496,16.965 13.676,17.382 Z M1.449,10.752 L4.007,10.752 C4.068,11.947 4.255,13.069 4.54,14.094 C4.005,14.309 3.503,14.556 3.04,14.834 C2.181,13.665 1.611,12.27 1.449,10.752 Z M3.322,4.495 L3.037,4.998 C3.496,5.257 3.992,5.487 4.518,5.687 C4.215,6.805 4.033,8.041 3.995,9.352 L1.425,9.352 C1.534,7.515 2.221,5.833 3.322,4.495 Z M10.554,9.352 L10.554,6.584 C11.704,6.538 12.811,6.375 13.841,6.108 C14.11,7.102 14.275,8.199 14.313,9.352 L10.554,9.352 Z M10.554,13.129 L10.554,10.752 L14.3,10.752 C14.241,11.745 14.084,12.687 13.853,13.553 C12.814,13.3 11.701,13.163 10.554,13.129 Z M10.554,18.187 L10.554,14.53 C11.55,14.56 12.516,14.671 13.415,14.882 C12.727,16.6 11.708,17.827 10.554,18.187 Z M6.031,17.382 C5.273,16.997 4.582,16.502 3.977,15.917 C4.292,15.741 4.627,15.577 4.984,15.43 C5.279,16.161 5.632,16.815 6.031,17.382 Z M9.154,14.532 L9.154,18.187 C8.023,17.834 7.021,16.65 6.334,14.984 C7.216,14.748 8.169,14.59 9.154,14.532 Z M9.154,10.752 L9.154,13.129 C8.004,13.191 6.902,13.371 5.881,13.653 C5.634,12.759 5.469,11.782 5.408,10.752 L9.154,10.752 Z M9.154,6.565 L9.154,9.352 L5.394,9.352 C5.432,8.195 5.599,7.093 5.869,6.097 C6.899,6.366 8.007,6.518 9.154,6.565 Z M4.955,4.349 C4.582,4.205 4.233,4.038 3.9,3.86 C4.522,3.242 5.242,2.725 6.031,2.324 C5.619,2.911 5.256,3.589 4.955,4.349 Z M9.154,1.519 L9.154,5.166 C8.16,5.121 7.203,4.995 6.313,4.772 C7.002,3.081 8.011,1.875 9.154,1.519 Z M13.676,2.324 C14.464,2.725 15.183,3.24 15.804,3.856 C15.47,4.036 15.129,4.209 14.754,4.354 C14.454,3.592 14.09,2.912 13.676,2.324 Z M10.554,1.519 C11.697,1.876 12.708,3.082 13.395,4.774 C12.508,4.998 11.549,5.121 10.554,5.165 L10.554,1.519 Z M18.282,9.352 L15.713,9.352 C15.675,8.04 15.493,6.803 15.188,5.685 C15.739,5.476 16.258,5.235 16.734,4.959 C17.63,6.214 18.185,7.721 18.282,9.352 Z M9.854,0 C4.421,0 0,4.419 0,9.853 C0,15.287 4.421,19.707 9.854,19.707 C15.288,19.707 19.708,15.287 19.708,9.853 C19.708,4.419 15.288,0 9.854,0 Z"></path>
                          </g>
                        </svg>
                      </div>
                      <h3 className="ContentTitle-38Adf">
                        Kết nối trên toàn thế giới với những người như bạn
                      </h3>
                      <p className="ContentText-22lIP">
                        Gặp gỡ những người từ khắp nơi trên thế giới có cùng đam
                        mê và sở thích như bạn. Tạo ra những kỷ niệm cho cuộc
                        đời và những kết nối mới.
                      </p>
                    </div>
                    <div className="ContentItem-1Zh9W">
                      <div className="IconContainer-2MqjG">
                        <svg width="40" height="40" viewBox="0 0 16 14">
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="#4A4A4A"
                            fill-rule="evenodd"
                          >
                            <path d="M11.4261,-1.77635684e-15 C10.0261,-1.77635684e-15 8.7261,0.665 7.9051,1.77 C7.0851,0.665 5.7851,-1.77635684e-15 4.3851,-1.77635684e-15 C1.9671,-1.77635684e-15 0.0001,1.967 0.0001,4.385 C0.0001,5.184 0.2171,5.966 0.6271,6.646 L0.6341,6.658 C2.4731,9.661 7.4641,13.221 7.6761,13.371 C7.7421,13.418 7.8201,13.441 7.8961,13.441 L7.9161,13.441 C7.9921,13.441 8.0691,13.418 8.1351,13.371 C8.3471,13.221 13.3381,9.661 15.1771,6.658 C15.1791,6.654 15.1821,6.65 15.1841,6.646 C15.5941,5.966 15.8111,5.184 15.8111,4.385 C15.8111,1.967 13.8441,-1.77635684e-15 11.4261,-1.77635684e-15"></path>
                          </g>
                        </svg>
                      </div>
                      <h3 className="ContentTitle-38Adf">
                        Chia sẻ niềm đam mê của bạn, theo cách của riêng bạn!
                      </h3>
                      <p className="ContentText-22lIP">
                        Còn cách nào tốt hơn để hiển thị một thành phố hơn là
                        qua con mắt của một người dân địa phương! Tạo ra một
                        trải nghiệm có một không hai, từ một lớp học nấu ăn đến
                        một chuyến tham quan ngoài lề đường hay một hội thảo
                        khiêu vũ. Sự lựa chọn là của bạn!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="HowItWorks-3j6iG">
              <div className="Block-3bTS9">
                <h2 className="Title-36YR1">Bắt đầu nào!</h2>
                <ul className="HowItWorksList-1k44J">
                  <li className="HowItWorksItem-3RtnW">
                    <h4 className="HowItWorksItemTitle-1gmsL">
                      Tạo tài khoản Your tour của bạn
                    </h4>
                    <div>
                      Đăng ký và thiết lập hồ sơ của bạn. Bạn co săn san để tạo
                      một tai khoản? Sau đó, hãy bắt đầu với ứng dụng lưu trữ
                      của bạn.
                    </div>
                  </li>
                  <li className="HowItWorksItem-3RtnW">
                    <h4 className="HowItWorksItemTitle-1gmsL">
                      Trả lời một bảng câu hỏi đơn giản
                    </h4>
                    <div>
                      Chúng tôi muốn biết thêm từ bạn. Nó sẽ giúp chúng tôi có
                      được ý tưởng về những gì bạn thực sự đam mê.
                    </div>
                  </li>
                  <li className="HowItWorksItem-3RtnW">
                    <h4 className="HowItWorksItemTitle-1gmsL">
                      Chúng ta sẽ giữ liên lạc
                    </h4>
                    <div>
                      Gửi bảng câu hỏi của bạn và thế là xong! Sau khi chúng tôi
                      xem xét đơn đăng ký của bạn, nhóm của chúng tôi sẽ liên hệ
                      với bạn.
                    </div>
                  </li>
                </ul>
                <a className="GetStarted-7z2kJ" href="/">
                  <button className="Button-2iSbC Inverted-2S2Z-">
                    Bắt đầu nào!
                  </button>
                </a>
              </div>
            </section>
          </div>
        );
    }
}