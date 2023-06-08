import React from "react";
import "./style.css";
const Company = () => {
  return (
   <div className="Top-information">
    <div className="Top-information-company">
        <a href="https://home.gattscom.com/">
            <img alt="" src="https://isamigiken.gattscom.com/image/top/info_img1.png?_20230517"></img>
            <div className="Top-information-staff-text">
                <h3>Company</h3>
                <div>会社概要</div>
            </div>
        </a>
    </div>
    <div className="Top-information-staff">
    <a href="https://home.gattscom.com/">
            <img alt="" src="https://isamigiken.gattscom.com/image/top/info_img2.jpg"></img>
            <div className="Top-information-staff-text">
                <h3>Staff</h3>
                <div>スタッフ紹介</div>
            </div>
        </a>
    </div>
    <div className="Top-information-recruit">
    <a href="https://home.gattscom.com/">
            <img alt="" src="https://isamigiken.gattscom.com/image/top/info_img3.jpg"></img>
            <div className="Top-information-staff-text">
                <h3>Recruit</h3>
                <div>採用情報</div>
            </div>
        </a>
    </div>
   </div>
  );
};

export default Company;
