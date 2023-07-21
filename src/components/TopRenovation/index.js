import React, { Component } from "react";
import "./style.css";
import Slider from "react-slick";
import img from "../../asset/images/top/renovation_bg.png";
export default class Renovation extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <section className="Top-renovation">
        <div className="Top-renovation-top">
          <div className="Top-renovation-top-title">
            <h2>
              Renovation
              <strong className="strong">施工事例</strong>
            </h2>
          </div>
          <div className="Top-renovation-top-content">
            <p>
              施工事例についてのテキスト施工事例についてのテキスト施工事例についてのテキスト施
              工事例についてのテキスト
            </p>
          </div>
          <button className="Top-renovation-desc-button">
            <a href="/renovation">一覧を見る</a>
          </button>

          <div className="slider">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div key={1} className="img__container">
                <img className="img__main" src={img} alt="img"></img>
                <div className="slider-content">
                  <div className="content-btn">
                    <button>該当地域</button>
                    <span>大阪府</span>
                  </div>
                  <div className="content-btn">
                    <button>工事概要</button>
                    <span>屋根葺き替え工事</span>
                  </div>
                  <div className="content-btn">
                    <button>施工費用</button>
                    <span>100 万円</span>
                  </div>
                </div>
              </div>
              <div key={2} className="img__container">
                <img className="img__main" src={img} alt="img"></img>
                <div className="slider-content">
                  <div className="content-btn">
                    <button>該当地域</button>
                    <span>大阪府</span>
                  </div>
                  <div className="content-btn">
                    <button>工事概要</button>
                    <span>屋根葺き替え工事</span>
                  </div>
                  <div className="content-btn">
                    <button>施工費用</button>
                    <span>100 万円</span>
                  </div>
                </div>
              </div>
              <div key={3} className="img__container">
                <img className="img__main" src={img} alt="img"></img>
                <div className="slider-content">
                  <div className="content-btn">
                    <button>該当地域</button>
                    <span>大阪府</span>
                  </div>
                  <div className="content-btn">
                    <button>工事概要</button>
                    <span>屋根葺き替え工事</span>
                  </div>
                  <div className="content-btn">
                    <button>施工費用</button>
                    <span>100 万円</span>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="button__container" style={{ textAlign: "center" }}>
              <button className="button pre left" onClick={this.previous}>
                {"<"}
              </button>
              <button className="button next" onClick={this.next}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}