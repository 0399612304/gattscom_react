import React from 'react';
import Layout from '../../Layout';
import './style.css'

function AboutPage() {
  return (
    <Layout id='about'>
      <div className='content'>
        <div className='content__table'>
          <div className='content__table__heading'>
            <h3>会社概要</h3>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>会社名</h4>
            <p>
              有限会社 功美技建（いさみぎけん）
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>所在地</h4>
            <p>
              〒560-0014<br></br>大阪府豊中市熊野町４丁目１−１８
            </p>
          </div >
          <div className='content__table__row'>
            <h4 className='col-3'>営業時間</h4>
            <p>

              09:00 ~ 17:00
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>休日</h4>
            <p>
              第２土曜日、日曜日、祝日
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>電話番号</h4>
            <p>
              06-6844-7078
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>FAX</h4>
            <p>
              06-6844-7088
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>代表者</h4>
            <p>
              西田　功介
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>従業員数</h4>
            <p>

              ５名
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>創業</h4>
            <p>
              平成 7年 7月
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>法人設立</h4>
            <p>
              平成 17年 1月
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>資本金</h4>
            <p>
              1000万円
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>事業内容
            </h4>
            <p>
              住宅外装工事（新築・リフォーム）
              <br></br>
              <br></br>
              1. 外壁材工事<br></br>
              <ul>
                <li> 窯業系サイディング工事：ニチハ、クボタ松下電工外装、旭トステム、他</li>
                <li> 金属サイディング工事：Kmew、アイジー工業、他</li>
                <li>パワーボード工事：旭化成、クリオン、住友金属鉱山、他</li>
              </ul>
              2. 屋根材工事<br></br>
              <ul>
                <li>新生瓦工事：Kmew、ニチハ、他</li>
                <li> 和洋瓦工事：近畿セラミック、他各種瓦メーカー</li>
              </ul>
              3. 雨樋材工事<br></br>
              <ul>
                <li>パナソニック、セキスイ、タニタハウジングウェア、他</li>
              </ul>
              4. 塗装工事<br></br>
              <ul>
                <li>各種塗装工事：SK化研、アイカ工業、菊水化学工業、他</li>
              </ul>

              5. シーリング工事<br></br>
              シーリング全般工事：オート化学工業、サンライズ、他<br></br>
            </p>

          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>取引先</h4>
            <p>
              商社、ハウスメーカー、地場ホームビルダー・工務店
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>工事エリア</h4>
            <p>
              全国対応

            </p>
          </div >
          <div className='content__table__row'>
            <h4 className='col-3'>工事実績
            </h4>
            <p>
              年間施工棟数　350棟

            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>資格</h4>
            <p>
              <ul>
                <li>日本窯業外装材協会　認定サイディング施工士（登録番号：GGA098）</li>
                <li>ニチハ登録施工店　（登録番号：NGKー近畿−259）他</li>
                <li>ルーガ認定施工店</li>
                <li>産業廃棄物収集運搬許可　第02700187661号</li>
                <li>建築工事業　屋根工事業　タイル・レンガ・ブロック工事業許可（般ー3）第140845号</li>
              </ul>
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>理念</h4>
              <b>信用づくり・良いものづくり（お客様満足の高工事品質・・・技術＋コスト）
                協力　　感謝　　挑戦</b>
          </div>
        </div>
      </div>
      {
        // bỏ cái map chỗ ni
      }
    </Layout>
  );
}

export default AboutPage;