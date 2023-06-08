
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css'
import Navbar from '../NavBar/index';
import HomeSlide from '../Slide';
import HeaderMobile from '../HeaderMobile';
const Header =(props) =>{
  return (
    <div className='header'>
      <Row className="header__nav">
        <Col lg = {4} className="header__nav__logo">
          <a href="/">
            <img src='https://isamigiken.gattscom.com/./image/common/header-logo.png' alt="logo" />
          </a>
        </Col>
        <Col lg = {8} className="nav__container m-0">
          <Navbar></Navbar>
        </Col>
        <HeaderMobile/>
    </Row>
    <HomeSlide id={props.id}/>
    </div>  
  );
}

export default Header;