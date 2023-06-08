import React from 'react';
import Layout from '../../Layout';
import './style.css'

function NewlistPage() {
    return (
      <Layout id='new'>
        <div className='content'>
            <ul>
                <li className='content-top'>
                    <div className='time'>2023年04月24日</div>
                    <a href='/about' className='name'>ニチハ株式会社様の金属製外壁材・屋根材総合カタログに掲載されました。</a>
                </li>
                <li className='content-desc'>
                    <div className='time'>2023年04月24日</div>
                    <a href='/about' className='name'>サイトリニューアルのお知らせ。</a>
                </li>
            </ul>
        </div>
      </Layout>
    );
  }
  
  export default NewlistPage;