import React, { useState } from 'react';
import './style.css'
import phone from '../../asset/images/common/header-phone.png'
import mail from '../../asset/images/common/header-mail.png'

function HeaderMobile() {
  const [open, setOpen] = useState(false)
  return (
    <div className="header__mobile">
      <div className={`${open?'open__btn active':'open__btn'}`} onClick={()=>setOpen(!open)}><span></span><span></span><span></span></div>
      <nav className={`${open?'open header__mobile__nav':'header__mobile__nav'}`}>
        <ul>
          <li><a href="/">ホーム</a></li>
          <li><a href="/renovation">施工事例</a></li>
          <li><a href="/simulation">料金シミュレーション</a></li>
          <li><a href="/about">会社概要</a></li>
          <li><a href="/recruit">採用情報</a></li>
          <li><a href="/new-list">お知らせ</a></li>
        </ul>
        <div className="contact__area__mobile">
          <a href="tel:0668447078" className="phone">
            <img src={phone} alt="" />
            <span>06-6844-7078</span>
          </a>
          <a href="/contact" className="mail">
            <img src={mail} alt="" />
            <p>お問い合わせはこちら</p>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default HeaderMobile;