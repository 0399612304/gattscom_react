import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import "./style.css";
import { options } from "../../constant/index";
function SimulationPage() {
  const [dataChildren, setDataChildren] = useState();
  const [dataTittle, setDataTittle] = useState();
  const [dataChildren1, setDataChildren1] = useState();
  const [dataChildren2, setDataChildren2] = useState();
  const [dataChildren3, setDataChildren3] = useState();
  const [dataCount, setDataCount] = useState(false);
  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [price, setPrice] = useState(false);
  const [selected_ids, setId] = useState([]);
  const [selected_ids1, setId1] = useState([]);
  const [selected_ids2, setId2] = useState([]);
  const [selected_ids3, setId3] = useState([]);
  const [selected_ids4, setId4] = useState([]);
  const [selected_ids5, setId5] = useState([]);
  const [total1, setTotal1] = useState();
  const [total2, setTotal2] = useState();
  const [total3, setTotal3] = useState();
  const [total5, setTotal5] = useState();

  const selectOption = (opt) => {
    setDataChildren(opt.children);
    setDataTittle(opt.tittle);
    setTimeout(() => {
      handleClickButton1();
    }, 100);
  };
  const selectOption1 = (opt) => {
    setDataChildren1([
      {
        id: opt.id,
        main1: opt.main1,
        tittle1: opt.tittle1,
        children1: opt.children1,
        total1: opt.total1,
      },
    ]);
    setTimeout(() => {
      handleClickButton2();
    }, 100);
  };


  const selectOption2 = (opt) => {
    setDataChildren2([
      {
        id: opt.id,
        main2: opt.main2,
        tittle2: opt.tittle2,
        children2: opt.children2,
        total2: opt.total2,
      },
    ]);
    setTimeout(() => {
      handleClickButton3();
    }, 100);
  };

  const addID = (e) => {
    setId([...selected_ids, e]);
  };
  const addID1 = (e) => {
    setId1([e]);
  };

  const addID2 = (e) => {
    setId2([e]);
  };

  const addID3 = (e) => {
    if (selected_ids3.length > 1) {
      selected_ids3.length = 0;
    }
    setId3([e]);
  };
  const addID5 = (e) => {
    setId5([e]);
  };

  //total
  const addTotal1 = (e) => {
    setTotal1(e);
  };
  const addTotal2 = (e) => {
    setTotal2(e);
  };
  const addTotal3 = (e) => {
    setTotal3(e);
  };
  const addTotal5 = (e) => {
    setTotal5(e);
  };
  const handleClick = (e) => {
    setDataCount(true);
    setPrice(false);
    setTimeout(() => {
      handleClickButton3();
    }, 100);
    addTotal5(e.total3)
    addID5(e.id)
  };
  const a = total1 + total2 + total3 + total5 ;
  let formattedPrice = a.toLocaleString();
  console.log(formattedPrice);
  const priceClick = () => {
    setPrice(true);
    setTimeout(() => {
      handleClickButton5();
    }, 100);
  };
  const handleClickButton1 = () => {
    const button2 = document.getElementById("div2");
    setTimeout(() => {
      button2?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };
  const handleClickButton2 = () => {
    const button3 = document.getElementById("div3");
    button3.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      button3.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };
  const handleClickButton3 = () => {
    const button4 = document.getElementById("btn4");
    setTimeout(() => {
      button4?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };
  const handleClickButton5 = () => {
    const button5 = document.getElementById("div6");
    setTimeout(() => {
      button5?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };
  useEffect(() => {
    setId4([...selected_ids1, ...selected_ids2, ...selected_ids3,...selected_ids5]);
  }, [selected_ids1, selected_ids2, selected_ids3,selected_ids5]);
  console.log("dataChildren2",dataChildren2);
  // console.log("length",dataChildren2?[0]?.children2?.length);

  return (
    <Layout id="simulation">
      <section className="content-simulation focus">
        <div className="content__table top">
          <div className="content__table__heading">
            <h2>修正箇所はどこですか？</h2>
          </div>
          <div className="content__table__row">
            <div className="row__container">
              {options?.map((opt, idx) => (
                <button
                  id="btn1"
                  key={idx}
                  onClick={() => {
                    selectOption(opt);
                    setDataCount(false);
                    setHide(false);
                    setHide2(false);
                    setPrice(false);
                    addID1(opt.id);
                    addID(opt.id);
                    addTotal1(opt.total);
                  }}
                  className={
                    selected_ids4?.findIndex((e) => e === opt.id) !== -1
                      ? "row__box focus"
                      : "row__box"
                  }
                >
                  <p>{opt?.main}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
        {dataChildren ? (
          <div id="div2" className="content__table">
            <div className="content__table__heading">
              {<h2>{dataTittle}</h2>}
            </div>
            <div className="content__table__row">
              <div className="row__container">
                {dataChildren?.map((e, index) => (
                  <button
                    id="btn2"
                    key={index}
                    onClick={() =>
                      selectOption1(e) &
                      setDataCount(false) &
                      setHide(false) &
                      setHide2(true) &
                      setPrice(false) &
                      addID2(e.id) &
                      addID(e.id) &
                      addTotal2(e.total1)
                    }
                    className={
                      selected_ids4?.findIndex((el) => el === e.id) !== -1
                        ? "row__box focus"
                        : "row__box"
                    }
                  >
                    <p>{e?.main1}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {dataChildren1 && hide2 === true ? (
          <div id="div3" className="content__table">
            <div className="content__table__heading">
              {<h2>{dataChildren1[0]?.tittle1}</h2>}
            </div>
            <div className="content__table__row">
              <div className="row__container">
                {dataChildren1?.[0].children1.map((e, index) => (
                  <button
                    id="btn3"
                    key={index}
                    onClick={() =>
                      selectOption2(e) &
                      setDataCount(false) &
                      setHide(true) &
                      setPrice(false) &
                      addID3(e.id) &
                      addID(e.id) &
                      addTotal3(e.total2)
                    }
                    className={
                      selected_ids4?.findIndex((el) => el === e.id) !== -1
                        ? "row__box focus"
                        : "row__box"
                    }
                  >
                    <p>{e.main2}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {dataChildren2?.[0]?.children2?.length!==0 && hide === true && (
          <div id="div4" className="content__table">
            <div className="content__table__heading">
              {<h2>{dataChildren2[0]?.tittle2}</h2>}
            </div>
            <div className="content__table__row">
              <div className="row__container">
                {dataChildren2?.[0].children2.map((e, index) => (
                  <button
                    id="btn4"
                    key={index}
                    onClick={()=>handleClick(e)}
                    className={
                      selected_ids4?.findIndex((el) => el === e.id) !== -1
                        ? "row__box focus"
                        : "row__box"
                    }
                  >
                    <p>{e.main3}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        {dataChildren2?.[0]?.children2?.length===0 || dataCount === true ? (
          <div className="price">
            <button id="btn5" onClick={priceClick}>
              シミュレーション結果を見る
            </button>
          </div>
        ) : (
          ""
        )}
        {price === true ? (
          <div id="div6" className="total-top">
            <div className="total">
              <h3>お見積工事価格</h3>
              <p>
                税込
                <span className="total-price">{formattedPrice}</span>円
              </p>
              <a href="/contact">さらに詳しい見積はこちら</a>
            </div>
            <div className="total-clear">
              <a href="/simulation">もう一度シミュレーションを行う</a>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </Layout>
  );
}

export default SimulationPage;
























