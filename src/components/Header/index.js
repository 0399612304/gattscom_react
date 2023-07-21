
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css'
import Navbar from '../NavBar/index';
import HomeSlide from '../Slide';
import HeaderMobile from '../HeaderMobile';
import HeaderLogo from '../../asset/images/common/header-logo.png';

const Header =(props) =>{
  return (
    <header className='header'>
      <div className="header__nav">
        <div  className="header__nav__logo">
          <a href="/">
            <img src={HeaderLogo} alt="logo" />
          </a>
        </div>
        <div  className="nav__container ">
          <Navbar></Navbar>
        </div>
        <HeaderMobile/>
    </div>
    <HomeSlide id={props.id}/>
    </header>  
  );
}

export default Header;