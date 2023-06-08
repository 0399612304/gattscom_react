import React from 'react';
import Layout from '../../Layout';
import './style.css'

function RecruitPage() {
  return (
    <Layout id='recruit'>
      <div className='content'>
        <div className='content__table'>
          <div className='content__table__row' style={{ 'border-top': '1px solid #ccc'}}>
            <h4 className='col-3' >雇用形態 </h4>
            <p>
              正社員
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>勤務時間	</h4>
            <p>
              9:00〜17:00 ※現場の状況によります。
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>仕事内容	</h4>
            <p>
              工事は屋根・外壁の補修、雨漏り修理リフォームが中心です。
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>事業内容</h4>
            <p>
              屋根・外壁専門工事
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>その他	</h4>
            <p>
              施工の質にこだわった仕事は終わったあとも気持ちいい!!
              最高級の充実感が得られる職場!!
            </p>
          </div>
          <div className='content__table__row'>
            <h4 className='col-3'>給与</h4>
            <p>
              月給 : 25万円以上 ※施工管理の資格がある方は優遇あり
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default RecruitPage;