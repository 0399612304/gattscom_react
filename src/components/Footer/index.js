import React from "react";
import "./style.css";
const Header = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="tel:06-6844-7078" className="footer-top-phone">
          <div className="footer-top-phone-content">
            <h3>06-6844-7078</h3>
            <br />
            <p
              className="footer-top-phone-content-time"
              href="https://home.gattscom.com/"
            >
              【受付時間】9 ：00〜17 ：30　<br className="br"></br>
              【定休日】日曜日・祝日
            </p>
          </div>
          <div className="footer-top-phone-icon">
            <img
              className="phone"
              alt="images-phone"
              src="https://isamigiken.gattscom.com/image/common/footer-phone.png"
            ></img>
          </div>
        </a>
        <a href="/contact" className="footer-top-email">
          <div className="footer-top-email-content">
            <h3 href="/contact">Contact</h3>
            <br />
              <p>お問い合わせ</p>
            </div>
            <img
              alt="images-mail"
              src="https://isamigiken.gattscom.com/./image/common/footer-mail.png"
            ></img>
        </a>
      </div>
      <div className="footer-last">
        <div className="footer-last-name">
          <div className="footer-last-name-img">
            <a href="/">
              <img
                alt="comon"
                src="https://isamigiken.gattscom.com/image/common/factory-name.png"
              ></img>
            </a>
          </div>
          <div className="footer-last-name-content">
            <p className="footer-last-name-content-address">
              〒560-0014　大阪府豊中市熊野町4-1-18
            </p>
            <div className="tel">
              <p>
                TEL ：<a href="tel:06-6844-7078">06-6844-7078　</a>
              </p>
              <br className="br"></br>
              <p className="mail">
                EMAIL ：<a href="/contact">isamigiken@ybb.ne.jp</a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-last-menu">
          <div className="footer-last-menu-content">
            <ul>
              <li>
                <a href="/">ホーム</a>
              </li>
              <li>
                <a href="/renovation">施工事例</a>
              </li>
              <li>
                <a href="/simulation">料金シミュレーション</a>
              </li>
              <li>
                <a href="/about">会社概要</a>
              </li>
              <li>
                <a href="/recruit">採用情報</a>
              </li>
              <li>
                <a href="/new-list">お知らせ</a>
              </li>
            </ul>
          </div>
          <div className="privacy-copyright">
            <ul>
              <li className="privacy">
                <a href="/privacy-policy">プライバシーポリシー</a>
              </li>
            </ul>
            <p>Copyright© Isamigiken Co.,ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Header;
