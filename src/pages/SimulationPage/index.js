import React, { useState } from 'react';
import Layout from '../../Layout';
import './style.css'
import {options} from '../../constant/index'
function SimulationPage() {
  const [dataChildren, setDataChildren] = useState()
  const selectOption = (opt)=>{
    setDataChildren(opt.children)
  }
  return (
    <Layout id='simulation'>
      <div className='content'>
        <div className='content__table' style={{ 'marginTop': '1vw' }}>
          <div className='content__table__heading'>
            <h3>修正箇所はどこですか？</h3>
          </div>
          <div className='content__table__row'>
            <div className='row__container'>
              {
                options?.map((opt, idx) => (
                  <button key={idx} onClick={()=>selectOption(opt)} className='row__box'>
                    <p>{opt?.main}</p>
                  </button>
                ))
              }
            </div>
          </div>
        </div>
        {
          dataChildren?
          <div className='content__table'>
          <div className='content__table__heading'>
            <h3>修正箇所はどこですか？</h3>
          </div>
          <div className='content__table__row'>
            <div className='row__container'>
              {
                dataChildren?.map((e, index) => (
                  <button key={index} className='row__box'>
                    <p>{e}</p>
                  </button>
                ))
              }
            </div>
          </div>
        </div>:''
        }
       
      </div>
    </Layout>
  );
}

export default SimulationPage;