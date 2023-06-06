import React from 'react';
import './style.css'
const Header =() =>{
  return (
    <div className="App">
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-phone">
            <div className="footer-top-phone-content">
              <h1>06-6844-7078</h1>
              <br />
              <a className = "footer-top-phone-content-time" href='https://home.gattscom.com/'>【受付時間】9：00〜17：30　 </a> 
              <a className = "footer-top-phone-content-time"  href='https://home.gattscom.com/'>【定休日】日曜日・祝日</a>
            </div>
            <div className="footer-top-phone-icon">
              <img alt='' src="https://isamigiken.gattscom.com/image/common/footer-phone.png" ></img>
            </div>
          </div>
          <div className="footer-top-email">
            <div className="footer-top-email-content">
              <h1>Contact</h1>
              <br />
              <div>
              <a  href='https://home.gattscom.com/'>お問い合わせ</a>
              </div>
            </div>
            <div className="footer-top-email-icon">
              <img alt='' src="https://isamigiken.gattscom.com/./image/common/footer-mail.png"></img>
            </div>
          </div>
        </div>
        <div className="footer-last">
          <div className="footer-last-name">
            <div className="footer-last-name-img" >
              <a  href='https://home.gattscom.com/'>
                <img alt='' src="https://isamigiken.gattscom.com/image/common/factory-name.png"></img>
              </a>
            </div>
            <div className="footer-last-name-content">
              <div className="footer-last-name-content-address">〒560-0014　大阪府豊中市熊野町4-1-18</div>
              <div >
                TEL： <a  href='https://home.gattscom.com/'>06-6844-7078</a>
              </div>
            </div>
          </div>
          <div className="footer-last-menu">
            <div className="footer-last-menu-content">
            <ul>
              <li>
                <a  href='https://home.gattscom.com/'>ホーム</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/cssref/sel_after.php">施工事例</a>
              </li>
              <li>
                <a  href='https://home.gattscom.com/'>料金シミュレーション</a>
              </li>
              <li>
                <a  href='https://home.gattscom.com/'>会社概要</a>
              </li>
              <li>
                <a  href='https://home.gattscom.com/'>採用情報</a>
              </li>
              <li>
                <a  href='https://home.gattscom.com/'>お知らせ</a>
              </li>
            </ul>
            </div>
            <div>
              <ul>
                <li>
                プライバシーポリシー
                </li>
              </ul>
            </div>
            <div className="footer-last-menu-copyright">
            Copyright© Isamigiken Co.,ltd. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;