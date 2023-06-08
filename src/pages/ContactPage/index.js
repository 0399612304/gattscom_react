import React from 'react';
import Layout from '../../Layout';
import './style.css'
function Contact() {
  return (
    <Layout id='contact'>
      <div className='content'>
        <div className='content__table'>
          <div className='content__table__row' style={{ 'border-top': '1px solid #ccc' }}>
            <div className='col-3 title__container'>
              <span>必須</span>
              <h4  >お名前 </h4>
            </div>
            <div className='input__container'>
              <input placeholder='例： 山田　太郎'></input>
            </div>
          </div>
          <div className='content__table__row'>
            <div className='col-3 title__container' style={{'height': '150px'}}>
              <span>必須</span>
              <h4  >ご住所 </h4>
            </div>
            <div className='input__container' style={{'display': 'flex', 'flexDirection': 'column'}}>
              <input placeholder="〒 166-0002" style={{'width': '40%'}}></input>
              <input placeholder="例： 東京都杉並区高円寺北2-13-3" style={{'marginTop': '10px'}}></input>
            </div>
          </div>
          <div className='content__table__row'>
            <div className='col-3 title__container'>
              <span>必須</span>
              <h4  >メールアドレス </h4>
            </div>
            <div className='input__container'>
              <input placeholder="例： yamada-t@example.com"></input>
            </div>
          </div>
          <div className='content__table__row'>
            <div className='col-3 title__container'>
              <span>必須</span>
              <h4  >電話番号 </h4>
            </div>
            <div className='input__container'>
              <input placeholder="例：09000123456 ※ハイフン（-）不要"></input>
            </div>
          </div>
          <div className='content__table__row' >
            <div className='col-3 title__container' style={{'height': '90px'}}>
              <span>必須</span>
              <h4  >お問合わせ内容 </h4>
            </div>
            <div className='input__container' >
              <textarea placeholder="例：屋根を修理してもらいたいです。"></textarea>
            </div>
          </div>
        </div>
        <button className='btn--submit'>入力した内容を確認する</button>
      </div>
    </Layout>
  );
}

export default Contact;