
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css'
import Navbar from '../NavBar/index';
import HomeSlide from '../Slide';
import HeaderMobile from '../HeaderMobile';
import HeaderLogo from '../../asset/images/common/header-logo.png';

const Header =(props) =>{
  return (
    <div className='header'>
      <Row className="header__nav">
        <Col lg = {4} className="header__nav__logo">
          <a href="/">
            <img src={HeaderLogo} alt="logo" />
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