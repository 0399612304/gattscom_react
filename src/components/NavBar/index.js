import React from 'react';
import './style.css'
import mail from '../../asset/images/common/header-mail.png'

function Navbar() {
  return (
    <div className="navbar">
			<ul>
				<li><a href="/">ホーム</a></li>
				<li><a href="/renovation">施工事例</a></li>
				<li><a href="/simulation">料金シミュレーション</a></li>
				<li><a href="/about">会社概要</a></li>
				<li><a href="/recruit/">採用情報</a></li>
			</ul>
			<div className="contact__area">
				<a className="mail" href="/contact">
					<img src={mail} alt=""/>
					<p>お問い合わせはこちら</p>
				</a>
			</div>
		</div>
  );
}

export default Navbar;