import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { dataHeaderSlide, srcImgHeader } from '../../constant';
import './style.css'
const HomeSlide = (props) => {
  const data = dataHeaderSlide
  const [img, setImg] = useState(
    {
      src: '',
      title: ''
    }
  )
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  useEffect(() => {
    switch (props.id) {
      case 'about':
        setImg(srcImgHeader[0])
        break;
      case 'recruit':
        setImg(srcImgHeader[1])

        break;
      case 'contact':
        setImg(srcImgHeader[2])
        break;
      case 'simulation':
        setImg(srcImgHeader[3])
        break;
      case 'renovation':
        setImg(srcImgHeader[4])
        break;
        case 'new':
        setImg(srcImgHeader[5])
        break;
        case 'privacy_policy':
        setImg(srcImgHeader[6])
        break;
      default:

    }
  }, [props.id])
  return (
    <>
      <div className="container-fluild slide__container">
        {
          props.id !== 'home' ?
            <div className='slide__container--nothomepage'>
              <img src={img.src} alt={img.title} className='slide__img slide__img--nothomepage '></img>
              <div className='img__title img__title--nothomepage'>
                <h1>{img.title}</h1>
                <span></span>
                <p>{img.text}</p>
              </div>
            </div>
            //arrows={false}
            : <Slider {...settings} >
              {data?.map((item) => (
                <div key={item.id}>
                  <img src={item.src} alt='img' className='slide__img'></img>
                </div>
              ))}
            </Slider>
        }

      </div>
    </>
  )
}

export default HomeSlide