import React from 'react';
import './style.css'

function Navbar() {
  return (
    <div className="navbar">
			<ul>
				<li><a href="https://home.gattscom.com/">ホーム</a></li>
				<li><a href="https://home.gattscom.com/">施工事例</a></li>
				<li><a href="https://home.gattscom.com/">料金シミュレーション</a></li>
				<li><a href="https://home.gattscom.com/">会社概要</a></li>
				<li><a href="https://home.gattscom.com/">採用情報</a></li>
			</ul>
			<div className="contact__area">
				<a className="mail" href="https://home.gattscom.com/">
					<img src="https://isamigiken.gattscom.com/./image/common/header-mail.png" alt=""/>
					<p>お問い合わせはこちら</p>
				</a>
			</div>
		</div>
  );
}

export default Navbar;