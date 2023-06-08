import React from 'react';
import './style.css'
function News(props) {
  return (
    <div className="news">
      <div className="container__news">
        <div className="container__news__title col-2">
          <div className="text">
            <h3>News</h3>
            <p>お知らせ</p>
          </div>
          <a href="/news_lists" className="btn__new-list">一覧を見る</a>
        </div>
        <ul className="container__news__contents">
          <li>
            <time>2023年04月24日</time>
            <a href="/news_detail/108">ニチハ株式会社様の金属製外壁材・屋根材総合カタログに掲載されました。</a>
          </li>
          <li style={{'borderBottom': '1px solid #ccc'}}>
            <time>2023年04月24日</time>
            <a href="/news_detail/107">サイトリニューアルのお知らせ</a>
          </li>

        </ul>
        <a href="/news_lists" className="btn__new-list lists__btn__mobile">一覧を見る</a>
      </div>
    </div>
  );
}

export default News;