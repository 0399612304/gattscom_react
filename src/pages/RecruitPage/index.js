import React from "react";
import Layout from "../../Layout";
import "./style.css";

function RecruitPage() {
  return (
    <Layout id="recruit">
      <section className="content-recruit">
        <div className="container">
          <table className="tb-recruit">
            <tbody>
              <tr className="tr-top">
                <th>雇用形態</th>
                <td>正社員</td>
              </tr>
              <tr>
                <th>勤務時間</th>
                <td>
                  9:00〜17:00
                  <br className="br"></br>
                  ※現場の状況によります。
                </td>
              </tr>
              <tr>
                <th>仕事内容</th>
                <td>
                  工事は屋根・外壁の補修、雨漏り修理リフォームが中心です。
                </td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>屋根・外壁専門工事</td>
              </tr>
              <tr>
                <th>その他</th>
                <td>
                  施工の質にこだわった仕事は終わったあとも気持ちいい!!
                  <br></br>
                  最高級の充実感が得られる職場!!
                </td>
              </tr>
              <tr>
                <th>給与</th>
                <td>
                  月給 : 25万円以上
                  <br className="br"></br>
                  ※施工管理の資格がある方は優遇あり
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}

export default RecruitPage;
