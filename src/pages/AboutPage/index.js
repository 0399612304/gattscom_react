import React from "react";
import Layout from "../../Layout";
import "./style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function AboutPage() {
  const position = [34.7909919, 135.4779044];

  return (
    <Layout id="about">
      <section className="about">
        <div className="container">
          <div className="content-about">
            <div>
              <h2>会社概要</h2>
            </div>
            <table>
              <tbody>
                <tr>
                  <th>会社名</th>
                  <td>有限会社 功美技建（いさみぎけん）</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>
                    〒560-0014<br></br>
                    大阪府豊中市熊野町４丁目１−１８
                  </td>
                </tr>
                <tr>
                  <th>営業時間</th>
                  <td>09:00 ~ 17:00</td>
                </tr>
                <tr>
                  <th>休日</th>
                  <td>第２土曜日、日曜日、祝日</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>06-6844-7078</td>
                </tr>
                <tr>
                  <th>FAX</th>
                  <td>06-6844-7088</td>
                </tr>
                <tr>
                  <th>代表者</th>
                  <td>西田　功介</td>
                </tr>
                <tr>
                  <th>従業員数</th>
                  <td>５名</td>
                </tr>
                <tr>
                  <th>創業</th>
                  <td>平成 7年 7月</td>
                </tr>
                <tr>
                  <th>法人設立</th>
                  <td>平成 17年 1月</td>
                </tr>
                <tr>
                  <th>資本金</th>
                  <td>1000万円</td>
                </tr>
                <tr>
                  <th>事業内容</th>
                  <td>
                    住宅外装工事（新築・リフォーム）
                    <ol>
                      <li className="li">
                        外壁材工事
                        <ul>
                          <li>
                            窯業系サイディング工事：ニチハ、クボタ松下電工外装、旭トステム、他
                          </li>
                          <li>金属サイディング工事：Kmew、アイジー工業、他</li>
                          <li>
                            パワーボード工事：旭化成、クリオン、住友金属鉱山、他
                          </li>
                        </ul>
                      </li>
                      <li className="li">
                        屋根材工事
                        <ul>
                          <li>新生瓦工事：Kmew、ニチハ、他</li>
                          <li>和洋瓦工事：近畿セラミック、他各種瓦メーカー</li>
                        </ul>
                      </li>
                      <li className="li">
                        雨樋材工事
                        <ul>
                          <li>
                            パナソニック、セキスイ、タニタハウジングウェア、他
                          </li>
                        </ul>
                      </li>
                      <li className="li">
                        塗装工事
                        <ul>
                          <li>
                            各種塗装工事：SK化研、アイカ工業、菊水化学工業、他
                          </li>
                        </ul>
                      </li>
                      <li className="li">
                        シーリング工事
                        <ul>
                          シーリング全般工事：オート化学工業、サンライズ、他
                        </ul>
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th>取引先</th>
                  <td>商社、ハウスメーカー、地場ホームビルダー・工務店</td>
                </tr>
                <tr>
                  <th>工事エリア</th>
                  <td>全国対応</td>
                </tr>
                <tr>
                  <th>工事実績</th>
                  <td>年間施工棟数　350棟</td>
                </tr>
                <tr>
                  <th>資格</th>
                  <td>
                    <ul>
                      日本窯業外装材協会　認定サイディング施工士（登録番号：GGA098）
                    </ul>
                    <ul>ニチハ登録施工店　（登録番号：NGKー近畿−259）他</ul>
                    <ul>ルーガ認定施工店</ul>
                    <ul>産業廃棄物収集運搬許可　第02700187661号</ul>
                    <ul>
                      建築工事業　屋根工事業　タイル・レンガ・ブロック工事業許可（般ー3）第140845号
                    </ul>
                  </td>
                </tr>
                <tr className="last">
                  <th>理念</th>
                  <td>
                    信用づくり・良いものづくり
                    <br className="br"></br>
                    （お客様満足の高工事品質・・・技術＋コスト）
                    <br></br>
                    協力　　感謝　　挑戦
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="map">
            <h2>アクセスマップ</h2>
            <div>
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ width: "100%", height: "30vw", zIndex: "1" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          <div className="bottom">
            <h2>スタッフ紹介</h2>
            <div>
              <h3>準備中</h3>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
