import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
function Infomation(props) {
  return (
    <div className="content__info">
      <Link to="/about">
        <img src="https://isamigiken.gattscom.com/image/top/info_img1.webp?_20230517" alt="会社概要"></img>
        <div className="text">
          <h3>Company</h3>
          <p>会社概要</p>
        </div>
      </Link>
      <Link to="/about#staff">
        <img src="https://isamigiken.gattscom.com/image/top/info_img2.webp" alt="スタッフ紹介"></img>
        <div className="text">
          <h3>Staff</h3>
          <p>スタッフ紹介</p>
        </div>
      </Link >
      <Link to="/recruit">
        <img src="https://isamigiken.gattscom.com/image/top/info_img3.webp" alt="採用情報"></img>
        <div className="text">
          <h3>Recruit</h3>
          <p>採用情報</p>
        </div>
      </Link >
    </div>
  );
}

export default Infomation;