import React from "react";
import Slider from "react-slick";
import  { Component } from "react";
import './style.css'
import img1 from "../../asset/images/top/ss_slider_img1.png";
import img2 from "../../asset/images/top/ss_slider_img2.png";
import img3 from "../../asset/images/top/ss_slider_img3.jpg";
import img4 from "../../asset/images/top/ss_slider_img4.jpg";
import icon1 from "../../asset/images/top/ss_slider_icon1.png";
import icon2 from "../../asset/images/top/ss_slider_icon2.png";
import icon3 from "../../asset/images/top/ss_slider_icon3.png";
import icon4 from "../../asset/images/top/ss_slider_icon4.png";


export default class IsamiGiken extends Component {
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
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <section className='content'>
        <div className="content__header">
          <div className="content__header--style">
            <h1>IsamiGiken</h1><span></span><h2>功美技建</h2>
          </div>
          <div className="content__title">
            <p>屋根・外壁の補修・雨漏り修理リフォームのご相談ならお任せ！</p>
            <p>建築のことなら何でもご相談ください！</p>
          </div>
        </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1} className='img__container'>
            <img className="img__main" src={img1} alt='img'>
            </img>
            <div className="img__icon">
              <img src={icon1} alt='img'>
              </img>
              <span>古い外壁を新しくしたい</span>
            </div>
          </div>
          <div key={2} className='img__container'>
            <img className="img__main" src={img2} alt='img'></img>
            <div className="img__icon">
              <img  src={icon2} alt='img'>
              </img>
              <span>屋根の劣化が気になる</span>
            </div>
          </div>
          <div key={3} className='img__container'>
            <img className="img__main" src={img3} alt='img'></img>
            <div className="img__icon">
              <img src={icon3} alt='img'>
              </img>
              <span>納屋の壁を綺麗にしたい</span>
            </div>

          </div>
          <div key={4} className='img__container'>
            <img className="img__main" src={img4} alt='img'></img>
            <div className="img__icon">
              <img src={icon4} alt='img'>
              </img>
              <span>ベランダで水漏れがある</span>
            </div>
          </div>
        </Slider >
        <div className="button__container" style={{ textAlign: "center" }}>
          <button className="button pre" onClick={this.previous}>
            {'<'}
          </button>
          <button className="button next" onClick={this.next}>
            {'>'}
          </button>
        </div>
        {/* <div className="slider">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div key={1} className="img__container">
              <img className="img__main" src={img} alt="img"></img>
            </div>
            <div key={2} className="img__container">
              <img className="img__main" src={img} alt="img"></img>
            </div>
            <div key={3} className="img__container">
              <img className="img__main" src={img} alt="img"></img>
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
          </div> */}
      </section >
    );
  }
}