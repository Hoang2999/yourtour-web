import React, { Component } from "react";
import "./body.css";
import "../grid.css";

export default class Body extends Component {
  render() {
    return (
      <div className="app__container">
        <div className="grid wide">
          <div className="reason-tour">
            <div className="container__text">
              <h4>Prioritizing safety</h4>
              <h2>
                Withlocals experiences are
                <span className="container__text-span"> always</span>
              </h2>
            </div>
            <div className="row sm-gutter app__content">
              <div class="col l-4 m-4 c-6">
                <div className="app__content-product">
                  <img src={"img/img4.jpg"} style={{ width: "150px" }}></img>
                  <div className="app__content-text">
                    <h1 className="app__content-text-heading">
                      1 | Always private & personal
                    </h1>
                    <p className="app__content-text-body">
                      No strangers, just you. Fully customize your trip to your
                      needs.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col l-4 m-4 c-6">
                <div className="app__content-product">
                  <img src={"img/img5.jpg"} style={{ width: "150px" }}></img>
                  <div className="app__content-text">
                    <h1 className="app__content-text-heading">
                      2 | Guided by local experts
                    </h1>
                    <p className="app__content-text-body">
                      From historical facts to the most up-to-date health
                      regulations.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col l-4 m-4 c-6">
                <div className="app__content-product">
                  <img src={"img/img6.jpg"} style={{ width: "150px" }}></img>
                  <div className="app__content-text">
                    <h1 className="app__content-text-heading">
                      3 | Without crowds
                    </h1>
                    <p className="app__content-text-body">
                      Experiences designed to take you away from the crowds
                      towards authentic local spots.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-product">
            <h2>Top Withlocals destinations</h2>
            <div className="row sm-gutter home-product-cover">
              <div className="col l-4 m-4 c-6">
                <div className="home-product-body">
                  <img
                    src={"img/img7.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-product-content">
                    <div className="home-product-title">the Netherlands</div>
                    <span className="home-product-status">
                      COVID 19 STATUS :{" "}
                    </span>{" "}
                    Open for travelers from EU and Schengen countries.
                    <p className="home-product-desc">
                      Welcoming you with a friendly smile and good spirit! The
                      locals of the Netherlands are eager to show you the best
                      their country has to offer.
                    </p>
                    <a href="#" className="home-product-link">
                      View all things to do in the Netherlands
                    </a>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-4 c-6">
                <div className="home-product-body">
                  <img
                    src={"img/img7.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-product-content">
                    <div className="home-product-title">the Netherlands</div>
                    <span className="home-product-status">
                      COVID 19 STATUS :{" "}
                    </span>{" "}
                    Open for travelers from EU and Schengen countries.
                    <p className="home-product-desc">
                      Welcoming you with a friendly smile and good spirit! The
                      locals of the Netherlands are eager to show you the best
                      their country has to offer.
                    </p>
                    <a href="#" className="home-product-link">
                      View all things to do in the Netherlands
                    </a>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-4 c-6">
                <div className="home-product-body">
                  <img
                    src={"img/img7.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-product-content">
                    <div className="home-product-title">the Netherlands</div>
                    <span className="home-product-status">
                      COVID 19 STATUS :{" "}
                    </span>{" "}
                    Open for travelers from EU and Schengen countries.
                    <p className="home-product-desc">
                      Welcoming you with a friendly smile and good spirit! The
                      locals of the Netherlands are eager to show you the best
                      their country has to offer.
                    </p>
                    <a href="#" className="home-product-link">
                      View all things to do in the Netherlands
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-formality">
            <h2>Explore Withlocals</h2>
            <p className="home-formality-p">
              All of our tours and activities are: • Private • Personalized •
              With the local of your choice
            </p>
            <div className="row sm-gutter home-formality-cover">
              <a href="#" className="col l-2 m-4 c-6">
                <div className="home-formality-body">
                  <img
                    src={"img/img7.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-formality-content">
                    <div className="home-formality-title">Food tour</div>
                  </div>
                </div>
              </a>
              <a href="#" className="col l-2 m-4 c-6">
                <div className="home-formality-body">
                  <img
                    src={"img/img7.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-formality-content">
                    <div className="home-formality-title">Walking tour</div>
                  </div>
                </div>
              </a>
              <a href="#" className="col l-2 m-4 c-6">
                <div className="home-formality-body">
                  <img
                    src={"img/img7.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-formality-content">
                    <div className="home-formality-title">Day trips</div>
                  </div>
                </div>
              </a>
              <a href="#" className="col l-2 m-4 c-6">
                <div className="home-formality-body">
                  <img
                    src={"img/img7.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-formality-content">
                    <div className="home-formality-title">Family friendly</div>
                  </div>
                </div>
              </a>
              <a href="#" className="col l-2 m-4 c-6">
                <div className="home-formality-body">
                  <img
                    src={"img/img7.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-formality-content">
                    <div className="home-formality-title">Night tour</div>
                  </div>
                </div>
              </a>
              <a href="#" className="col l-2 m-4 c-6">
                <div className="home-formality-body">
                  <img
                    src={"img/img7.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-formality-content">
                    <div className="home-formality-title">Bike tour</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="home-introduce">
          <div className="home-introduce-cover">
            <img
              className="home-introduce__img"
              src={"img/img9.jpg"}
              style={{ width: "162px", height: "112px" }}
            ></img>
            <div className="grid wide home-introduce-body">
              <div className="home-introduce-content">
                <div className="home-introduce-title">
                  <svg
                    class="Logo-1FtTB"
                    width="85"
                    height="45"
                    viewBox="0 0 300 45"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M169.518,12.687 C165.624,12.687 163.0725,14.6115 161.9085,16.9395 L161.9085,2.616 L155.4195,2.616 L155.4195,36.6345 L161.9085,36.6345 L161.9085,23.1165 C161.9085,19.6695 164.0115,17.9685 166.788,17.9685 C169.653,17.9685 170.9055,19.491 170.9055,22.668 L170.9055,36.6345 L177.396,36.6345 L177.396,21.729 C177.396,15.462 174.1275,12.687 169.518,12.687 Z M180.9675,36.6345 L187.413,36.6345 L187.413,2.616 L180.9675,2.616 L180.9675,36.6345 Z M147.6705,29.115 L147.6705,17.835 L152.5935,17.835 L152.5935,13.224 L147.6705,13.224 L147.6705,2.616 L141.225,2.616 L141.225,13.224 L138.225,13.224 L138.225,17.835 L141.225,17.835 L141.225,29.6955 C141.225,34.575 143.865,37.0815 148.7895,37.0815 C150.5355,37.0815 151.833,36.768 152.7285,36.4545 L152.7285,31.4415 C151.968,31.755 151.251,31.8885 150.2655,31.8885 C148.611,31.8885 147.6705,30.9945 147.6705,29.115 Z M270.5295,36.6345 L276.9765,36.6345 L276.9765,2.616 L270.5295,2.616 L270.5295,36.6345 Z M290.9145,22.0875 C287.5125,21.594 286.3935,21.012 286.3935,19.536 C286.3935,18.1035 287.6025,17.1195 289.7055,17.1195 C291.9435,17.1195 293.0175,18.0135 293.376,19.938 L299.3295,19.938 C298.746,14.5665 294.8535,12.687 289.6605,12.687 C284.871,12.687 280.395,15.1035 280.395,19.983 C280.395,24.549 282.8115,26.3385 289.035,27.279 C292.3905,27.771 293.778,28.443 293.778,30.0555 C293.778,31.6665 292.614,32.6055 290.109,32.6055 C287.289,32.6055 286.2585,31.3965 285.99,29.2935 L279.948,29.2935 C280.1715,34.3515 283.842,37.1265 290.154,37.1265 C296.3295,37.1265 300,34.4865 300,29.4285 C300,24.414 296.778,22.9365 290.9145,22.0875 Z M132.2535,2.586 C130.0725,2.586 128.3655,4.197 128.3655,6.3315 C128.3655,8.466 130.0725,10.077 132.2535,10.077 C134.4825,10.077 136.1895,8.466 136.1895,6.3315 C136.1895,4.197 134.4825,2.586 132.2535,2.586 Z M230.268,32.2485 C226.641,32.2485 224.538,29.8305 224.538,25.131 L224.538,24.7725 C224.538,20.2965 226.776,17.79 230.133,17.79 C232.7745,17.79 234.429,19.0425 234.8775,21.774 L241.0095,21.774 C240.4275,15.06 235.416,12.687 229.998,12.687 C223.329,12.687 217.914,17.298 217.914,24.8625 L217.914,25.2195 C217.914,32.874 223.1055,37.1265 229.9545,37.1265 C236.757,37.1265 240.786,33.2775 241.1445,27.7275 L235.281,27.7275 C234.9675,30.726 232.863,32.2485 230.268,32.2485 Z M208.737,25.086 C208.737,29.517 206.634,32.202 203.0085,32.202 C199.338,32.202 197.2785,29.517 197.2785,25.041 L197.2785,24.684 C197.2785,20.2065 199.4265,17.6115 203.0085,17.6115 C206.634,17.6115 208.737,20.2965 208.737,24.7725 L208.737,25.086 Z M203.0085,12.687 C195.981,12.687 190.6545,17.4765 190.6545,24.8175 L190.6545,25.176 C190.6545,32.472 195.981,37.1265 202.9635,37.1265 C209.9895,37.1265 215.3175,32.427 215.3175,25.041 L215.3175,24.684 C215.3175,17.3865 210.036,12.687 203.0085,12.687 Z M260.5125,25.041 C260.5125,29.7855 258.0945,32.0685 254.9175,32.0685 C251.919,32.0685 249.6795,29.7855 249.6795,25.131 L249.6795,24.7725 C249.6795,20.118 251.784,17.6565 255.141,17.6565 C258.408,17.6565 260.5125,19.938 260.5125,24.684 L260.5125,25.041 Z M260.3325,16.671 C258.99,14.298 256.797,12.687 253.2165,12.687 C247.71,12.687 243.0555,17.208 243.0555,24.9075 L243.0555,25.2645 C243.0555,33.054 247.71,37.1265 253.038,37.1265 C256.35,37.1265 259.08,35.157 260.3325,32.829 L260.3325,36.6345 L266.778,36.6345 L266.778,13.224 L260.3325,13.224 L260.3325,16.671 Z M55.674,20.3265 C53.9295,20.3265 52.5165,18.912 52.5165,17.1675 C52.5165,15.423 53.9295,14.0085 55.674,14.0085 C57.42,14.0085 58.8345,15.423 58.8345,17.1675 C58.8345,18.912 57.42,20.3265 55.674,20.3265 Z M61.8285,0 C74.181,0 84.195,10.0125 84.195,22.3665 C84.195,34.7175 74.181,44.7315 61.8285,44.7315 C54.4545,44.7315 47.9145,41.163 43.839,35.6595 C45.0165,33.762 45.9435,31.713 46.5825,29.568 C49.284,35.2755 55.095,39.225 61.8285,39.225 C71.139,39.225 78.687,31.677 78.687,22.3665 C78.687,13.0545 71.139,5.5065 61.8285,5.5065 C53.034,5.5065 45.8115,12.2415 45.039,20.8335 C44.997,21.3645 44.9535,21.8745 44.9055,22.3665 C44.718,23.916 44.5125,25.626 44.1075,27.639 C41.7375,37.446 32.9025,44.7315 22.3665,44.7315 C10.014,44.7315 0,34.7175 0,22.3665 C0,10.0125 10.014,0 22.3665,0 C29.7405,0 36.2805,3.5685 40.356,9.072 C39.1785,10.9695 38.2515,13.0185 37.6125,15.1635 C34.911,9.456 29.1,5.5065 22.3665,5.5065 C13.056,5.5065 5.508,13.0545 5.508,22.3665 C5.508,31.677 13.056,39.225 22.3665,39.225 C31.161,39.225 38.382,32.4915 39.156,23.898 C39.198,23.367 39.2415,22.857 39.2895,22.3665 C39.477,20.814 39.6825,19.1055 40.0875,17.0925 C42.4575,7.284 51.2925,0 61.8285,0 Z M52.0155,25.1955 C52.0155,24.7275 52.434,24.345 52.947,24.345 L70.674,24.345 C71.1855,24.345 71.6055,24.7275 71.6055,25.1955 C71.6055,30.606 67.2195,34.992 61.8105,34.992 C56.4,34.992 52.0155,30.606 52.0155,25.1955 Z M70.656,17.1675 C70.656,18.912 69.2415,20.3265 67.497,20.3265 C65.7525,20.3265 64.338,18.912 64.338,17.1675 C64.338,15.423 65.7525,14.0085 67.497,14.0085 C69.2415,14.0085 70.656,15.423 70.656,17.1675 Z M129.0765,36.6345 L135.522,36.6345 L135.522,13.224 L129.0765,13.224 L129.0765,36.6345 Z M115.0215,28.98 L119.454,13.224 L125.6745,13.224 L118.29,36.6345 L111.933,36.6345 L107.9505,21.9525 L103.653,36.6345 L97.2075,36.6345 L90.09,13.224 L96.894,13.224 L101.0565,28.98 L105.5775,13.224 L110.904,13.224 L115.0215,28.98 Z M12.5715,25.1955 C12.5715,24.7275 12.99,24.345 13.503,24.345 L31.23,24.345 C31.7415,24.345 32.1615,24.7275 32.1615,25.1955 C32.1615,30.606 27.7755,34.992 22.3665,34.992 C16.9575,34.992 12.5715,30.606 12.5715,25.1955 Z M31.5285,17.1675 C31.5285,18.912 30.114,20.3265 28.3695,20.3265 C26.625,20.3265 25.2105,18.912 25.2105,17.1675 C25.2105,15.423 26.625,14.0085 28.3695,14.0085 C30.114,14.0085 31.5285,15.423 31.5285,17.1675 Z M16.548,20.3265 C14.802,20.3265 13.3875,18.912 13.3875,17.1675 C13.3875,15.423 14.802,14.0085 16.548,14.0085 C18.2925,14.0085 19.7055,15.423 19.7055,17.1675 C19.7055,18.912 18.2925,20.3265 16.548,20.3265 Z"
                      ></path>
                    </g>
                  </svg>
                  <span className="home-introduce-live">Live</span>
                </div>
                <h1 className="home-introduce-heading">
                  Explore the world from the comfort of your couch!
                </h1>
                <p className="home-introduce-desc">
                  Pick an online activity and take your family and friends with
                  you!
                </p>
                <button className="header__search-btn">
                  <span className="header__search-btn-icon">
                    See all online experiences
                  </span>
                </button>
              </div>
              <div className="home-introduce-image">
                <img
                  src={"img/img10.jpg"}
                  style={{ width: "462px", height: "272px" }}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="grid wide">
          <div className="home-product2">
            <h2>Travel safely & stay informed</h2>
            <h4>Read how our locals are ensuring Covid-19 proof experiences</h4>
            <div className="row sm-gutter home-product2-cover">
              <div className="col l-4 m-4 c-6">
                <div className="home-product2-body">
                  <img
                    src={"img/img11.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-product2-content">
                    <div className="home-product2-title">
                      About Withlocals Experiences
                    </div>
                    <p className="home-product2-desc">
                      From less crowded routes to easier personalization, we
                      have adjusted our experiences according to the new
                      situation to better serve the needs of our guests.
                    </p>
                    <a href="#" className="home-product2-link">
                      Read full article
                    </a>
                  </div>
                </div>
              </div>
              <div className="col l-4 m-4 c-6">
                <div className="home-product2-body">
                  <img
                    src={"img/img12.jpg"}
                    style={{
                      width: "100%",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "5px",
                    }}
                  ></img>
                  <div className="home-product2-content">
                    <div className="home-product2-title">
                      General safety information
                    </div>
                    <p className="home-product2-desc">
                      Our hosts are conscious about the current Covid-19
                      situation. Read more about the safety measure they take to
                      ensure your comfort.
                    </p>
                    <a href="#" className="home-product2-link">
                      Read full article
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
              <div className="home-product3">
                <h2>Top 5 cities to go with kids</h2>
                <div className="row sm-gutter home-product3-cover">
                  <div className="home-product3-body">
                    <div className="home-product3-content">
                      <div className="home-product3-title">1 | Paris</div>
                      <p className="home-product3-desc">
                        Paris with kids? Oui! Discover cool sights, fun
                        playgrounds & yummy food.
                      </p>
                      <a href="#" className="home-product3-link">
                        Explore Paris with kids
                      </a>
                    </div>
                    <img
                      src={"img/img13.jpg"}
                      style={{
                        width: "290px",
                        height: "244px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    ></img>
                  </div>
                </div>
                <div className="row sm-gutter home-product3-cover">
                  <div className="home-product3-body">
                    <div className="home-product3-content">
                      <div className="home-product3-title">1 | Paris</div>
                      <p className="home-product3-desc">
                        Paris with kids? Oui! Discover cool sights, fun
                        playgrounds & yummy food.
                      </p>
                      <a href="#" className="home-product3-link">
                        Explore Paris with kids
                      </a>
                    </div>
                    <img
                      src={"img/img13.jpg"}
                      style={{
                        width: "290px",
                        height: "244px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    ></img>
                  </div>
                </div>
                <div className="row sm-gutter home-product3-cover">
                  <div className="home-product3-body">
                    <div className="home-product3-content">
                      <div className="home-product3-title">1 | Paris</div>
                      <p className="home-product3-desc">
                        Paris with kids? Oui! Discover cool sights, fun
                        playgrounds & yummy food.
                      </p>
                      <a href="#" className="home-product3-link">
                        Explore Paris with kids
                      </a>
                    </div>
                    <img
                      src={"img/img13.jpg"}
                      style={{
                        width: "290px",
                        height: "244px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    ></img>
                  </div>
                </div>
                <div className="row sm-gutter home-product3-cover">
                  <div className="home-product3-body">
                    <div className="home-product3-content">
                      <div className="home-product3-title">1 | Paris</div>
                      <p className="home-product3-desc">
                        Paris with kids? Oui! Discover cool sights, fun
                        playgrounds & yummy food.
                      </p>
                      <a href="#" className="home-product3-link">
                        Explore Paris with kids
                      </a>
                    </div>
                    <img
                      src={"img/img13.jpg"}
                      style={{
                        width: "290px",
                        height: "244px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    ></img>
                  </div>
                </div>
                <div className="row sm-gutter home-product3-cover">
                  <div className="home-product3-body">
                    <div className="home-product3-content">
                      <div className="home-product3-title">1 | Paris</div>
                      <p className="home-product3-desc">
                        Paris with kids? Oui! Discover cool sights, fun
                        playgrounds & yummy food.
                      </p>
                      <a href="#" className="home-product3-link">
                        Explore Paris with kids
                      </a>
                    </div>
                    <img
                      src={"img/img13.jpg"}
                      style={{
                        width: "290px",
                        height: "244px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="home-product3">
                <h2>Top 5 cities for foodies</h2>
                <div className="row sm-gutter home-product3-cover">
                  <div className="home-product3-body">
                    <div className="home-product3-content">
                      <div className="home-product3-title">1 | Madrid</div>
                      <p className="home-product3-desc">
                        Madrid has it all from modern to traditional food. It's
                        simply 'delicioso'!
                      </p>
                      <a href="#" className="home-product3-link">
                        Explore Paris with kids
                      </a>
                    </div>
                    <img
                      src={"img/img14.jpg"}
                      style={{
                        width: "290px",
                        height: "244px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    ></img>
                  </div>
                </div>
                <div className="row sm-gutter home-product3-cover">
                  <div className="home-product3-body">
                    <div className="home-product3-content">
                      <div className="home-product3-title">1 | Madrid</div>
                      <p className="home-product3-desc">
                        Madrid has it all from modern to traditional food. It's
                        simply 'delicioso'!
                      </p>
                      <a href="#" className="home-product3-link">
                        Explore Paris with kids
                      </a>
                    </div>
                    <img
                      src={"img/img14.jpg"}
                      style={{
                        width: "290px",
                        height: "244px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    ></img>
                  </div>
                </div>
                <div className="row sm-gutter home-product3-cover">
                  <div className="home-product3-body">
                    <div className="home-product3-content">
                      <div className="home-product3-title">1 | Madrid</div>
                      <p className="home-product3-desc">
                        Madrid has it all from modern to traditional food. It's
                        simply 'delicioso'!
                      </p>
                      <a href="#" className="home-product3-link">
                        Explore Paris with kids
                      </a>
                    </div>
                    <img
                      src={"img/img14.jpg"}
                      style={{
                        width: "290px",
                        height: "244px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    ></img>
                  </div>
                </div>
                <div className="row sm-gutter home-product3-cover">
                  <div className="home-product3-body">
                    <div className="home-product3-content">
                      <div className="home-product3-title">1 | Madrid</div>
                      <p className="home-product3-desc">
                        Madrid has it all from modern to traditional food. It's
                        simply 'delicioso'!
                      </p>
                      <a href="#" className="home-product3-link">
                        Explore Paris with kids
                      </a>
                    </div>
                    <img
                      src={"img/img14.jpg"}
                      style={{
                        width: "290px",
                        height: "244px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    ></img>
                  </div>
                </div>
                <div className="row sm-gutter home-product3-cover">
                  <div className="home-product3-body">
                    <div className="home-product3-content">
                      <div className="home-product3-title">1 | Madrid</div>
                      <p className="home-product3-desc">
                        Madrid has it all from modern to traditional food. It's
                        simply 'delicioso'!
                      </p>
                      <a href="#" className="home-product3-link">
                        Explore Paris with kids
                      </a>
                    </div>
                    <img
                      src={"img/img14.jpg"}
                      style={{
                        width: "290px",
                        height: "244px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "5px",
                      }}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
