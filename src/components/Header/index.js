
import React from 'react';
import './style.css'
import Navbar from '../NavBar/index';
import HomeSlide from '../Slide';
import HeaderMobile from '../HeaderMobile';
import HeaderLogo from '../../asset/images/common/header-logo.png';

const Header = (props) => {
  return (
    <header className='header'>
      <div className="header__nav">
        <div lg={4} className="header__nav__logo">
          <a href="/">
            <img src={HeaderLogo} alt="logo" />
          </a>
        </div>
        <div lg={8} className="nav__container m-0">
          <Navbar></Navbar>
        </div>
        <HeaderMobile />
      </div>
      <HomeSlide id={props.id} />
    </header>
  );
}

export default Header;