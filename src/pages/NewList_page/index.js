import React from "react";
import Layout from "../../Layout";
import "./style.css";

function NewlistPage() {
  return (
    <Layout id="new">
      <section className="content">
        <ul>
          <li className="content-top">
            <time>2023年04月24日</time>
            <a href="/news_detail">
              ニチハ株式会社様の金属製外壁材・屋根材総合カタログに掲載されました。
            </a>
          </li>
          <li className="content-desc">
            <time>2023年04月24日</time>
            <a href="/news_detail">サイトリニューアルのお知らせ。</a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default NewlistPage;
