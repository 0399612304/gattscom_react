import React from 'react';
import './style.css'
function News(props) {
  return (
    <section className="news">
      <div className="container__news">
        <div className="container__news__title col-2">
          <div className="text">
            <h3>News</h3>
            <p>お知らせ</p>
          </div>
          <a href="/new-list" className="btn__new-list">一覧を見る</a>
        </div>
        <div className='desktop'>
        <ul className="container__news__contents">
          <li>
            <time>2022.12.01</time>
            <button>カテゴリー</button>
            <a href="/news_detail/108">お知らせのタイトルお知らせのタイトルお知らせのタイトルお知らせのタイトル</a>
          </li>
          {/* <li style={{'borderBottom': '1px solid #ccc'}}> */}
          <li>
          <time>2022.12.01</time>
            <button>カテゴリー</button>
            <a href="/news_detail/108">お知らせのタイトルお知らせのタイトルお知らせのタイトルお知らせのタイトル</a>
          </li>
          <li>
          <time>2022.12.01</time>
            <button>カテゴリー</button>
            <a href="/news_detail/108">お知らせのタイトルお知らせのタイトルお知らせのタイトルお知らせのタイトル</a>
          </li>
          <li>
          <time>2022.12.01</time>
            <button>カテゴリー</button>
            <a href="/news_detail/108">お知らせのタイトルお知らせのタイトルお知らせのタイトルお知らせのタイトル</a>
          </li>
          <li className="last">
          <time>2022.12.01</time>
            <button>カテゴリー</button>
            <a href="/news_detail/108">お知らせのタイトルお知らせのタイトルお知らせのタイトルお知らせのタイトル</a>
          </li>
        </ul>
        </div>
        <div className="mobile">
        <ul className="container__news__contents">
          <li>
            <time>2023年04月24日</time>
            <a href="/news_detail/108">ニチハ株式会社様の金属製外壁材・屋根材総合カタログに掲載されました。</a>
          </li>

          <li className="last">
          <time>2023年04月24日</time>
            <a href="/news_detail/108">サイトリニューアルのお知らせ</a>
          </li>
        </ul>
        </div>
        <a href="/new-list" className="btn__new-list lists__btn__mobile">一覧を見る</a>
      </div>
    </section>
  );
}

export default News;